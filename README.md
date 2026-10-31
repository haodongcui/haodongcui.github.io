# Haodong Cui · Academic Homepage

Static academic homepage for [haodongcui.github.io](https://haodongcui.github.io/).

## Preview

From this directory, run `python3 -m http.server 8000` and open `http://localhost:8000`.
No build or dependency installation is required. GitHub Pages serves the repository root.

## Update content

- `index.html`: biography, news, publications (including BibTeX), education, experience, projects, and awards.
- `css/site.css`: responsive layout, typography, and component styles.
- `js/main.js`: section navigation and BibTeX interactions. Citation panels support manual selection if clipboard access is unavailable.
- `img/` and `papers/`: local images and paper PDFs.

The older component styles and `js/theme.js` are retained for reference; the current page uses only `css/site.css` and `js/main.js`.

## Publication metrics

HaM-World's alphaXiv likes are a manually verified snapshot (17, checked October 31, 2026); update the count and its dated accessibility label/title together when refreshing it. The link opens alphaXiv, where visitors can like the paper.

GitHub stars refresh from the public GitHub repository API on page load. A verified snapshot (14, checked October 31, 2026) remains visible if the API is unavailable or rate-limited. No API key or third-party proxy is used. Paper icons are inline SVGs, with no icon-font dependency.
