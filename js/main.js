(function () {
  const S = window.SITE;
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  /* ---------- text bindings ---------- */
  $$("[data-bind]").forEach((el) => { el.textContent = S[el.dataset.bind] || ""; });
  $$("[data-email]").forEach((a) => { a.href = "mailto:" + S.email; a.textContent = S.email; });
  $$("[data-phone]").forEach((a) => { a.href = "tel:" + S.phone.replace(/\s+/g, ""); a.textContent = S.phone; });
  $("[data-year]").textContent = new Date().getFullYear();
  document.title = `${S.name} • ${S.tagline}`;

  $("[data-socials]").innerHTML = S.socials
    .map((s) => `<li><a href="${s.url}" target="_blank" rel="noopener">${s.label}</a></li>`)
    .join("");

  /* ---------- navigation / filters ---------- */
  const links = [{ slug: "", label: "Work" }, ...S.categories];
  const linkHTML = (c, i) =>
    `<li style="--i:${i}"><a href="#${c.slug || "work"}" data-cat="${c.slug}">${c.label}</a></li>`;
  $("[data-nav]").innerHTML = links.map(linkHTML).join("");
  $("[data-filters]").innerHTML = links.map(linkHTML).join("");

  /* ---------- menu ---------- */
  const menu = $("#menu");
  const toggle = $(".menu-toggle");
  const setMenu = (open) => {
    menu.classList.toggle("is-open", open);
    menu.setAttribute("aria-hidden", String(!open));
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.classList.toggle("no-scroll", open);
  };
  toggle.addEventListener("click", () => setMenu(!menu.classList.contains("is-open")));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });
  $("[data-home]").addEventListener("click", (e) => {
    e.preventDefault(); setMenu(false); location.hash = ""; window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------- hero video ---------- */
  const heroMedia = $(".hero__media");
  const heroVideo = $("[data-hero-video]");
  $("[data-hero-poster]").src = S.hero.poster;
  if (S.hero.mp4) {
    heroVideo.src = S.hero.mp4;
    heroVideo.addEventListener("playing", () => heroMedia.classList.add("is-playing"));
    heroVideo.play().catch(() => {});
  }

  /* ---------- grid ---------- */
  const grid = $("[data-grid]");
  const empty = $("[data-empty]");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const creditsHTML = (c) => {
    const rows = [["Dir.", c.director], ["DoP.", c.dop], ["Prod.", c.prod]].filter(([, v]) => v);
    return rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("");
  };

  grid.innerHTML = S.projects
    .map((p, i) => `
      <button class="card" type="button" data-index="${i}" data-cats="${p.categories.join(" ")}" aria-label="Open ${esc(p.title)}">
        <img class="card__poster" src="${p.poster}" alt="" loading="lazy">
        ${p.preview ? `<video class="card__preview" data-src="${p.preview}" muted loop playsinline preload="none"></video>` : ""}
        <div class="card__body">
          <h3 class="card__title">${esc(p.title)}</h3>
          <dl class="credits">${creditsHTML(p.credits)}</dl>
        </div>
      </button>`)
    .join("");

  // hover preview: only load the clip on first hover
  $$(".card").forEach((card) => {
    const v = $(".card__preview", card);
    if (!v) return;
    const start = () => {
      if (!v.src) v.src = v.dataset.src;
      v.play().then(() => card.classList.add("is-previewing")).catch(() => {});
    };
    const stop = () => { v.pause(); card.classList.remove("is-previewing"); };
    card.addEventListener("mouseenter", start);
    card.addEventListener("mouseleave", stop);
    card.addEventListener("focus", start);
    card.addEventListener("blur", stop);
  });

  const applyFilter = () => {
    const slug = location.hash.replace("#", "");
    const cat = S.categories.find((c) => c.slug === slug);
    const active = cat ? cat.slug : "";
    let shown = 0;
    $$(".card").forEach((card) => {
      const show = !active || card.dataset.cats.split(" ").includes(active);
      card.hidden = !show; if (show) shown++;
    });
    empty.hidden = shown > 0;
    $("[data-section-title]").textContent = cat ? cat.label : "Work";
    $$("[data-cat]").forEach((a) => a.classList.toggle("is-active", a.dataset.cat === active));
    if (cat) $("#work").scrollIntoView({ block: "start" });
  };
  window.addEventListener("hashchange", applyFilter);
  applyFilter();

  /* ---------- lightbox ---------- */
  const lb = $("[data-lightbox]");
  const player = $("[data-player]");
  let lastFocus = null;
  const openProject = (p) => {
    $("[data-lb-title]").textContent = p.title;
    $("[data-lb-credits]").innerHTML = creditsHTML(p.credits);
    if (p.vimeo) {
      player.innerHTML = `<iframe src="https://player.vimeo.com/video/${encodeURIComponent(p.vimeo)}?autoplay=1&title=0&byline=0&portrait=0&dnt=1" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen title="${esc(p.title)}"></iframe>`;
    } else if (p.mp4) {
      player.innerHTML = `<video src="${p.mp4}" controls autoplay playsinline poster="${p.poster || ""}"></video>`;
    } else {
      player.innerHTML = "";
    }
    lastFocus = document.activeElement;
    lb.classList.add("is-open"); lb.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
    $(".lightbox__close").focus();
  };
  const closeLightbox = () => {
    lb.classList.remove("is-open"); lb.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    player.innerHTML = "";
    if (lastFocus) lastFocus.focus();
  };
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".card");
    if (card) openProject(S.projects[Number(card.dataset.index)]);
  });
  $(".lightbox__close").addEventListener("click", closeLightbox);
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    if (lb.classList.contains("is-open")) closeLightbox();
    else if (menu.classList.contains("is-open")) setMenu(false);
  });
})();
