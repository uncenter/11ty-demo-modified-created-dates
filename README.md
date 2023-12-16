# 11ty-demo-modified-created-dates

A demo for creating custom date properties in Eleventy front matter.

## Usage

```
git clone https://github.com/uncenter/11ty-demo-modified-created-dates.git
npm install
npm run start
```

### Deployment

Note that this requires Git history, which not all providers fetch all of. If this doesn't work in production, try setting the build command to `git fetch --unshallow && pnpm run build` instead of just `pnpm run build`.

See https://www.answeroverflow.com/m/1141603660007211149, https://www.brycewray.com/posts/2023/02/get-good-git-info-even-hosts-gui/.

## Explanation

This demo uses the internal utitility functions Eleventy uses for special [Content Dates](https://www.11ty.dev/docs/dates/) to set custom date properties, `created` and `modified`. The functions were copied into `src/posts/posts.11tydata.js` (see [Computed Data — Eleventy](https://www.11ty.dev/docs/data-computed/)), which applies the two properties to every post/template inside the `src/posts/` directory.
