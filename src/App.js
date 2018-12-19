import React from 'react';
import React, { Component } from 'react';
import Header from './components/Header';
import Info from './components/Info';
import pxdata from './data/pxdata.js';
import FormComputePx from './components/FormComputePx';


export default class App extends Component {

  constructor() {
    super();

    this.state = {
      data: pxdata,
      result: 0
    };

    this.setValues = this.setValues.bind(this)

  }
 
  setValues(e, id) {

    e.preventDefault();
    this.setState(prevState => {
      const updatedData = prevState.data.map(d => {
        if (d.id === id) {
          d.current = true
        } else {
          d.current = false
        }
        return d
      })
      return {
        data: updatedData
      }
    });
    console.log("Current key " + id);
  }

  render() {

    const { data, result } = this.state;

    return (
      <div className="" style={{ padding: 16 }}>
        <Header title="Px Converter" />
        <div id="ButtonList">
          {
            data.map(item =>
              <button
                className=
                {(item.current) ? "btn btn-primary" : "btn btn-outline-primary"}
                key={item.id}
                onClick={(e) => this.setValues(e, item.id)} >
                {item.name}
              </button>
            )
          }
        </div>

        <div id="formPx">
          {
            data.map(item => (item.current)
              ? <FormComputePx item={item} /> : "")
          }
        </div>

      </div >
    );
  }
}