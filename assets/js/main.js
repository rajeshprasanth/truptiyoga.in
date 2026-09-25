(function () {
  "use strict";

  var DATA = window.TRUPTI_DATA || {};
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function ic(symbol) {
    return '<svg class="icon" aria-hidden="true" focusable="false"><use href="assets/icons.svg?v=brand#' + symbol + '"></use></svg>';
  }

  document.documentElement.classList.add("js");

  /* ---------- Site-wide helpers ---------- */
  function setActiveNav() {
    var path = location.pathname.split("/").pop() || "index.html";
    if (path === "") path = "index.html";
    var links = document.querySelectorAll(".nav-link, .mobile-nav-link");
    for (var i = 0; i < links.length; i++) {
      var href = (links[i].getAttribute("href") || "").split("#")[0];
      var hash = links[i].getAttribute("href") || "";
      if (href === path || (path === "index.html" && (href === "" || href === "index.html"))) {
        links[i].classList.add("is-active");
        if (hash.indexOf("#") === 0) {
          var t = document.querySelector(hash);
          if (t) t.setAttribute("tabindex", "-1");
        }
      } else {
        links[i].classList.remove("is-active");
      }
    }
    var navCta = document.querySelector(".nav-cta .btn[data-active]");
    if (navCta && path === "contact.html") navCta.setAttribute("aria-current", "page");
  }
  setActiveNav();

  /* ---------- Sticky header + scroll top ---------- */
  var header = document.querySelector(".site-header");
  var scrollTopBtn = document.querySelector(".scroll-top");
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
    if (scrollTopBtn) scrollTopBtn.classList.toggle("is-visible", window.scrollY > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (scrollTopBtn) scrollTopBtn.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" }); });

  /* ---------- Mobile menu ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".mobile-menu");
  var menuClose = document.querySelector(".mobile-menu-close");
  var topbar = document.querySelector(".topbar");
  if (toggle && menu) {
    function openMenu() {
      menu.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      if (menuClose) menuClose.focus();
    }
    function closeMenu() {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    toggle.addEventListener("click", openMenu);
    if (menuClose) menuClose.addEventListener("click", closeMenu);
    menu.addEventListener("click", function (e) {
      if (e.target.closest(".mobile-nav-link")) closeMenu();
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && menu.classList.contains("is-open")) closeMenu();
    });
  }

  /* ---------- Scroll reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduceMotion) {
    var ro = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          ro.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach(function (el) { ro.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* ---------- Render: schedule ---------- */
  function renderSchedule() {
    var body = document.getElementById("schedule-body");
    if (!body || !DATA.schedule) return;
    var rows = DATA.schedule.rows || [];
    var html = "";
    for (var i = 0; i < rows.length; i++) {
      var r = rows[i];
      html += "<tr><td>" + r.day + "</td><td>" + r.studio + "</td><td>" + r.className +
        "</td><td>" + r.level + '</td><td class="time">' + r.time + "</td></tr>";
    }
    body.innerHTML = html;

    var note = document.querySelector(".schedule-note");
    if (note && DATA.schedule.note) note.textContent = DATA.schedule.note;
  }
  renderSchedule();

  /* ---------- Render: FAQ ---------- */
  function renderFaqs() {
    var list = document.getElementById("faq-list");
    if (!list || !DATA.faqs || !DATA.faqs.length) return;
    var html = "";
    for (var i = 0; i < DATA.faqs.length; i++) {
      var f = DATA.faqs[i];
      var qid = "faq-q-" + i, aid = "faq-a-" + i;
      html += '<div class="faq-item">' +
        '<button type="button" class="faq-q" id="' + qid + '" aria-expanded="false" aria-controls="' + aid + '">' +
        '<span class="faq-q-title">' + f.q + "</span>" + ic("i-chevron") + "</button>" +
        '<div class="faq-a" id="' + aid + '" role="region" aria-labelledby="' + qid + '"><div class="faq-a-inner"><p>' + f.a + "</p></div></div>" +
        "</div>";
    }
    list.innerHTML = html;

    list.addEventListener("click", function (e) {
      var btn = e.target.closest(".faq-q");
      if (!btn) return;
      var item = btn.closest(".faq-item");
      var answer = item.querySelector(".faq-a");
      var isOpen = item.classList.contains("is-open");
      var open = list.querySelector(".faq-item.is-open");
      if (open && open !== item) {
        open.classList.remove("is-open");
        open.querySelector(".faq-q").setAttribute("aria-expanded", "false");
        open.querySelector(".faq-a").style.maxHeight = "";
      }
      item.classList.toggle("is-open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
      answer.style.maxHeight = !isOpen ? answer.scrollHeight + "px" : "";
    });
  }
  renderFaqs();

  /* ---------- Render: classes ---------- */
  function renderClasses() {
    var grid = document.getElementById("classes-grid");
    if (!grid || !DATA.classes) return;
    var html = "";
    for (var i = 0; i < DATA.classes.length; i++) {
      var c = DATA.classes[i];
      var tags = "";
      for (var t = 0; t < (c.suitable || []).length; t++) {
        tags += '<span class="tag' + (t % 2 ? " tag--alt" : "") + '">' + c.suitable[t] + "</span>";
      }
      var meta = "";
      if (c.duration) meta += '<span>' + ic("i-clock") + " Duration: " + c.duration + "</span>";
      if (c.schedule) meta += '<span>' + ic("i-calendar") + " Schedule: " + c.schedule + "</span>";
      html += '<article class="card class-card reveal">' +
        '<div class="card-icon">' + ic("i-lotus") + "</div>" +
        '<h3 class="card-title">' + c.name + "</h3>" +
        '<div class="class-tags">' + tags + "</div>" +
        '<p class="card-text">' + c.description + "</p>" +
        (meta ? '<div class="class-meta">' + meta + "</div>" : "") +
        '<a class="tlink" href="contact.html">Enquire about this class' + ic("i-arrow") + "</a>" +
        "</article>";
    }
    grid.innerHTML = html;
    observeNewReveals(grid);
  }
  renderClasses();

  /* ---------- Render: audience ---------- */
  function renderAudience() {
    var grid = document.getElementById("audience-grid");
    if (!grid || !DATA.audience) return;
    var html = "";
    for (var i = 0; i < DATA.audience.length; i++) {
      var a = DATA.audience[i];
      html += '<article class="card audience-card reveal reveal-delay-' + (i % 3) + '">' +
        '<div class="card-icon">' + ic(a.icon) + "</div>" +
        "<h3>" + a.name + "</h3><p class=\"card-text\">" + a.text + "</p></article>";
    }
    grid.innerHTML = html;
    observeNewReveals(grid);
  }
  renderAudience();

  /* ---------- Render: achievements ---------- */
  function renderAchievements() {
    var grid = document.getElementById("achieve-grid");
    if (!grid || !DATA.achievements) return;
    var html = "";
    for (var i = 0; i < DATA.achievements.length; i++) {
      var a = DATA.achievements[i];
      html += '<article class="card achieve-card reveal reveal-delay-' + (i % 3) + '">' +
        '<div class="card-icon">' + ic(a.icon) + "</div>" +
        "<h3>" + a.title + "</h3><p class=\"card-text\">" + a.text + "</p></article>";
    }
    grid.innerHTML = html;
    observeNewReveals(grid);
  }
  renderAchievements();

  /* ---------- Render: events ---------- */
  function renderEvents() {
    var shell = document.getElementById("events-shell");
    if (!shell || !DATA.events) return;
    var list = DATA.events.upcoming || [];
    if (!list.length) {
      shell.innerHTML = '<p class="events-empty">' + (DATA.events.emptyText || "New workshops and events will be announced here.") + "</p>";
      return;
    }
    var html = '<div class="events-grid">';
    for (var i = 0; i < list.length; i++) {
      var ev = list[i];
      var date = "";
      if (ev.date) {
        var d = new Date(ev.date);
        if (!isNaN(d)) date = d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
        else date = ev.date;
      }
      var img = ev.img ? '<img class="frame" src="' + ev.img + '" alt="' + (ev.alt || ev.title) + '">' : "";
      html += '<article class="card event-card reveal"><div class="frame">' + img + "</div>" +
        '<div class="event-body"><span class="event-date">' + ic("i-calendar") + (date || "Date to be announced") + "</span>" +
        "<h3>" + ev.title + "</h3><p>" + ev.text + "</p></div></article>";
    }
    html += "</div>";
    shell.innerHTML = html;
    observeNewReveals(shell);
  }
  renderEvents();

  /* ---------- Render: testimonials ---------- */
  function renderTestimonials() {
    var track = document.getElementById("testimonial-track");
    if (!track || !DATA.testimonials || !DATA.testimonials.length) return;
    var html = "";
    for (var i = 0; i < DATA.testimonials.length; i++) {
      var t = DATA.testimonials[i];
      html += '<div class="testimonial-slide"><figure class="testimonial-card"><img src="' + t.src + '" alt="' + t.alt + '" loading="lazy"></figure></div>';
    }
    track.innerHTML = html;

    var prev = document.querySelector(".testimonial-prev");
    var next = document.querySelector(".testimonial-next");
    if (prev && next) {
      function step(dir) {
        var slide = track.querySelector(".testimonial-slide");
        if (!slide) return;
        var w = slide.getBoundingClientRect().width + 22;
        track.scrollBy({ left: dir * w, behavior: reduceMotion ? "auto" : "smooth" });
      }
      prev.addEventListener("click", function () { step(-1); });
      next.addEventListener("click", function () { step(1); });
    }
  }
  renderTestimonials();

  /* ---------- Render: gallery + lightbox ---------- */
  function renderGallery() {
    var grid = document.getElementById("gallery-grid");
    var filters = document.getElementById("gallery-filters");
    if (!grid || !DATA.gallery) return;

    var filtersData = DATA.gallery.filters || [{ id: "*", label: "All" }];
    var fhtml = "";
    for (var i = 0; i < filtersData.length; i++) {
      fhtml += '<button type="button" class="filter-btn' + (i === 0 ? " is-active" : "") + '" data-filter="' + filtersData[i].id + '">' + filtersData[i].label + "</button>";
    }
    if (filters) filters.innerHTML = fhtml;

    function paint(filterId) {
      var html = "";
      var items = DATA.gallery.items || [];
      var shown = 0;
      for (var j = 0; j < items.length; j++) {
        var it = items[j];
        if (filterId !== "*" && it.cat !== filterId) continue;
        shown++;
        html += '<figure class="gallery-item reveal" data-cat="' + it.cat + '" data-index="' + j + '">' +
          '<button type="button" class="gallery-open" aria-label="View larger: ' + it.alt + '"></button>' +
          '<img src="' + it.thumb + '" data-full="' + it.src + '" data-caption="' + it.caption + '" alt="' + it.alt + '" loading="lazy">' +
          '<figcaption>' + it.caption + "</figcaption></figure>";
      }
      grid.innerHTML = html;
      var empty = document.querySelector(".gallery-empty");
      if (empty) empty.style.display = shown ? "none" : "block";
      observeNewReveals(grid);
      if (dialog && dialogIndex >= 0) dialogIndex = -1;
    }

    var currentFilter = "*";
    if (filters) {
      filters.addEventListener("click", function (e) {
        var btn = e.target.closest(".filter-btn");
        if (!btn) return;
        var active = filters.querySelector(".filter-btn.is-active");
        if (active) active.classList.remove("is-active");
        btn.classList.add("is-active");
        currentFilter = btn.getAttribute("data-filter");
        paint(currentFilter);
      });
    }

    var dialog = document.getElementById("lightbox");
    var lbImg = document.getElementById("lb-img");
    var lbCaption = document.getElementById("lb-caption");
    var lbClose = document.getElementById("lb-close");
    var lbPrev = document.getElementById("lb-prev");
    var lbNext = document.getElementById("lb-next");
    var dialogIndex = -1;
    var allItems = DATA.gallery.items || [];

    function visibleSet() {
      if (currentFilter === "*") return allItems;
      return allItems.filter(function (it) { return it.cat === currentFilter; });
    }
    function openAt(i) {
      var set = visibleSet();
      if (!set.length) return;
      dialogIndex = (i + set.length) % set.length;
      var it = set[dialogIndex];
      lbImg.src = it.src;
      lbImg.alt = it.alt;
      lbCaption.textContent = it.caption;
      headingP.textContent = it.caption;
      dialog.showModal();
      if (lbClose) lbClose.focus();
    }
    function move(step) { if (dialogIndex >= 0) openAt(dialogIndex + step); }

    var headingP = document.getElementById("lb-heading");
    if (!dialog || !lbImg) return;

    grid.addEventListener("click", function (e) {
      var fig = e.target.closest(".gallery-item");
      if (!fig) return;
      var idx = allItems.findIndex(function (it) {
        return it.src === fig.querySelector("img").getAttribute("data-full");
      });
      if (idx >= 0) openAt(idx);
    });

    if (lbClose) lbClose.addEventListener("click", function () { dialog.close(); });
    if (lbPrev) lbPrev.addEventListener("click", function () { move(-1); });
    if (lbNext) lbNext.addEventListener("click", function () { move(1); });
    dialog.addEventListener("click", function (e) {
      if (e.target === dialog) dialog.close();
    });
    document.addEventListener("keydown", function (e) {
      if (!dialog.open) return;
      if (e.key === "ArrowLeft") { move(-1); e.preventDefault(); }
      if (e.key === "ArrowRight") { move(1); e.preventDefault(); }
    });

    paint(currentFilter);
  }
  renderGallery();

  function observeNewReveals(root) {
    var els = root.querySelectorAll(".reveal:not(.is-visible)");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("is-visible"); });
      return;
    }
    els.forEach(function (el) { ro.observe(el); });
  }

  /* ---------- Contact form ---------- */
  var form = document.getElementById("enquiry-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = form.checkValidity();
      form.classList.add("was-validated");
      if (!valid) return;

      var fd = new FormData(form);
      var name = fd.get("name") || "";
      var phone = fd.get("phone") || "";
      var email = fd.get("email") || "";
      var studio = fd.get("studio") || "";
      var cls = fd.get("klass") || "";
      var msg = fd.get("message") || "";

      var body = "Hello Trupti Yoga Studio,";
      body += "\n\nName: " + name;
      if (phone) body += "\nPhone: " + phone;
      if (email) body += "\nEmail: " + email;
      if (studio) body += "\nPreferred studio: " + studio;
      if (cls) body += "\nClass of interest: " + cls;
      if (msg) body += "\n\nMessage:\n" + msg;

      var subject = "Enquiry from " + name;
      var mailto = "mailto:" + (DATA.site ? DATA.site.email : "") + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

      var ok = document.getElementById("form-success");
      if (ok) ok.classList.add("is-visible");
      window.setTimeout(function () { window.location.href = mailto; }, 250);
    });
  }

  /* ---------- Footer: year + contact ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();