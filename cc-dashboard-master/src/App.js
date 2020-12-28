import "./App.css";
import LoginScreen from "./components/LoginScreen/LoginScreen";
import Dashboard from "./components/Dashboard/Dashboard";
import {Component} from "react";
import {BrowserRouter as Router, Link, Switch, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false,
            squadronAdminStatus: [],
            squadronData: [],
        };
    }

    async componentDidMount() {
        //refactored to 1x GET request
        // INNER JOIN with 'airmen' table and 'flight' table
        const response = await fetch(
            "http://localhost:3001/squadron_admin_status"
        );
        const responseJSON = await response.json();
        this.setState({squadronAdminStatus: responseJSON});

    }

    handleLogin = (event) => {
        this.setState({isLoggedIn: true});
    };
    handleLogout = (event) => {
        this.setState({isLoggedIn: false});
    };

    render() {
        return (
            <div className="main">
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <LoginScreen loginButtonClick={this.handleLogin}/>
                            <Link exact to="/Dashboard">
                                <button
                                    onClick={(event) => this.handleLogin(event)}
                                    className="login-button"
                                >
                                    Login
                                </button>
                            </Link>
                        </Route>
                        <Route exact path="/Dashboard">
                            <Dashboard
                                logoutButtonClick={this.handleLogout}
                                flightCodes={this.state.squadronAdminStatus}
                                squadronDataOrWhateverName={this.state.squadronData}
                            />
                        </Route>

                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
