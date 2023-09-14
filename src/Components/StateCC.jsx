import { Component } from "react";

class InputForm extends Component {
  state = {
    uName: "",
    uEmail: "",
    isAllowedtoVote: false,
    details: "",
  };

  render() {
    return (
      <div>
        <div className="form-element">
          <p>Name</p>
          <input
            type="text"
            placeholder="Enter name"
            value={this.state.uName}
            onChange={(e) => this.setState({ uName: e.target.value })}
          />
        </div>

        <div className="form-element">
          <p>Email</p>
          <input
            type="email"
            placeholder="Enter Email"
            value={this.state.uEmail}
            onChange={(e) => this.setState({ uEmail: e.target.value })}
          />
        </div>
        <div className="form-element">
          <input
            id="check"
            type="checkbox"
            onChange={(e) =>
              this.setState({ isAllowedtoVote: e.target.checked })
            }
          />
          <label for="check"> Vote</label>
        </div>

        <div className="form-element">
          <p>Enter Details</p>
          <textarea
            rows="4"
            cols="50"
            onChange={(e) => this.setState({ details: e.target.value })}
          />
        </div>

        <div>
          <p>Name: {this.state.uName}</p>
          <p>Email: {this.state.uEmail}</p>
          <p>Vote:{this.state.isAllowedtoVote ? "Yes" : "No"}</p>
          <p>Details:{this.state.details}</p>
        </div>
      </div>
    );
  }
}

export default InputForm;
