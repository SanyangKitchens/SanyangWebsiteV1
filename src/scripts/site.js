// Small enhancements. Every page works without this file.
(function () {
  "use strict";
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };

  // Mobile menu
  var drawer = $("#drawer"), btn = $("#menuBtn");
  if (drawer && btn) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") !== "true";
      btn.setAttribute("aria-expanded", String(open));
      drawer.hidden = !open;
      document.body.style.overflow = open ? "hidden" : "";
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !drawer.hidden) btn.click(); });
  }

  // Door style filters
  $$("[data-filter]").forEach(function (group) {
    var target = $(group.getAttribute("data-filter"));
    $$("button", group).forEach(function (b) {
      b.addEventListener("click", function () {
        $$("button", group).forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        var v = b.getAttribute("data-v");
        $$("[data-k]", target).forEach(function (el) { el.hidden = v && el.getAttribute("data-k") !== v; });
      });
    });
  });

  // Colour search
  $$("[data-search]").forEach(function (input) {
    var items = $$(input.getAttribute("data-search"));
    input.addEventListener("input", function () {
      var q = input.value.trim().toLowerCase();
      items.forEach(function (el) { el.hidden = q && el.getAttribute("data-k").indexOf(q) < 0; });
      $$(".fam").forEach(function (f) { f.hidden = !$$(".chip", f).some(function (c) { return !c.hidden; }); });
    });
  });

  // Forms: post with fetch and show the result inline.
  // Load the Turnstile "I am human" check only on pages that have a form with it.
  if (document.querySelector(".cf-turnstile")) {
    var ts = document.createElement("script");
    ts.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    ts.async = true; ts.defer = true;
    document.head.appendChild(ts);
  }
  $$("form[data-ajax]").forEach(function (form) {
    var status = form.nextElementSibling;
    var tIn = $("input[name=_t]", form), pIn = $("input[name=page]", form);
    if (tIn) tIn.value = String(Date.now());
    if (pIn) pIn.value = location.pathname;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var b = $("button[type=submit]", form);
      b.disabled = true;
      status.className = "form-status";
      fetch(form.action, { method: "POST", body: new FormData(form), headers: { Accept: "application/json" } })
        .then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { if (!r.ok || !d.ok) throw new Error(d.error || "x"); }); })
        .then(function () {
          status.textContent = form.getAttribute("data-ok");
          status.className = "form-status ok";
          form.hidden = true;
          if (window.gtag) window.gtag("event", "generate_lead", { form: $("input[name=form]", form).value });
        })
        .catch(function () {
          status.innerHTML = "Sorry, that did not send. Please email us at <a href=\"mailto:" + document.querySelector(".topbar a[href^=mailto]").textContent + "\">" + document.querySelector(".topbar a[href^=mailto]").textContent + "</a> or use WhatsApp.";
          status.className = "form-status err";
          b.disabled = false;
          if (window.turnstile && $(".cf-turnstile", form)) window.turnstile.reset($(".cf-turnstile", form));
        });
    });
  });

  // Gentle reveal on scroll
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }); }, { rootMargin: "0px 0px -8% 0px" });
    $$(".sec .sec-head, .ccard, .icard, .card, .post-card").forEach(function (el) {
      if (el.getBoundingClientRect().top > innerHeight) { el.classList.add("reveal"); io.observe(el); }
    });
  }
})();
