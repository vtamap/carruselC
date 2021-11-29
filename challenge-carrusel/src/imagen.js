import React, { Component } from "react";

class Imagen extends Component {

    render() {
        return <img src={this.props.imagen} alt={this.props.texto} ></img>        
      }
}

export default Imagen;