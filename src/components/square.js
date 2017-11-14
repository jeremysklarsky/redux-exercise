import React, { Component } from 'react';
import '../App.css';
import Button from 'antd/lib/button';

class Square extends Component {

  render() {
    let {coords, label, handleClick, disabled} = this.props;
    return(
      <span className="squareComponent">
        <Button
          className="square"
          disabled={disabled}
          onClick={() => handleClick(coords)}
          type="primary">
          {label || '\0'}
        </Button>        
      </span>
    )
  }
}

export default Square
