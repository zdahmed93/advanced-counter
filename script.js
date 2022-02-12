class Counter extends React.Component {
  state = {
    count: 0,
    taps: 0
  }
  incrementCount = () => {
    // this.setState({
    //     count: this.state.count + 1,
    //     taps: this.state.taps + 1
    // })

    // WHEN I DEPEND ON PREVIOUS STATE WE SHOULD USE setState WITH A FUNCTION AND NOT AN OBJECT
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
        taps: prevState.taps + 1,
      }
    })
  }



  decrementCount = () => {
    if (this.state.count === 0) {
      this.setState({
        taps: this.state.taps + 1
      })
      return;
    }
    this.setState({
      count: this.state.count - 1,
      taps: this.state.taps + 1
    })
  }


  resetCount = () => {
    this.setState({
      count: 0
    })
  }

  resetAll = () => {
    this.setState({
      count: 0,
      taps: 0
    })
  }



  render() {
    return (
      <div className="counter">
        <h1>Counter</h1>
        <h2 className="count">{this.state.count}</h2>
        <h4 className="taps">Total taps: {this.state.taps}</h4>
        <div>
          <button onClick={this.decrementCount}>Decrement -</button>
          <button onClick={this.incrementCount}>Increment +</button>
        </div>
        <div>
          <button onClick={this.resetCount} className="reset-count">Reset Count</button>
          <button onClick={this.resetAll} className="reset-all">Reset All</button>
        </div>

      </div>
    )
  }
}



function App() {
  return (
    <div className="app">
      <Counter />
    </div>
  )
}



ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
