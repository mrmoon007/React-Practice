import React, { useState } from "react";

const withCounter = (OriginalComponent) => {
  // const NewComponent = () => {
  //     const [count, setCount] = useState(0); // Initialize count to 0
  //     const handleCount = () => {
  //         setCount(count + 1);
  //     }
  //     return <OriginalComponent handleCount={handleCount} count={count} />
  // }
  // return NewComponent;

  class NewComponent extends React.Component {
    state = {
      count: 0,
    };

    handleCount = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
      const { count } = this.state;
      return <OriginalComponent count={count} handleCount={this.handleCount} />;
    }
  }
  return NewComponent;
};

export default withCounter;
