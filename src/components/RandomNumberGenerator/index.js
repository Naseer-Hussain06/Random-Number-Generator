import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    count: 0,
  }

  onRandombutton = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState({
      count: randomNumber,
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="backgroundImage">
        <div className="Random-number-generator-card">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onRandombutton}
            >
              Generate
            </button>
          </div>
          <p className="count-value">{count}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
