import "./App.css";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import Dashboard from "./components/Dashboard/Dashboard";
import { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      flightCodes: [],
      squadronData: [],
    };
  }

  async componentDidMount() {
    const response = await fetch(
      "https://us-central1-cc-dashboard-afb15.cloudfunctions.net/getFlightCodes"
    );
    const newFlightCodes = await response.json();
    this.setState({ flightCodes: newFlightCodes });

    let output = [];
    await Promise.all(
      await this.state.flightCodes.flights.map(async (code) => {
        const airmenResponse = await fetch(
          `https://us-central1-cc-dashboard-afb15.cloudfunctions.net/getAirmen/${code}`
        );
        const airmenData = await airmenResponse.json();
        output.push({ flightName: code, flightData: airmenData });
      })
    );

    this.setState({ squadronData: output });
  }

  handleLogin = (event) => {
    this.setState({ isLoggedIn: true });
  };
  handleLogout = (event) => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div className="main">
        <Router>
          <Switch>
            {this.state.isLoggedIn ? (
              <Route path="/Dashboard">
                <Dashboard
                  logoutButtonClick={this.handleLogout}
                  flightCodes={this.state.flightCodes}
                  squadronDataOrWhateverName={this.state.squadronData}
                />
              </Route>
            ) : (
              <Route path="/">
                  <LoginScreen loginButtonClick={this.handleLogin} />
                  <Link to="/Dashboard">
                    <button onClick={(event) => this.handleLogin(event)} className="login-button">Login</button>
                  </Link>
              </Route>
            )}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

// const loginOrDashboard = this.state.isLoggedIn ? (
//   <Route path="/Dashboard">
//     <Dashboard
//       logoutButtonClick={this.handleLogout}
//       flightCodes={this.state.flightCodes}
//       squadronDataOrWhateverName={this.state.squadronData}
//     />
//   </Route>
// ) : (
//   <Route exact path="/">
//     <LoginScreen loginButtonClick={this.handleLogin} />
//   </Route>
// );
