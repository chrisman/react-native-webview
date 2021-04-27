# Vanilla React in React Native Webview Example

### 🚨🚧 Work in progress 🚧🚨 

This is a work-in-progress proof of concept for including vanilla React apps in a React Native application using webview.

There are two parts of this repo:

1. `todo`: a simple todo React app created with create-react-app
2. `WebviewTest`: a React Native application made with `npx react-native init`

## Getting started

React:

1. `cd todo` and `yarn`.
2. `yarn build` will build the app in the `build` directory.
3. `npx gulp` will run the gulp file to inline all the css and js and replace the generated HTML file
4. Copy `index.html` into `/WebviewTest/dist/`.

React Native:

Setting up your RN dev environment is beyond the scope of these instructions.

1. `cd WebviewTest && npm i && cd ios && pod install`
2. from `/WebviewTest`, do `npx react-native run-ios`
3. See the React app running in the webview

## Todo

- [ ] confirm that Android is working: It is *not* working.

    - https://github.com/react-native-webview/react-native-webview/blob/master/docs/Guide.md#loading-local-html-files
    - https://github.com/react-native-webview/react-native-webview/issues/428
    - https://github.com/react-native-webview/react-native-webview/issues/518

    Look into running a [static http server](https://github.com/futurepress/react-native-static-server)?
