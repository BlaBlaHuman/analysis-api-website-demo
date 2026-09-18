---
title: API reference
icon: material/api
hide:
  - navigation
  - toc
---

<style>
  /* Give the framed reference the full content area. Scoped to this page: the style element lives in the page body,
     so it is swapped out along with the content on navigation.
     4.8rem = header (~2.4rem) + tab row (.md-tabs__item height 2.4rem), once the margins below are zeroed. */
  .md-main .md-grid { max-width: none; }   /* .md-grid caps content at 61rem; header keeps its own grid */
  .md-main__inner { margin-top: 0; }
  .md-content__inner { margin: 0; padding: 0; }
  .md-content__inner::before { display: none; }

  /* partials/content.html injects a heading element (id="__skip") from page.title whenever the page content has no
     top-level heading of its own. That element is also the "skip to content" link target, so hide it visually rather
     than with display:none.
     NB: do not write the literal tag name for that element anywhere on this page - content.html decides whether to
     inject by searching page.content for it, so mentioning it would suppress the injection as a side effect. */
  #__skip {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
  }

  #api-frame {
    display: block;
    width: 100%;
    height: calc(100vh - 4.8rem);
    border: 0;
  }
</style>

<iframe id="api-frame"
        src="../api-reference/index.html"
        title="Kotlin Analysis API reference"></iframe>
