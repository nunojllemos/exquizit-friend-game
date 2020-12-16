import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

const Navigation = () => {
	return (
		<div className='navigation-container'>
			<div className='logo'>
				<div className='logo--image'>
					<img src={logo} alt='speaker' />
				</div>
				<div className='logo--text'>
					<p className='logo--text--title'>
						ex<span className='logo--text--title--span'>quiz</span>it
					</p>
					<p className='logo--text--subtitle'>friends game</p>
				</div>
			</div>
			<ul className='navigation-links'>
				<li className='navigation-links--item'>
					<Link className='navigation-links--link home' to='/'>
						home
					</Link>
				</li>
				<li className='navigation-links--item'>
					<Link className='navigation-links--link rules' to='/rules'>
						rules
					</Link>
				</li>
				<li className='navigation-links--item'>
					<Link className='navigation-links--link play' to='/'>
						play
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
