# 11ty-demo-modified-created-dates

A demo for creating custom date properties in Eleventy front matter.

## Usage

```
pnpm install
pnpm run start
```

## Explanation

This demo uses the internal utitility functions Eleventy uses for special [Content Dates](https://www.11ty.dev/docs/dates/) to set custom date properties, `created` and `modified`. The functions were copied into `src/posts/posts.11tydata.js` (see [Computed Data — Eleventy](https://www.11ty.dev/docs/data-computed/)), which applies the two properties to every post/template inside the `src/posts/` directory.
