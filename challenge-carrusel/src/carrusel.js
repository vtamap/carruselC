import React, { Component, createRef } from "react";

class Carousel extends Component {
  state = {
    x: 0,
    currentPage: 1
  };

  $carousel = createRef();

  componentDidUpdate(prevProps) {
    if (prevProps.focus !== this.props.focus) {

     console.log(prevProps.titulo);       

      this.move(this.props.focus - prevProps.focus);
    }
  }

  calculateSizes = () => {
    const children = this.$carousel.current.children;
    const pageWidth = this.$carousel.current.clientWidth;

    const { elements } = Array.from(children) 
      .map(child => child.getBoundingClientRect()) 
      .map(({ x, width }) => ({
        start: x, 
        width, 
        end: x + width 
      }))
      .reduce(
        (result, { end, start, width }) => {
          const page = Math.ceil(
            (end + result.rest + this.props.leftPadding) / pageWidth
          );

          return {
            lastPage: result.lastPage !== page ? page : result.lastPage,
            elements: result.elements.concat({ width, start, end, page }),
            rest:
              result.lastPage !== page
                ? pageWidth * result.lastPage - start
                : result.rest
          };
        },
        { rest: 0, lastPage: 1, elements: [] } 
      );

    return elements;
  };

  move = (direction = 0) => {
    this.sizes = this.sizes || this.calculateSizes();
    const { page } = this.sizes[this.props.focus];
    if (this.state.currentPage === page) return;
    const { start } = this.sizes.find(element => element.page === page);
    this.setState(state => ({
      currentPage: page,
      x: start - this.props.leftPadding < 0 ? 0 : start - this.props.leftPadding
    }));
  };

  render() {
    const style = {
      transition: "transform 200ms linear", 
      transform: `translateX(-${this.state.x}px)` 
    };

    return (
      <this.props.component
        ref={this.$carousel}
        children={this.props.children}
        style={style} 
      />
    );
  }
}

export default Carousel;
