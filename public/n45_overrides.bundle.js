(() => {
  const enforceN45UI = () => {
    const $ = window.jQuery;
    document.body.setAttribute("data-theme", "n45");
    document.body.classList.add("n45-ui");

    if (!$) return;

    if (!localStorage.getItem("n45-menu-pref-migrated")) {
      localStorage.setItem("compactMenu", "false");
      localStorage.setItem("n45-menu-pref-migrated", "1");
    }

    const expandMenu = () => {
      $(".side-menu, #nxt_sidebar, #echo_nxt_sidebar")
        .removeClass("side-menu--collapsed side-menu--on-hover");
      $(".content").removeClass("content--compact");
    };

    expandMenu();

    $(document)
      .off("keydown.n45-search")
      .on("keydown.n45-search", (e) => {
        const key = (e.key || "").toLowerCase();
        if ((e.ctrlKey || e.metaKey) && key === "g") {
          e.preventDefault();
          $(".searchbar, .search-bar, [data-label='Search']").first().trigger("click");
        }
      });

    window.requestAnimationFrame(expandMenu);
    window.setTimeout(expandMenu, 300);
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", enforceN45UI, { once: true });
  } else {
    enforceN45UI();
  }

  document.addEventListener("page-change", enforceN45UI);
  document.addEventListener("readystatechange", () => {
    if (document.readyState === "complete") enforceN45UI();
  });
})();
