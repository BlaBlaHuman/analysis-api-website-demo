/*
 * Two-way sync between the page fragment and the API reference iframe on analysis/docs/api/index.md.
 *
 *   /api/#analysis-api/<...>/index.html   <->   iframe showing that Dokka page
 *
 * Fragment -> iframe keeps site-search hits inside the zensical shell; iframe -> fragment keeps the address bar
 * shareable and the back button working. Loaded via `extra_javascript` and initialised through `document$`, because
 * `navigation.instant` swaps page content without a full reload.
 */
(function () {
  var MARKER = "/api-reference/";

  function init() {
    var frame = document.getElementById("api-frame");
    if (!frame || frame.dataset.wired) return;
    frame.dataset.wired = "1";

    function show() {
      var rel = location.hash.replace(/^#/, "") || "index.html";
      var target = new URL("../api-reference/" + rel, location.href).href;
      try {
        if (frame.contentWindow.location.href === target) return;
        frame.contentWindow.location.replace(target); // `replace` so hash changes do not stack history entries
      } catch (e) {
        frame.src = target;
      }
    }

    frame.addEventListener("load", function () {
      var loc;
      try {
        loc = frame.contentWindow.location;
      } catch (e) {
        return; // cross-origin, e.g. opened over file://
      }
      var i = loc.pathname.indexOf(MARKER);
      if (i < 0) return;
      var rel = loc.pathname.slice(i + MARKER.length) + loc.hash;
      if (location.hash.replace(/^#/, "") !== rel) history.replaceState(null, "", "#" + rel);
    });

    addEventListener("hashchange", show);
    show();
  }

  if (window.document$) document$.subscribe(init);
  else addEventListener("DOMContentLoaded", init);
})();
