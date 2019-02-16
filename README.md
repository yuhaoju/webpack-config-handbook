# webpack-config-handbook

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
  - [10-js-bundlers](#10-js-bundlers)
- [Not found what you need？](#not-found-what-you-need)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## How to run the demo

1. clone repo & enter the demo directory
2. run a demo by `yarn open <path>`

Example:
```shell
$ yarn open 05-code-splitting/async-chunk
```

## Content

### 01-get-started

- [hello-webpack](/01-get-started/hello-webpack)

### 02-entry-and-output

- [entry-string](/02-entry-and-output/entry-string)
- [entry-array](/02-entry-and-output/entry-array)
- [entry-object](/02-entry-and-output/entry-object)
- [entry-function](/02-entry-and-output/entry-function)
- [output-filename](/02-entry-and-output/output-filename)
- output-path(TODO)
- output-publicPath(TODO)
- output-chunkFilename(TODO)

### 03-loaders

- [babel-loader](/03-loaders/babel-loader)
- [css-loader](/03-loaders/css-loader)
- [ts-loader](/03-loaders/ts-loader)
- [eslint-loader](/03-loaders/eslint-loader)
- [html-loader](/03-loaders/html-loader)
- [handlebars-loader](/03-loaders/handlebars-loader)
- [vue-loader](/03-loaders/vue-loader)
- [file-loader](/03-loaders/file-loader)
- [url-loader](/03-loaders/url-loader)
- svg-inline-loader(TODO)
- [how-to-write-a-loader](/03-loaders/how-to-write-a-loader)

### 04-handle-styles

- [css-modules](/04-handle-styles/css-modules)
- [extract-css](/04-handle-styles/extract-css)
- [mini-css-extract-plugin](/04-handle-styles/mini-css-extract-plugin)
- [extract-multiple-css](/04-handle-styles/extract-multiple-css)
- [less](/04-handle-styles/less)
- [scss](/04-handle-styles/scss)
- [postcss-loader](/04-handle-styles/postcss-loader)
- [postcss-autoprefixer](/04-handle-styles/postcss-autoprefixer)
- [postcss-cssnext](/04-handle-styles/postcss-cssnext)
- [postcss-stylelint](/04-handle-styles/postcss-stylelint)

### 05-code-splitting

- [async-chunk](/05-code-splitting/async-chunk)

### 06-config-in-prod

- [caching](/06-config-in-prod/caching)
- [define-plugin](/06-config-in-prod/define-plugin)
- [html-webpack-plugin](/06-config-in-prod/html-webpack-plugin)
- [minification](/06-config-in-prod/minification)
- [minification-css](/06-config-in-prod/minification-css)

### 07-bundle-optimization

- [dll-plugin](/07-bundle-optimization/dll-plugin)
- [happypack](/07-bundle-optimization/happypack)
- [scope-hoisting](/07-bundle-optimization/scope-hoisting)
- [tree-shaking](/07-bundle-optimization/tree-shaking)

### 08-best-practice-for-dev

- [hmr-react](/08-best-practice-for-dev/hmr-react)
- [size-plugin](/08-best-practice-for-dev/size-plugin)
- [speed-measure-webpack-plugin](/08-best-practice-for-dev/speed-measure-webpack-plugin)
- [webpack-dashboard](/08-best-practice-for-dev/webpack-dashboard)
- [webpack-merge](/08-best-practice-for-dev/webpack-merge)

### 09-others

- [externals](/09-others/externals)
- ...

### 10-js-bundlers

- [parcel-quick-start](/10-js-bundlers/parcel/quick-start)
- [rollup-quick-start](/10-js-bundlers/rollup/parcel)
- [rollup-tree-shaking](/10-js-bundlers/rollup/tree-shaking)

## Not found what you need？

This repo is still updating, any issue & contribution is welcome💡
