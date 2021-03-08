import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Letter extends React.Component {
    render() {
      return (
        <div className="letter">
          {this.props.children}
        </div>
      );
    }
  }



ReactDOM.render(
    <div id='container'>
        <Letter>T</Letter>
        <Letter>-</Letter>
        <Letter>R</Letter>
        <Letter>E</Letter>
        <Letter>X</Letter>
    </div>
    ,
    document.getElementById('root')
);