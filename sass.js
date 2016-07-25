const namingPattern = require("./stylelint.config.js").namingPattern;

module.exports = {
  "plugins": [
    // this is an optionalDependency in NPM
    "stylelint-scss",
  ],
  "rules": {
    "at-rule-empty-line-before": ["always", {
      except: ["first-nested"],
      ignore: ["after-comment", "blockless-group"],
      // allow @else to come on same line as closing @if brace
      ignoreAtRules: ["else"],
    }],
    "at-rule-no-unknown": [true, {
      ignoreAtRules: [
        // additional scss at-rules:
        "content", "each", "else", "error", "extend", "for", "function", "if", "include", "mixin", "return",
      ],
    }],
    "block-closing-brace-newline-after": ["always", {
      // allow @else to come on same line as closing @if brace
      ignoreAtRules: ["else", "if"],
    }],
    "scss/at-extend-no-missing-placeholder": true,
    "scss/at-function-pattern": namingPattern,
    "scss/at-import-no-partial-leading-underscore": true,
    "scss/at-import-partial-extension-blacklist": ["scss"],
    // "scss/at-mixin-argumentless-call-parentheses": "always", // TODO: coming in next stylelint-scss release
    "scss/at-mixin-pattern": namingPattern,
    "scss/dollar-variable-no-missing-interpolation": true,
    "scss/dollar-variable-pattern": /(pt-)?(\w+-)*([\w\d]+)/,
    "scss/media-feature-value-dollar-variable": "always",
    "scss/percent-placeholder-pattern": namingPattern,
    "scss/selector-no-redundant-nesting-selector": true,
  },
}