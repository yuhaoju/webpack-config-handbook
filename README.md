# webpack-examples

Executable Webpack demos, still UPDATING!

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [How to run the demo](#how-to-run-the-demo)
- [Content](#content)
  - [01-get-started](#01-get-started)
  - [02-entry-and-output](#02-entry-and-output)
  - [03-loaders](#03-loaders)
  - [04-handle-styles](#04-handle-styles)
  - [05-code-splitting](#05-code-splitting)
  - [06-config-in-prod](#06-config-in-prod)
  - [07-bundle-optimization](#07-bundle-optimization)
  - [08-best-practice-for-dev](#08-best-practice-for-dev)
  - [09-others](#09-others)
- [Not found what you need？](#not-found-what-you-need)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How to run the demo

1. clone repo & enter the demo directory
2. npm i
3. npm start
4. check http://localhost:3000

## Content

### 01-get-started

- [hello-webpack](/01-get-started/hello-webpack/webpack.config.js)

### 02-entry-and-output

- [entry-string](/02-entry-and-output/entry-string/webpack.config.js)
- [entry-array](/02-entry-and-output/entry-array/webpack.config.js)
- [entry-object](/02-entry-and-output/entry-object/webpack.config.js)
- [entry-complex](/02-entry-and-output/entry-complex/webpack.config.js)
- [entry-function](/02-entry-and-output/entry-function/webpack.config.js)
- output-filename(TODO)
- output-path(TODO)
- output-publicPath(TODO)
- output-chunkFilename(TODO)

### 03-loaders

- [babel-loader](/03-loaders/babel-loader/webpack.config.js)
- [css-loader](/03-loaders/css-loader/webpack.config.js)
- [ts-loader](/03-loaders/ts-loader/webpack.config.js)
- [eslint-loader](/03-loaders/eslint-loader/webpack.config.js)
- [html-loader](/03-loaders/html-loader/webpack.config.js)
- [handlebars-loader](/03-loaders/handlebars-loader/webpack.config.js)
- [vue-loader](/03-loaders/vue-loader/webpack.config.js)
- [file-loader](/03-loaders/file-loader/webpack.config.js)
- [url-loader](/03-loaders/url-loader/webpack.config.js)
- svg-inline-loader(TODO)
- [how-to-write-a-loader](/03-loaders/how-to-write-a-loader/webpack.config.js)

### 04-handle-styles

- inline-style(TODO)
- [extract-css](/04-handle-styles/extract-css/webpack.config.js)
- [extract-multiple-css](/04-handle-styles/extract-multiple-css/webpack.config.js)
- [less](/04-handle-styles/less/webpack.config.js)
- [scss](/04-handle-styles/scss/webpack.config.js)
- [postcss-loader](/04-handle-styles/postcss-loader/webpack.config.js)
- [postcss-autoprefixer](/04-handle-styles/postcss-autoprefixer/webpack.config.js)
- [postcss-cssnext](/04-handle-styles/postcss-cssnext/webpack.config.js)
- [postcss-stylelint](/04-handle-styles/postcss-stylelint/webpack.config.js)
- [css-modules](/04-handle-styles/css-modules/webpack.config.js)
- styles-with-commons-chunk(TODO)

### 05-code-splitting

- [async-import](/05-code-splitting/async-import/webpack.config.js)
- [commons-chunk-simple](/05-code-splitting/commons-chunk-simple/webpack.config.js)
- [commons-chunk-vendor](/05-code-splitting/commons-chunk-vendor/webpack.config.js)
- [commons-chunk-opt-chunks](/05-code-splitting/[commons-chunk-opt-chunks/webpack.config.js)
- [commons-chunk-opt-minchunks](/05-code-splitting/[commons-chunk-opt-minchunks/webpack.config.js)

### 06-config-in-prod

- [minifying-asset](/06-config-in-prod/minifying-asset/webpack.config.js)
- prod-env-params(TODO)
- chunkhash(TODO)
- ...

### 07-bundle-optimization

- [dll-plugin](/07-bundle-optimization/dll-plugin/webpack.config.js)
- [happypack](/07-bundle-optimization/happypack/webpack.config.js)
- [scope-hoisting](/07-bundle-optimization/scope-hoisting/webpack.config.js)
- [tree-shaking](/07-bundle-optimization/tree-shaking/webpack.config.js)

### 08-best-practice-for-dev

- source-map(TODO)
- dev-tool(TODO)
- ...

### 09-others

- [externals](/09-others/externals/webpack.config.js)
- ...

## Not found what you need？

This repo is still updating, any issue & contribution is welcome💡
