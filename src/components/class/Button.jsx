import React, { Component } from 'react';

export class Button extends Component {
  render() {
    return <button className='btn' onClick={this.props.click}>{this.props.name}</button>;
  }
}
