import React from 'react';
import {WebView} from 'react-native-webview';

export default function App() {
  const tasks = `
    setTimeout(function () {
      window.ReactNativeWebView.postMessage("Hello!")
    }, 2000)
    true; // note: this is required, or you'll sometimes get silent failures
  `;

  return (
    <WebView
      marginTop="20%"
      onMessage={(event) => {
        alert(event.nativeEvent.data);
      }} // required for injectedJavascript
      injectedJavaScript={tasks}
      source={require('./dist/index.html')}
    />
  );
}
