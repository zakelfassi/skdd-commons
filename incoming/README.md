# incoming/

Staging area for **new skills pushed without a target drop** (`skdd push <skill>` with no `--drop`). CI validates and safety-lints everything here just like `packs/`.

Skills don't live here long: a maintainer either curates them into the next drop (moving the directory under `packs/<drop-id>/` and listing it in `drops.json`) or closes the PR. `incoming/` is intentionally invisible to `skdd add` — only skills in a drop are installable.
