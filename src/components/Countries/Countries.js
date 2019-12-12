import React, { Component } from 'react';
import './Countries.css';

class Contries extends Component {

  shouldComponentUpdate(nextProps) {
    return this.props.name!==nextProps.name
  }

  render = () => {
    let addClass = 'Countries';
    this.props.class && (addClass='');
    return (
      <li className={addClass} onClick={this.props.click}>
        {this.props.name}
      </li>
    );
  };
};
export default Contries;