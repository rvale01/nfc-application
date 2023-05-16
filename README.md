# Turborepo starter

This is an official Yarn v1 starter turborepo.

## What's inside?

This project uses Turborepo to manage the packages and the apps inside
This project contains two apps:
 - web-app: the web application of this project which uses Vite.js, react.js and redux.
 - native: the mobile app of this project which uses react native, redux.

This project has several packages. The most important ones are:
- shared_functions: since both the mobile and the web application use firebase
- ui-web: design system of the web application
- ui-native: design system for native application
- types: typescript types and interfaces used by both the web application and the native application

# How to build:
- web-app: this can be built by just running the yarn build. Or it can be tested locally by running yarn dev run.

- native-app: this cannot be tested locally given the fact that it uses react-native-nfc, therefore it needs to be built with eas remotely and then a version will be published for internal use.