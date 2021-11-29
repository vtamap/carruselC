import style from "./styles.css";

import React, { Component } from "react";
import { render } from "react-dom";

import Carousel from "./carrusel";
import Item from "./item";
import Imagen from "./imagen";

class App extends Component {
  state = {
    focus: 0
  };

  onClickPrev = () =>
    this.setState(state => ({
      focus: state.focus - 1 < 0 ? 0 : state.focus - 1
    }));

  onClickNext = () =>
    this.setState(state => ({
      focus: state.focus + 1 >= 6 ? 5 : state.focus + 1
    }));

  render() {
    return (
      <>
        <Carousel component="ul" leftPadding={5} focus={this.state.focus} >
        < Item estilo = {this.state.focus === 0 ? "has-focus": "lost-focus"} titulo = "Victor Tama" contenido= "Programador Mobile"/>
        < Item estilo = {this.state.focus === 1 ? "has-focus": "lost-focus"} titulo = "Juan Perez" contenido= "Programador FullStack"/>
        < Item estilo = {this.state.focus === 2 ? "has-focus": "lost-focus"} titulo = "Diego Maradona" contenido= "Programador FullStack"/>
        < Item estilo = {this.state.focus === 3 ? "has-focus": "lost-focus"} titulo = "Lionel Messi" contenido= "Programador FullStack"/>
        < Item estilo = {this.state.focus === 4 ? "has-focus": "lost-focus"} titulo = "Cristiano Ronaldo" contenido= "Programador FullStack"/>
        < Item estilo = {this.state.focus === 5 ? "has-focus": "lost-focus"} titulo = "Kitu Diaz" contenido= "Programador FullStack"/>
        < li > < Imagen imagen="logo192.png" texto = "Logo"  ></Imagen> </li>   
        </Carousel>
        <button onClick={this.onClickPrev}>Anterior</button>
        <button onClick={this.onClickNext}>Siguiente</button>
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
