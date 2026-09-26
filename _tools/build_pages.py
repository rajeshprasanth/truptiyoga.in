#!/usr/bin/env python3
import io

HEADER = open('_tools/shared-header.html').read()
FOOTER = open('_tools/shared-footer.html').read()
SCRIPTS = open('_tools/shared-scripts.html').read()

SKIP = '  <a class="skip-link" href="#main">Skip to main content</a>\n'

HTML = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>{title}</title>
  <meta name="description" content="{desc}">
  <link rel="canonical" href="https://truptiyoga.in/{file}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="Trupti Yoga Studio">
  <meta property="og:title" content="{ogtitle}">
  <meta property="og:description" content="{ogdesc}">
  <meta property="og:url" content="https://truptiyoga.in/{file}">
  <meta property="og:image" content="https://truptiyoga.in/assets/img-gen/{ogimg}">
  <meta name="twitter:card" content="summary_large_image">
  <link rel="icon" href="assets/img/favicon.png">
  <link rel="apple-touch-icon" href="assets/img/favicon.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Poppins:wght@400;500;600:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
  <script type="application/ld+json">
  {jsonld}
  </script>
</head>
<body>
"""

JSONLD = """{
    "@context": "https://schema.org",
    "@type": "YogaStudio",
    "name": "Trupti Yoga Studio",
    "image": "https://truptiyoga.in/assets/img-gen/hero/hero.jpg",
    "url": "https://truptiyoga.in/",
    "telephone": "+919025812951",
    "email": "truptiyoga.in@gmail.com",
    "address": [
      { "@type": "PostalAddress", "streetAddress": "No. 48B, 6th Street, Sriram Nagar, Thiruninravur", "addressLocality": "Chennai", "postalCode": "602024", "addressCountry": "IN" }
    ]
  }"""

def build(fname, title, desc, ogtitle, ogdesc, ogimg, main, jsonld=JSONLD, jsonimg="hero/hero.jpg"):
    head = HTML.format(title=title, desc=desc, file=fname, ogtitle=ogtitle, ogdesc=ogdesc, ogimg=ogimg,
                       jsonld=jsonld.replace('"image": "https://truptiyoga.in/assets/img-gen/hero/hero.jpg"',
                                             '"image": "https://truptiyoga.in/assets/img-gen/%s"' % jsonimg))
    out = head + SKIP + HEADER + '\n  <main id="main">\n' + main + '\n  </main>\n\n' + FOOTER + SCRIPTS
    with open(fname, 'w') as f:
        f.write(out)
    print("built", fname)

ICON = lambda s: '<svg class="icon" aria-hidden="true" focusable="false"><use href="assets/icons.svg?v=brand#%s"></use></svg>' % s

hero = lambda crumb, title, sub: """    <section class="page-hero">
      <div class="page-hero-inner">
        <p class="crumbs"><a href="index.html">Home</a><span class="sep">/</span>%s</p>
        <h1>%s</h1>
        <p>%s</p>
      </div>
    </section>""" % (crumb, title, sub)

# ------------------------------------------------------------------
# CLASSES
# ------------------------------------------------------------------
main = hero("Classes", "Classes & Practice", "Guidance according to your experience, ability, and needs.")
main += """
    <section class="section">
      <div class="container">
        <div class="sec-head reveal">
          <span class="sec-eyebrow">Find your practice</span>
          <h2 class="sec-title">Our Classes</h2>
          <p class="sec-sub">Yoga can meet us at different stages of life. Our classes are designed to provide guidance according to the student's experience, ability, and needs.</p>
          <span class="sec-divider" aria-hidden="true"></span>
        </div>
        <div id="classes-grid" class="classes-grid">
          <noscript><p class="sec-sub">Please enable JavaScript to view the class list, or <a href="contact.html">contact us</a> directly.</p></noscript>
        </div>
        <p class="sec-sub" style="text-align:center; margin-top:30px; font-size:16.5px;">This list is indicative — please get in touch to confirm current classes, timings, and availability.</p>
      </div>
    </section>
