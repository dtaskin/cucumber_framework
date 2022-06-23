$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/wikipedia.feature");
formatter.feature({
  "name": "Wiki Search Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.scenario({
  "name": "Validate Wikipedia main languages",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@temp"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to \"https://www.wikipedia.org/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "BaseSteps.userNavigatesTo(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see below languages around the logo",
  "rows": [
    {
      "cells": [
        "English",
        "日本語",
        "Español",
        "Русский",
        "Deutsch",
        "Français",
        "Italiano",
        "中文",
        "Português",
        "Polski"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "WikipediaSteps.userShouldSeeBelowLanguagesAroundTheLogo(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});