# General

This is a demo on how to serve Vue content sites with Kestrel. Using the built-in router in razor pages.

## Getting started

- Run `npm install` in the frontend directory.
- Start the project using `npm run watch`
- Start the .NET project and view the site in a browser.
- Code away and make something cool!

## How does it work?

The command `npm run watch` builds the vue app and copies the files to the `wwwroot` folder.

On every change in the vue code the `npm run watch` command will rebuild the app and copy the files to the `wwwroot` folder. The browser will automatically reload the page.

## Build

To make a build, first you have to build your vue app. The command `npm run build` will build the app and copy the files to the `wwwroot` folder.
After that you just make a normal dotnet build and hopefully everything works.