"""

main += """
    <section class="section section--bare" style="padding-top:0;">
      <div class="container">
        <div class="cta-band reveal">
          <span class="sec-eyebrow" style="color:#ffd97a;">Interested in joining a class?</span>
          <h2>Let Us Help You Begin</h2>
          <p>Get in touch and we will guide you to a class that suits your needs.</p>
          <div class="hero-actions">
            <a class="btn btn--light" href="contact.html">Get in Touch</a>
            <a class="btn btn--on-dark" href="about.html">Meet Your Teacher</a>
          </div>
        </div>
      </div>
    </section>"""
build("classes.html",
      "Classes — Trupti Yoga Studio, Chennai",
      "Explore yoga classes at Trupti Yoga Studio in Thiruninravur, Chennai — beginners, general practice, pranayama, meditation, and personal sessions.",
      "Classes & Practice at Trupti Yoga Studio",
      "Guidance according to your experience, ability, and needs. Yoga is for everyone.",
      "hero/hero.jpg", main)

# ------------------------------------------------------------------
# APPROACH
# ------------------------------------------------------------------
main = hero("Our Approach", "Our Approach", "Yoga is a journey, not a competition.")
main += """
    <section class="section">
      <div class="container">
        <div class="split">
          <div class="split-body reveal" style="padding-right:10px;">
            <span class="sec-eyebrow">How we practice</span>
            <h2>Yoga Is a Journey, Not a Competition</h2>
            <p>At Trupti Yoga Studio, we encourage our students to practice with patience and awareness.</p>
            <p>Every body is different, and progress does not look the same for everyone. We focus on understanding the practice, breathing with awareness, respecting the body's limits, and developing consistency over time.</p>
            <p>Our goal is not to make every student perform the same posture perfectly. It is to help each person discover a practice that supports their own journey towards greater balance and well-being.</p>
          </div>
          <div class="split-media reveal">
            <div class="frame frame--4-3">
              <img src="assets/img-gen/sections/approach.jpg" alt="Yoga practice at Trupti Yoga Studio" loading="lazy">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="philosophy">
      <div class="container philosophy-inner">
        <span class="sec-eyebrow">Guiding principles</span>
        <h2 class="reveal">What We Emphasise</h2>
        <div class="philosophy-grid reveal">
          <div class="philosophy-item"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg?v=brand#i-check"></use></svg><p>Practice over perfection</p></div>
          <div class="philosophy-item"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg?v=brand#i-check"></use></svg><p>Awareness over comparison</p></div>
          <div class="philosophy-item"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg?v=brand#i-check"></use></svg><p>Consistency over quick results</p></div>
          <div class="philosophy-item"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg?v=brand#i-check"></use></svg><p>Guidance over promises</p></div>
          <div class="philosophy-item"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg?v=brand#i-check"></use></svg><p>Understanding the practice</p></div>
          <div class="philosophy-item"><svg class="icon" aria-hidden="true"><use href="assets/icons.svg?v=brand#i-check"></use></svg><p>Respecting the body's limits</p></div>
        </div>
      </div>
    </section>

    <section class="section section--tint">
      <div class="container">
        <div class="cta-band reveal">
          <span class="sec-eyebrow" style="color:#ffd97a;">Come as you are</span>
          <h2>Start From Where You Are</h2>
          <p>You do not need previous experience to begin. We will guide you patiently, step by step.</p>
          <div class="hero-actions">
            <a class="btn btn--light" href="contact.html">Join a Class</a>
            <a class="btn btn--on-dark" href="classes.html">View Classes</a>
          </div>
        </div>
      </div>
    </section>"""
build("approach.html",
      "Our Approach — Trupti Yoga Studio, Chennai",
      "At Trupti Yoga Studio we practice with patience and awareness. Yoga is a journey, not a competition — practice, learn, understand, and progress at your own pace.",
      "Our Approach — A Journey, Not a Competition",
      "Practice over perfection. Awareness over comparison. Consistency over quick results.",
      "sections/approach.jpg", main)

# ------------------------------------------------------------------
# GALLERY
# ------------------------------------------------------------------
main = hero("Gallery", "Gallery", "Moments from practice, the studio, and the community.")
main += """
    <section class="section">
      <div class="container">
        <div id="gallery-filters" class="filters" role="group" aria-label="Filter gallery">
          <noscript><span class="filter-btn is-active">All</span></noscript>
        </div>
        <div id="gallery-grid" class="gallery-grid">
          <noscript><p class="sec-sub">Please enable JavaScript to view the gallery, or <a href="contact.html">contact the studio</a>. Photographs are also shared on our Facebook and Instagram pages.</p></noscript>
        </div>
        <p class="gallery-empty">No photographs in this category yet.</p>
      </div>
    </section>
