import React, { Component } from "react";
import Counter from "./counters";
class Counterss extends Component {
  render() {
    // passing children to a component..
    // writing the element within the tag of the parent and
    // inside the chilren we can render using this.props.children.

    const { onReset, onDelete, onIncrement, counters } = this.props;
    return (
      <div>
        <button className="btn btn-primary btn-sm m-2" onClick={onReset}>
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counterss;
