import "./style/css/main.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// components
import Home from "./components/Home/Home";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

function App() {
	let content = (
		<Router>
			<nav>
				<Navigation />
			</nav>
			<Route path='/'>
				<main>
					<Home />
				</main>
			</Route>
			<footer>
				<Footer />
			</footer>
		</Router>
	);

	return content;
}

export default App;