"""
main += """
    <dialog id="lightbox" class="lightbox" aria-label="Image viewer">
      <span id="lb-heading" class="visually-hidden"></span>
      <button type="button" id="lb-prev" class="lb-nav lb-prev" aria-label="Previous image">&#8592;</button>
      <button type="button" id="lb-next" class="lb-nav lb-next" aria-label="Next image">&#8594;</button>
      <div class="lb-media"><img id="lb-img" alt=""></div>
      <div class="lb-meta">
        <span id="lb-caption" class="lb-caption"></span>
        <button type="button" id="lb-close" class="lb-close" aria-label="Close image viewer">&#215;</button>
      </div>
    </dialog>
"""
build("gallery.html",
      "Gallery — Trupti Yoga Studio, Chennai",
      "Browse photographs from yoga classes, the studio, and community moments at Trupti Yoga Studio in Thiruninravur, Chennai.",
      "Gallery — Trupti Yoga Studio",
      "Moments from practice, the studio, and the community.",
      "gallery/gal-pose-01.jpg", main)

# ------------------------------------------------------------------
# TESTIMONIALS
# ------------------------------------------------------------------
main = hero("Testimonials", "What Our Students Say", "Every student's journey is different.")
main += """
    <section class="section">
      <div class="container">
        <div class="sec-head reveal">
          <span class="sec-eyebrow">Words from our students</span>
          <h2 class="sec-title">Shared With Sincere Appreciation</h2>
          <p class="sec-sub">We are grateful to those who have shared a part of their journey with us.</p>
          <span class="sec-divider" aria-hidden="true"></span>
        </div>
        <div class="testimonial-shell reveal">
          <div id="testimonial-track" class="testimonial-track">
            <noscript><p class="sec-sub">Please enable JavaScript to view student feedback, or <a href="contact.html">contact the studio</a>. Testimonials are also shared on our social media pages.</p></noscript>
          </div>
          <div class="testimonial-actions">
            <button type="button" class="testimonial-btn testimonial-prev" aria-label="Previous testimonials">&#8592;</button>
            <button type="button" class="testimonial-btn testimonial-next" aria-label="Next testimonials">&#8594;</button>
          </div>
        </div>
        <p class="testimonials-note">These are real words shared by our students. If you practice with us and would like to share your experience, we would be honoured to hear from you.</p>
      </div>
    </section>

    <section class="section section--bare" style="padding-top:0;">
      <div class="container">
        <div class="cta-band reveal">
          <span class="sec-eyebrow" style="color:#ffd97a;">Begin your own journey</span>
          <h2>Join Our Community</h2>
          <p>Start your practice with us, and let your own experience speak.</p>
          <div class="hero-actions">
            <a class="btn btn--light" href="contact.html">Join a Class</a>
            <a class="btn btn--on-dark" href="about.html">About the Studio</a>
          </div>
        </div>
      </div>
    </section>"""
build("testimonials.html",
      "Testimonials — Trupti Yoga Studio, Chennai",
      "Read what students share about practicing at Trupti Yoga Studio in Thiruninravur, Chennai.",
      "What Our Students Say — Trupti Yoga Studio",
      "Every student's journey is different. We are grateful to those who shared a part of theirs.",
      "hero/hero.jpg", main)

# ------------------------------------------------------------------
# FAQ
# ------------------------------------------------------------------
main = hero("FAQ", "Frequently Asked Questions", "Practical answers for newcomers and returning students alike.")
main += """
    <section class="section">
      <div class="container">
        <div class="sec-head reveal">
          <span class="sec-eyebrow">Good to know</span>
          <h2 class="sec-title">Common Questions</h2>
          <p class="sec-sub">If you have a question that is not answered here, we would be happy to help.</p>
          <span class="sec-divider" aria-hidden="true"></span>
        </div>
        <div id="faq-list" class="faq-list">
          <noscript><p class="sec-sub">Please enable JavaScript to view the FAQ, or call us at <a href="tel:+919025812951">+91 90258 12951</a>.</p></noscript>
        </div>
      </div>
    </section>

    <section class="section section--bare" style="padding-top:0;">
      <div class="container">
        <div class="cta-band reveal">
          <span class="sec-eyebrow" style="color:#ffd97a;">Still curious?</span>
          <h2>Ask Us Directly</h2>
          <p>We are happy to answer any question about classes, timings, and what to expect.</p>
          <div class="hero-actions">
            <a class="btn btn--light" href="contact.html">Get in Touch</a>
            <a class="btn btn--on-dark" href="tel:+919025812951">Call the Studio</a>
          </div>
        </div>
      </div>
    </section>"""
build("faq.html",
      "FAQ — Trupti Yoga Studio, Chennai",
      "Answers to common questions about joining Trupti Yoga Studio in Thiruninravur, Chennai — experience, flexibility, what to wear, and more.",
      "Frequently Asked Questions — Trupti Yoga Studio",
      "Practical answers for newcomers and returning students alike.",
      "hero/hero.jpg", main)

# ------------------------------------------------------------------
# CONTACT
# ------------------------------------------------------------------
main = hero("Contact", "We Would Be Happy to Hear From You", "Whether you are new to yoga, returning to practice, or simply looking for a place to continue your journey, feel free to get in touch.")
main += """
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <div class="contact-info reveal">
            <article class="contact-item">
              <span class="icon-tile">""" + ICON("i-phone") + """</span>
              <div>
                <h3>Call Us</h3>
                <p><a href="tel:+919025812951">+91 90258 12951</a></p>
              </div>
            </article>
            <article class="contact-item">
              <span class="icon-tile">""" + ICON("i-mail") + """</span>
              <div>
                <h3>Email Us</h3>
                <p><a href="mailto:truptiyoga.in@gmail.com">truptiyoga.in@gmail.com</a></p>
              </div>
            </article>
            <article class="contact-item">
              <span class="icon-tile">""" + ICON("i-whatsapp") + """</span>
              <div>
                <h3>WhatsApp</h3>
                <p><a href="https://wa.me/+919025812951" target="_blank" rel="noopener">Message us on WhatsApp</a></p>
              </div>
            </article>
            <article class="contact-item">
              <span class="icon-tile">""" + ICON("i-pin") + """</span>
              <div>
                <h3>Our Studio</h3>
                <p>Thiruninravur,<br>Chennai – 602024</p>
              </div>
            </article>
            <div class="contact-social">
              <a href="https://www.facebook.com/Truptiyogain-1676093939148452/" target="_blank" rel="noopener" aria-label="Facebook"><img class="social-img" src="assets/img/social/facebook.jpg" alt="Facebook" width="44" height="44"></a>
              <a href="https://www.instagram.com/truptiyoga.in/profilecard/?igsh=MXFwMzd0Mjl0b3k1cw==" target="_blank" rel="noopener" aria-label="Instagram"><img class="social-img" src="assets/img/social/instagram.jpg" alt="Instagram" width="44" height="44"></a>
              <a href="https://youtube.com/channel/UCzvp51ODq6W5MI6fbsEOo-w" target="_blank" rel="noopener" aria-label="YouTube"><img class="social-img" src="assets/img/social/youtube.jpg" alt="YouTube" width="44" height="44"></a>
              <a href="https://wa.me/+919025812951" target="_blank" rel="noopener" aria-label="WhatsApp"><img class="social-img" src="assets/img/social/whatsapp.jpg" alt="WhatsApp" width="44" height="44"></a>
            </div>
          </div>
          <div class="reveal">
            <form id="enquiry-form" class="form" novalidate>
              <h2 style="font-size:26px; margin-bottom:6px;">Send an Enquiry</h2>
              <p class="sec-sub" style="font-size:16.5px; margin-bottom:22px;">Fill in the form and we will get back to you. Submitting opens your email app with the message ready to send.</p>
              <div class="form-grid">
                <div class="form-field">
                  <label for="f-name">Name</label>
                  <input id="f-name" name="name" type="text" autocomplete="name" required>
                </div>
                <div class="form-field">
                  <label for="f-phone">Phone Number</label>
                  <input id="f-phone" name="phone" type="tel" autocomplete="tel" required>
                </div>
                <div class="form-field">
                  <label for="f-email">Email <span style="font-weight:400; color:var(--muted);">(optional)</span></label>
                  <input id="f-email" name="email" type="email" autocomplete="email">
                </div>
                <div class="form-field">
                  <label for="f-studio">Preferred Studio</label>
                  <select id="f-studio" name="studio">
                    <option value="" selected>Not sure</option>
                    <option value="Studio 1 - Thiruninravur">Studio 1 — Thiruninravur</option>
                  </select>
                </div>
                <div class="form-field form-field--full">
                  <label for="f-class">Interested Class</label>
                  <select id="f-class" name="klass">
                    <option value="" selected>Not sure yet</option>
                    <option>Beginners Yoga</option>
                    <option>General Yoga</option>
                    <option>Pranayama</option>
                    <option>Meditation</option>
                    <option>Flexibility &amp; Mobility</option>
                    <option>Personal / One-to-One Session</option>
                  </select>
                </div>
                <div class="form-field form-field--full">
                  <label for="f-msg">Message</label>
                  <textarea id="f-msg" name="message" placeholder="Tell us a little about yourself and what you are looking for."></textarea>
                  <span class="help">Please do not share sensitive personal details in this message.</span>
                </div>
                <div class="form-actions form-field--full">
                  <button type="submit" class="btn btn--primary">Send Enquiry <svg class="icon" aria-hidden="true"><use href="assets/icons.svg?v=brand#i-arrow"></use></svg></button>
                  <span class="help">Prefer to talk? Call us at +91 90258 12951.</span>
                </div>
              </div>
              <div id="form-success" class="form-success" role="status">
                Thank you. Your email app should open with your enquiry ready to send — if it did not open, please write to us directly at truptiyoga.in@gmail.com.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section id="locations" class="section section--tint">
      <div class="container">
        <div class="sec-head reveal">
          <span class="sec-eyebrow">Our studio in Chennai</span>
          <h2 class="sec-title">Find Us</h2>
          <p class="sec-sub">We look forward to welcoming you.</p>
          <span class="sec-divider" aria-hidden="true"></span>
        </div>
        <div class="locations-grid">
          <article class="card location-card reveal">
            <div class="location-head">
              <svg class="icon" aria-hidden="true"><use href="assets/icons.svg?v=brand#i-pin"></use></svg>
              <div>
                <h3>Thiruninravur</h3>
              </div>
            </div>
            <div class="location-body">
              <p class="location-address">No. 48B, 6th Street,<br>Sriram Nagar,<br>Thiruninravur,<br>Chennai – 602024</p>
              <p class="location-landmark">Sriram Nagar, Thiruninravur — Chennai 602024</p>
              <div class="location-actions">
                <a class="btn btn--soft btn--sm" href="https://maps.google.com/?q=Trupti+Yoga+Thiruninravur" target="_blank" rel="noopener">Get Directions <svg class="icon" aria-hidden="true"><use href="assets/icons.svg?v=brand#i-arrow-up-right"></use></svg></a>
                <a class="btn btn--ghost btn--sm" href="tel:+919025812951">Call Studio</a>
              </div>
            </div>
          </article>
          <article class="card location-card location-map-card reveal reveal-delay-1">
            <div class="location-head">
              <svg class="icon" aria-hidden="true"><use href="assets/icons.svg?v=brand#i-compass"></use></svg>
              <div>
                <span class="studio-tag">Find us</span>
                <h3>Thiruninravur</h3>
              </div>
            </div>
            <div class="location-map">
              <iframe src="https://www.google.com/maps?q=Trupti%20Yoga%20Thiruninravur&output=embed" title="Map showing Trupti Yoga Studio, Thiruninravur" loading="lazy" allowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </article>
        </div>
      </div>
    </section>
"""

jsonld_contact = """{
    "@context": "https://schema.org",
    "@type": "YogaStudio",
    "name": "Trupti Yoga Studio",
    "image": "https://truptiyoga.in/assets/img-gen/hero/hero.jpg",
    "url": "https://truptiyoga.in/",
    "telephone": "+919025812951",
    "email": "truptiyoga.in@gmail.com",
    "address": [
      { "@type": "PostalAddress", "streetAddress": "No. 48B, 6th Street, Sriram Nagar, Thiruninravur", "addressLocality": "Chennai", "postalCode": "602024", "addressCountry": "IN" }
    ]
  }"""
build("contact.html",
      "Contact — Trupti Yoga Studio, Chennai",
      "Contact Trupti Yoga Studio in Thiruninravur, Chennai — phone +91 90258 12951, email truptiyoga.in@gmail.com, or send an enquiry.",
      "Contact Us — Trupti Yoga Studio",
      "We would be happy to hear from you — call, email, WhatsApp, or send an enquiry.",
      "hero/hero.jpg", main, jsonld=jsonld_contact)