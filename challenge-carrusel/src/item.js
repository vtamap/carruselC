import React, { Component } from "react";

class Item extends Component {

    render() {
        return <div class="card"> 
              
        <div class="container">
          <h4 class={this.props.estilo}><b>{this.props.titulo}</b></h4>
          <p>{this.props.contenido}</p>
        </div>
      </div>        
      }
}

export default Item;