import React, { Component } from 'react';

//переписати компонент на setTimeout замість setInterval

class StopWatchTimeout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0, 0, 0, 0, 0), //object
    };
    this.idTimeout = null;
  }

  tick = () => {
    this.setState((state) => {
      const { time } = state; //address
      const newTime = new Date(time); //new copy time
      newTime.setSeconds(newTime.getSeconds() + 1);
      return { time: newTime };
    });
  };

  start = () => {
    //запуск секунумера
    //setTimeout
  };

  stop = () => {
    //зупинка секундомера
  };

  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) });
  };

  componentDidMount() {}

  componentDidUpdate() {
    // побічні ефекти!!! 
    // recursion
    // start
  }

  componentWillUnmount() {}

  render() {
    const { time } = this.state;
    return (
      <article>
        <h2>{time.toLocaleTimeString('en-GB')}</h2>
        <div>
          <button onClick={this.start}>start</button>
          <button onClick={this.reset}>reset</button>
          <button onClick={this.stop}>stop</button>
        </div>
      </article>
    );
  }
}

export default StopWatchTimeout;
