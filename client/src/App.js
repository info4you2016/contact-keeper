import "./App.css";
import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

import ContactState from "./context/contacts/ContactState";

const App = () => {
	return (
		<ContactState>
			<Router>
				<Fragment>
					<div className="App">
						<Navbar />
						<div className="container">
							<Routes>
								<Route exact path="/" element={<Home />} />
								<Route exact path="/about" element={<About />} />
							</Routes>
						</div>
					</div>
				</Fragment>
			</Router>
		</ContactState>
	);
};

export default App;