import React, { Component } from 'react';
import './App.css';
import CreateTriangle from './Component/CreateTriangle';
import Triangle from './Component/Triangle';

class App extends Component {
  state = {
    length: 0,
    triangle: null
  }

  setNow = () => {
    let triangle = [];
    for (let i = 0; i < this.state.length; i++) {

        if (i === 0) {
            let row = [1];
            triangle.push(row);
            continue;
        }
        else if (i === 1) {
            let row = [1, 1];
            triangle.push(row);
            continue;
        }
        let row = [1];
        for (let j = 1; j < i; j++) {
            row.push(triangle[i - 1][j] + triangle[i - 1][j - 1]);
        }
        row.push(1);
        triangle.push(row);
    }
    this.setState({
        triangle: triangle
    })
}

  _setLength = (input) => {
    this.setState({
      length: input
    })
    setTimeout(() => {
      this.setNow();
    }, 100);
  }

  _setRolltage = (input) => {
    this.setState({
      rolltage: input
    })
  }

  render() {
    return (
      <div className='container-fluid'>
        <CreateTriangle setLength={this._setLength} setNow={this.setNow} />
        <Triangle length={this.state.length} triangle={this.state.triangle} setNow={this.setNow} />
      </div>
    );
  }
}

export default App;
