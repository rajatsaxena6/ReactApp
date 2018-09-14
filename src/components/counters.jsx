import React, { Component } from "react";
class Counter extends Component {
  // style which is used as an object
  styles = {
    fontSize: 20,
    fontWeight: "bold"
  };

  // no need to write the constructor
  //   constructor() {
  //     super();
  //     this.handleClick = this.handleClick.bind(this);
  //   }

  // renderTags() {
  //   if (this.state.tags.length === 0) return "There are no tags";

  //   return (
  //     <ul>
  //       {this.state.tags.map(tag => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  render() {
    // return <React.Fragment>{this.renderTags()}</React.Fragment>;

    return (
      <React.Fragment>
        <div>
          <h4> Counter # {this.props.counter.id}</h4>
          <span style={this.styles} className={this.getBadgeClasses()}>
            {this.formatCount()}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary "
          >
            Increment
          </button>
          <button
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-sm m-2 btn-danger"
          >
            Delete
          </button>
        </div>
      </React.Fragment>
    );
  }
  // map function is used here on array which is used generate the li tags dynamically..

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value == 0 ? "Zero" : value;
  }
}

export default Counter;
