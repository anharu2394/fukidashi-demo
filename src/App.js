import React, { Component } from 'react';
import tagmaru from './tagmaru_maeashi.png';
import './App.css';
import Fukidashi from './components/fukidashi';

class App extends Component {
  render() {
    const fukidashiData = {
      img: tagmaru,
      sentences: ['こんにちにゃ！', 'たぐまるだにゃん！','よろしくにゃん！','このWebサービスはエンジニアのための情報収集サービスにゃん！','いっぱい使ってにゃん！']
    };
    return (
      <div className="App">
        <Fukidashi {...fukidashiData} />
      </div>
    );
  }
}

export default App;
