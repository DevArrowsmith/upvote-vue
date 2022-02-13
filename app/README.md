# Fullstack Vue: upVote!

## Introduction

This is a posting and upboting application.
It is the first project of [The Complete Guide to Fullstack Vue](https://www.newline.co/vue).

## Aims

- Provide an introduction to Vue

## New Concepts

### Stage 1

- `<div id="app">` in index.html

  - This ID is used to determine where the Vue application will be **mounted**; ie. where it will be inserted into the template.
  - The Vue app will be **mounted** on to this div element.
  - Vue JavaScript can then be used anywhere within this element (this Div).

- Data Binding
  - This is the process of synchronising data within our model to the view, so that data is passed in and out correctly.
  - To do this, we create a Data Object in our Vue Instance.
  - We then bind the keys in the Data Object to content in the template (eg. the HTML).
  - We can bind text (eg. in `<p>`, `<h2>` etc) using 'Mustache' syntax: {{ }}.
  - To bind data in attributes (such as href, alt, id, class, src) we need to use a special attribute called `v-bind`, which is called a **Vue Directive**. The syntax for this is `v-bind:attribute`, eg...
    ```
    <img vbind:src="submissions[0].profilePicture.image" vbind:alt="submissions[0].profilePicture.altText">
    ```

## New Tools

### Stage 1

- [Bulma](https://bulma.io/documentation/overview/start/)

  - A CSS framework akin to Boilerplate.
  - The stylesheet can be directly imported into a script for direct use in HTML. That's how we've used it in this repo.

- [UNPKG](https://unpkg.com/)
  - A content delivery network for NPM packages.
  - Allows you to import npm packages into scripts (without use of NPM).
  - In this repo we use it to import the Vue node package.
