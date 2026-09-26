#!/usr/bin/env python3
"""
TRUPTI YOGA STUDIO — image pipeline.

Generates optimised, responsive copies of the canonical brand images from
assets/img/* into assets/img-gen/* (a sibling folder, kept separate from the
source image tree so the sources remain untouched).

Output layout:
    assets/img-gen/hero/           hero.jpg, hero-md.jpg
    assets/img-gen/sections/       welcome, story, approach, teacher, award
    assets/img-gen/gallery/        gal-pose-*, pose-full-*, gal-media-*, gal-award
    assets/img-gen/testimonials/   testimonial-*

Run:  python3 _tools/make_images.py
"""
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "assets", "img-gen")
HOSTDIR = os.path.join(OUT, "hero")
SECDIR = os.path.join(OUT, "sections")
GALDIR = os.path.join(OUT, "gallery")
TSTDIR = os.path.join(OUT, "testimonials")
for d in (HOSTDIR, SECDIR, GALDIR, TSTDIR):
    os.makedirs(d, exist_ok=True)
convert = "convert"

# Welcome image source: use assets/img/welcome.png when the user drops it in,
# otherwise fall back to the canonical group-pose photograph.
WELCOME_SRC = "assets/img/welcome.png"
if not os.path.exists(os.path.join(ROOT, WELCOME_SRC)):
    WELCOME_SRC = "assets/img/poses/13.png"

# Approach image source: use assets/img/approach.png when present, otherwise
# fall back to the canonical practice photograph.
APPROACH_SRC = "assets/img/approach.png"
if not os.path.exists(os.path.join(ROOT, APPROACH_SRC)):
    APPROACH_SRC = "assets/img/poses/5.png"

JOBS = [
    # (source, output-path-suffix, max-dimension, quality)
    ("assets/img/slider/sliders.png",     "hero/hero.jpg",        1600, 82),
    ("assets/img/slider/sliders.png",     "hero/hero-md.jpg",      1200, 82),
    (WELCOME_SRC,                         "sections/welcome.jpg", 1200, 82),
    ("assets/img/poses/12.png",            "sections/story.jpg",   1200, 82),
    (APPROACH_SRC,                        "sections/approach.jpg",1200, 82),
    ("assets/img/poses/6.png",             "sections/teacher.jpg", 1100, 82),
    ("assets/img/awards/award-photo.jpg",  "sections/award.jpg",   1280, 82),
    ("assets/img/awards/award-photo.jpg",  "gallery/gal-award.jpg", 640, 78),
]


def dimensions(path):
    out = subprocess.run([convert, "/tmp"], capture_output=True)
    del out
    identify = subprocess.run(["identify", "-format", "%wx%h", path],
                              capture_output=True, text=True)
    if identify.returncode != 0:
        return None
    w, h = identify.stdout.strip().lower().split("x")
    return int(w), int(h)


def fit_dim(w, h, max_dim):
    if max(w, h) <= max_dim:
        return w, h
    if w >= h:
        return max_dim, round(h * max_dim / w)
    return round(w * max_dim / h), max_dim


def run(args):
    r = subprocess.run(args, capture_output=True, text=True)
    if r.returncode != 0:
        print("  FAILED:", " ".join(args))
        print(r.stderr.strip() or r.stdout.strip())
        return False
    return True


def main():
    os.makedirs(OUT, exist_ok=True)
    n = 0

    for src, rel, max_dim, q in JOBS:
        full = os.path.join(ROOT, src)
        if not os.path.exists(full):
            print("  SKIP (missing source):", src)
            continue
        dim = dimensions(full)
        target = os.path.join(OUT, rel)
        if dim is None:
            run([convert, full, "-auto-orient", "-strip", "-quality", str(q), target])
        else:
            w, h = fit_dim(*dim, max_dim)
            run([convert, full, "-auto-orient", "-strip", "-resize", "%sx%s" % (w, h),
                 "-quality", str(q), target])
        n += 1

    # Yoga poses: gallery thumbnails + lightbox copies
    pose_order = list(range(1, 16))
    for i, n_ in enumerate(pose_order, start=1):
        src = os.path.join(ROOT, "assets", "img", "poses", "%d.png" % n_)
        if not os.path.exists(src):
            continue
        idx = "%02d" % i
        run([convert, src, "-auto-orient", "-strip", "-resize", "640x>",
             "-quality", "78", os.path.join(GALDIR, "gal-pose-%s.jpg" % idx)])
        run([convert, src, "-auto-orient", "-strip", "-resize", "1200x>",
             "-quality", "82", os.path.join(GALDIR, "pose-full-%s.jpg" % idx)])
        n += 2

    # Press / media coverage thumbnails
    for i in range(1, 8):
        src = os.path.join(ROOT, "assets", "img", "media", "media-%d.jpg" % i)
        if not os.path.exists(src):
            continue
        run([convert, src, "-auto-orient", "-strip", "-resize", "640x>",
             "-quality", "78", os.path.join(GALDIR, "gal-media-%02d.jpg" % i)])
        n += 1

    # Testimonials (auto-discovered from the source folder — just drop the
    # original screenshot into assets/img/testimonials/ and re-run).
    tst_src = os.path.join(ROOT, "assets", "img", "testimonials")
    for name in sorted(os.listdir(tst_src)):
        base, ext = os.path.splitext(name)
        if ext.lower() not in (".jpg", ".jpeg", ".png"):
            continue
        run([convert, os.path.join(tst_src, name), "-auto-orient", "-strip",
             "-resize", "1000x>", "-quality", "80",
             os.path.join(TSTDIR, "testimonial-%s.jpg" % base)])
        n += 1

    print("done — %d files -> %s" % (n, OUT))


if __name__ == "__main__":
    sys.exit(main())