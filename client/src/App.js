import "./App.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import setAuthToken from "./utils/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";

import ContactState from "./context/contacts/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

if (localStorage.token) {
	setAuthToken(localStorage.token);
}

const App = () => {
	return (
		<AuthState>
			<ContactState>
				<AlertState>
					<Router>
						<Fragment>
							<div className="App">
								<Navbar />
								<div className="container">
									<Alerts />
									<Routes>
										<Route
											exact
											path="/"
											element={<PrivateRoute path="/" component={Home} />}
										/>
										<Route exact path="/about" element={<About />} />
										<Route exact path="/register" element={<Register />} />
										<Route exact path="/login" element={<Login />} />
									</Routes>
								</div>
							</div>
						</Fragment>
					</Router>
				</AlertState>
			</ContactState>
		</AuthState>
	);
};

export default App;
