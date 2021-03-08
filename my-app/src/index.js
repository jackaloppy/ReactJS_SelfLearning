import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HelloWorld extends React.Component {
    render() {
      return (
        <div className="hello-world">
          <h1>Hello, {this.props.name}</h1>
        </div>
      );
    }
  }



ReactDOM.render(
    <div>
        <HelloWorld name="Sara" />
        <HelloWorld name="Mark" />
    </div>
    ,
    document.getElementById('root')
);