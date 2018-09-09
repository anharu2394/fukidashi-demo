import React, { Component } from 'react';
import tagmaru from './tagmaru_maeashi.png';
import './App.css';
import Fukidashi from './components/fukidashi';

class App extends Component {
  render() {
    const fukidashiData = {
      img: tagmaru,
      sentences: ['こんにちはー！', 'たぐまるだよ！','よろしくね！','このWebサービスはエンジニアのための情報収集サービスだよ！','いっぱい使ってね！']
    };
    return (
      <div className="App">
        <Fukidashi {...fukidashiData} />
      </div>
    );
  }
}

export default App;
