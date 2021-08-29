{
  // setting VS Code insider editor
  "editor.padding.top": 10,
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": true,
  "editor.smoothScrolling": true,
  "editor.scrollPredominantAxis": true,
  "editor.cursorStyle": "line", // testing
  "editor.renderIndentGuides": false, // lines tabs
  "editor.renderLineHighlight": "gutter",
  "editor.renderWhitespace": "all",
  "editor.renderControlCharacters": true,
  "editor.renderFinalNewline": false,
  "editor.accessibilitySupport": "off",
  "editor.matchBrackets": "never", // remove higlight in brackets ident
  "workbench.editor.showTabs": true,
  "workbench.editor.scrollToSwitchTabs": true,
  "workbench.editor.highlightModifiedTabs": true,
  "workbench.editor.closeOnFileDelete": true,
  "diffEditor.ignoreTrimWhitespace": false,
  "workbench.iconTheme": "material-icon-theme",
  "material-icon-theme.folders.color": "#42a5f5",
  "workbench.preferredLightColorTheme": "Brackets Light Pro Bold",
  "workbench.preferredDarkColorTheme": "Andromeda Italic Bordered",
  "editor.definitionLinkOpensInPeek": true,
  "editor.tabSize": 2,
  "breadcrumbs.enabled": true,
  // testing
  "editor.semanticTokenColorCustomizations": {
    "enabled": true, // enable semantic highlighting for all themes
    "rules": {
      "*.declaration": {
        "bold": true
      }
    }
  },
  // window congfig
  "workbench.sideBar.location": "right",
  "window.titleSeparator": " 🥑 ",
  "window.title": "${rootName}${separator}${activeEditorMedium}",
  "window.autoDetectColorScheme": true,
  "window.menuBarVisibility": "toggle",
  "window.dialogStyle": "custom",
  "problems.showCurrentInStatus": true,
  "terminal.integrated.cursorStyle": "block",
  "terminal.integrated.cursorWidth": 2,
  "terminal.integrated.fontSize": 16,
  "git.showPushSuccessNotification": true,
  // files explorer setting
  "explorer.sortOrder": "type",
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": true,
  "workbench.tree.indent": 20,
  "explorer.autoReveal": true,
  "explorer.compactFolders": true,
  // minimap settings
  "editor.minimap.showSlider": "always",
  "editor.minimap.size": "proportional",
  "editor.minimap.scale": 1,
  "editor.minimap.maxColumn": 80,
  "editor.minimap.renderCharacters": true,
  "editor.wordWrap": "wordWrapColumn",
  // fonts settings
  "editor.fontFamily": "Fira Code Retina",
  "editor.fontLigatures": true,
  "editor.letterSpacing": 0.2,
  "editor.fontSize": 16, //16
  "editor.lineHeight": 25,
  "editor.acceptSuggestionOnEnter": "smart",
  "files.autoSave": "onFocusChange",
  "files.trimFinalNewlines": true,
  "editor.autoIndent": "advanced", // testing
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  // emmet vs code config (support x JSX)
  "emmet.triggerExpansionOnTab": true,
  "emmet.showExpandedAbbreviation": "always",
  "emmet.showAbbreviationSuggestions": true,
  "emmet.includeLanguages": {
    "javascript": "javascriptreact",
    "vue-html": "html"
  },
  // Extentions settings
  // auto rename tag
  "auto-rename-tag.activationOnLanguage": [
    "*" // * for all languages
    /*
    Note: The setting should be set with language
    id defined in VS Code. Taking javascript
    definition as an example, we need to use
    javascript f  or .js and .es6, use
    javascriptreact for .jsx.
    So, if you want to enable this extension
    on .js file, you need to add
    javascript in settings.json.
      */
  ],
  // auto close tags
  "auto-close-tag.activationOnLanguage": [
    "*" // * for all languages
    /*
    Note: The setting should be set with language
    id defined in VS Code. Taking javascript
    definition as an example, we need to use
    javascript for .js and .es6, use
    javascriptreact for .jsx. So, if you want to
    enable this extension on .js file,
    you need to add javascript in settings.json.
    */
  ],
  // codesnap settings
  "codesnap.backgroundColor": "#f2f2f2",
  "codesnap.transparentBackground": true,
  "codesnap.boxShadow": "0 10px 20px rgba(0,0,0, 0.45)",
  "codesnap.roundedCorners": true,
  "codesnap.showLineNumbers": true,
  "codesnap.showWindowControls": true,
  "codesnap.realLineNumbers": true,
  "codesnap.containerPadding": "2em",
  "codesnap.showWindowTitle": true,
  "codesnap.target": "window",
  // prettier
  // "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.tabWidth": 2, // vue
  "prettier.requireConfig": false,
  "prettier.semi": false,
  // "prettier.tabWidth": 4, //all projects
  "prettier.arrowParens": "always",
  "prettier.vueIndentScriptAndStyle": true,
  "[javascript]": {
    "editor.formatOnSave": false,
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  // "prettier.disableLanguages": ["js"],
  // Bracket pair colorizer 2
  "bracket-pair-colorizer-2.colorMode": "Independent",
  "bracket-pair-colorizer-2.showBracketsInGutter": true,
  "bracket-pair-colorizer-2.showVerticalScopeLine": true,
  "bracket-pair-colorizer-2.showHorizontalScopeLine": true,
  "bracket-pair-colorizer-2.highlightActiveScope": true,
  "bracket-pair-colorizer-2.showBracketsInRuler": true,
  "bracket-pair-colorizer-2.scopeLineRelativePosition": true,
  "bracket-pair-colorizer-2.scopeLineCSS": [
    "borderStyle : dashed",
    "borderWidth : 1px",
    "borderColor : {color}",
    "opacity: 0.5"
  ],
  "bracket-pair-colorizer-2.activeScopeCSS": [
    "borderStyle : dashed",
    "borderWidth : 1px",
    "borderColor : {color}",
    "opacity: 0.5"
  ],
  "bracket-pair-colorizer-2.rulerPosition": "Full",
  "bracket-pair-colorizer-2.colors": [
    "white",
    "white",
    "white"
    // "black",
    // "black",
    // "black"
  ],
  // ident rainbow
  "indentRainbow.colors": [
    // dark
    "rgba(0,0,0,0.1)",
    "rgba(0,0,0,0.2)",
    "rgba(0,0,0,0.3)",
    "rgba(0,0,0,0.4)"
    // light + Brackets Light Pro (theme)
    // " rgba(81, 30, 120, 0.1)",
    // " rgba(81, 30, 120, 0.2)",
    // " rgba(81, 30, 120, 0.3)",
    // " rgba(81, 30, 120, 0.4)"
  ],
  "indentRainbow.errorColor": "rgba(128,32,32,0.6)",
  "indentRainbow.updateDelay": 10,
  // gitlens
  "gitlens.hovers.currentLine.over": "line",
  "editor.columnSelection": false,
  "editor.minimap.side": "right",
  "debug.console.fontFamily": "Fira Code Retina",
  "debug.toolBarLocation": "docked",
  "material-icon-theme.activeIconPack": "vue",
  "material-icon-theme.hidesExplorerArrows": true,
  "vetur.format.defaultFormatterOptions": {
    "prettier": {},
    "js-beautify-html": {
      "wrap_attributes": "force-expand-multiline"
    },
    "prettyhtml": {
      // "printWidth": 100,
      "singleQuote": false,
      "wrapAttributes": false
      // "sortAttributes": false
    }
  },
  // "vetur.format.scriptInitialIndent": true,
  "vetur.validation.templateProps": true,
  "[vue]": {
    "gitlens.codeLens.scopes": ["document"]
  },

  "javascript.format.insertSpaceBeforeFunctionParenthesis": true,
  "javascript.format.placeOpenBraceOnNewLineForControlBlocks": false,
  "javascript.format.placeOpenBraceOnNewLineForFunctions": false,
  "typescript.format.insertSpaceBeforeFunctionParenthesis": true,
  "typescript.format.placeOpenBraceOnNewLineForControlBlocks": false,
  "typescript.format.placeOpenBraceOnNewLineForFunctions": false,

  "editor.formatOnPaste": true,
  "editor.codeActionsOnSave": {
    "source.fixAll": true
  },
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "vetur.format.defaultFormatter.html": "prettyhtml",
  "vetur.format.defaultFormatter.js": "prettier-eslint",
  "attrsSorter.order": [
    "is",
    "v-for",
    "v-if",
    "v-else-if",
    "v-else",
    "v-show",
    "v-cloak",
    "v-once",
    "v-pre",
    "id",
    "ref",
    "key",
    "v-slot",
    "v-slot.+",
    "#.*",
    "slot",
    "v-model",
    "v-model.+",
    "v-bind",
    "v-bind.+",
    ":.+",
    "v-text",
    "v-text.+",
    "v-html",
    "v-html.+",
    "class",
    "v-on.+",
    "@.+",
    "name",
    "data-.+",
    "ng-.+",
    "src",
    "for",
    "type",
    "href",
    "values",
    "title",
    "alt",
    "role",
    "aria-.+",
    "$unknown$"
  ],
  "splitHTMLAttributes.tabSize": 2,
  "splitHTMLAttributes.closingBracketOnNewLine": true,
  "splitHTMLAttributes.useSpacesForTabs": true,
  "yaml.schemas": {
    "file:///c%3A/Users/juanl/.vscode/extensions/atlassian.atlascode-2.9.1/resources/schemas/pipelines-schema.json": "bitbucket-pipelines.yml"
  },
  "atlascode.jira.jqlList": [
    {
      "id": "8c3c2ede-1e88-489b-b006-b15b385da1ad",
      "enabled": true,
      "name": "My jira.koperca.com:8080 Issues",
      "query": "assignee = currentUser() AND resolution = Unresolved ORDER BY lastViewed DESC",
      "siteId": "jira.koperca.com:8080",
      "monitor": true
    }
  ],
  "search.exclude": {
    "**/node_modules": true,
    "**/bower_components": true
  },
  "extensions.autoUpdate": true,
  "atlascode.jira.lastCreateSiteAndProject": {
    "siteId": "jira.koperca.com:8080",
    "projectKey": "BOOKIE"
  },
  "terminal.integrated.tabs.enabled": true,
  "workbench.colorTheme": "Andromeda Italic Bordered",
  "workbench.experimental.useCustomHover": true,
  "redhat.telemetry.enabled": true,
  // "[html]": {
  //   "editor.defaultFormatter": "vscode.html-language-features"
  // }
}
