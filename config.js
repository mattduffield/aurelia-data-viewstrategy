System.config({
  "paths": {
    "*": "*.js",
    "aurelia-data-viewstrategy/*": "dist/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "aurelia-binding": "github:aurelia/binding@0.3.5",
    "aurelia-http-client": "github:aurelia/http-client@0.5.3",
    "aurelia-metadata": "github:aurelia/metadata@0.3.1",
    "mattduffield/aurelia-data-viewstrategy": "github:mattduffield/aurelia-data-viewstrategy@master",
    "github:aurelia/binding@0.3.5": {
      "aurelia-dependency-injection": "github:aurelia/dependency-injection@0.4.3",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "aurelia-task-queue": "github:aurelia/task-queue@0.2.3"
    },
    "github:aurelia/dependency-injection@0.4.3": {
      "aurelia-metadata": "github:aurelia/metadata@0.3.1",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:aurelia/http-client@0.5.3": {
      "aurelia-path": "github:aurelia/path@0.4.3",
      "core-js": "npm:core-js@0.4.10"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.0"
    },
    "github:mattduffield/aurelia-data-viewstrategy@master": {
      "aurelia-binding": "github:aurelia/binding@0.3.5",
      "aurelia-http-client": "github:aurelia/http-client@0.5.3",
      "aurelia-metadata": "github:aurelia/metadata@0.3.1"
    },
    "npm:core-js@0.4.10": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    }
  }
});

