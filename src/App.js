import "./style/css/main.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// components
import Home from "./components/Home/Home";
import Rules from "./components/Rules/Rules";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";

function App() {
	let content = (
		<Router>
			<nav>
				<Navigation />
			</nav>
			<main>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/menu'>
					<Menu />
				</Route>
				<Route path='/rules'>
					<Rules />
				</Route>
			</main>
			<footer>
				<Footer />
			</footer>
		</Router>
	);

	return content;
}

export default App;
