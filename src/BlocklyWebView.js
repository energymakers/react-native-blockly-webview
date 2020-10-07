import React, { Component } from 'react';
import { WebView } from 'react-native-webview';

class BlocklyWebView extends Component {
  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{uri: 'file:///android_asset/webview.html'}}
        style={{flex:1}}
        domStorageEnabled
        javaScriptEnabled
      />
    );
  }
}

export default BlocklyWebView
