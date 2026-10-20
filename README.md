# portfolio-engine

Code for hadrienlee.com that is too big for Webflow embeds. Webflow loads it from jsDelivr:

    https://cdn.jsdelivr.net/gh/leehadrien/portfolio-engine@main/<path>

| Path | What it is | Loaded on |
|---|---|---|
| `kit/hl-kit.js`, `kit/hl-kit.css` | The moving sky (ink hero, colour, light sky), Dot Grid, Decrypted Text, Count Up, Magnet, stepped windows | every page |
| `home/home.js`, `home/home.css` | Home: the demo window and its six trainings, the bridge, the three games, Result.txt | Home |
| `home/img/` | Demo thumbnails and page previews | Home |

Home also loads three.js r159 from `https://cdn.jsdelivr.net/npm/three@0.159.0/build/three.min.js`.

Built by `bundle_home.py`; edit the sources there, not these files. After uploading a change, purge the CDN:
`https://purge.jsdelivr.net/gh/leehadrien/portfolio-engine@main/<path>`
