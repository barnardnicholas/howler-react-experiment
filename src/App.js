import React, { Component } from "react";
import "./App.css";
import * as howlerUtils from "./utils/howler-utils";
import sounds from "./data/sounds";
import scenarios from "./data/scenarios";

class App extends Component {
  state = {
    playing: false,
    volume: 0.7,
    pan: 0.5
  };

  buildChannelList = channels => {
    const { currentScenario, bgChannels, randChannels } = this.state;
    const thisScenario = scenarios.filter(
      scenario => scenario.slug === currentScenario
    )[0];
    const newBgChannels = [...thisScenario.bg_sounds];
    const newRandChannels = [...thisScenario.random_sounds];
    this.setState({ bgChannels: newBgChannels, randChannels: newRandChannels });
  };

  handlePlayPause = () => {
    const { playSound, pauseSound } = howlerUtils;
    const { playing } = this.state;
    if (playing) {
      pauseSound();
      this.setState({ playing: false });
    } else {
      playSound();
      this.setState({ playing: true });
    }
  };

  handleVolume = event => {
    const { value } = event.target;
    const { volume } = this.state;
    this.setState({ volume: value });
    howlerUtils.volSound(volume);
  };

  handlePan = event => {
    const { value } = event.target;
    const { pan } = this.state;
    this.setState({ pan: value });
    howlerUtils.panSound(pan);
  };

  render() {
    const { volume, pan } = this.state;
    return (
      <div className="App">
        <button onClick={this.handlePlayPause}>Play/Pause</button>
        <label>
          Volume
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={this.handleVolume}
          ></input>
        </label>
        <label>
          Pan
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={pan}
            onChange={this.handlePan}
          ></input>
        </label>
      </div>
    );
  }
}

export default App;
