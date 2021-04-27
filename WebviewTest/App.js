import React from 'react';
import {SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

export default function App() {
  const tasks = `
    window.myConfig=[
      {
        id: 'todo-0',
        name: 'ha',
        isComplete: true,
      },
      {
        id: 'todo-1',
        name: 'haha',
        isComplete: false,
      },
      {
        id: 'todo-2',
        name: 'hahaha',
        isComplete: true,
      },
    ];
    true; // note: this is required, or you'll sometimes get silent failures
  `;

  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        injectedJavaScriptBeforeContentLoaded={tasks}
        javaScriptEnabled={true}
        source={require('./dist/index.html')}
      />
    </SafeAreaView>
  );
}
