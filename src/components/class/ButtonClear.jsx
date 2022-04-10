import React, { Component } from 'react';

export class ButtonClear extends Component {
  render() {
    return <button className='btn btn-top' onClick={this.props.click}>{this.props.name}</button>;
  }
}
