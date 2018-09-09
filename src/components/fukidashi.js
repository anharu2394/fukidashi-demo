import React,{ Component } from 'react';
import { init } from './ityped';

export default class Fukidashi extends Component{
  constructor(props) {
    super(props);
    this.state = {
      sentenceNumber: 0,
      buttonDisabled: false
    };
    this.nextSentence = this.nextSentence.bind(this);
  }
  componentDidMount(){
    const myElement = document.querySelector('.sentence p');
    myElement.innerHTML ='';
    myElement.style.display = 'block';
    init(myElement, { showCursor: false,typeSpeed: 150,loop:false, strings: [this.props.sentences[this.state.sentenceNumber]] });
  }
  nextSentence() {
    if (this.state.sentenceNumber + 1 === this.props.sentences.length - 1) {
      this.setState({
        buttonDisabled: true,
        sentenceNumber: this.state.sentenceNumber + 1
      });
    }
    else {
      this.setState({
        sentenceNumber: this.state.sentenceNumber + 1
      });
    }
  }
  componentDidUpdate() {
    const myElement = document.querySelector('.sentence p');
    myElement.innerHTML ='';
    myElement.style.display = 'block';
    init(myElement, { showCursor: false,typeSpeed: 150,loop:false, strings: [this.props.sentences[this.state.sentenceNumber]] });
  }
  render() {
    const isDisabled = this.state.buttonDisabled ? {disabled:'_'}:'';
    return (
      <div className="fukidashi">
        <div className="leftContent">
          <img src={this.props.img} alt="avatar" className="avatar" />
        </div>
        <div className="rightContent">
          <div className="sentence">
            <p>{this.props.sentences[this.state.sentenceNumber]}</p>
          </div>
          <button className="nextButton" onClick={this.nextSentence} {...isDisabled} >次へ</button>
        </div>
      </div>
    );
  }
}

