import React from "react";
import linkedin from "../../images/linkedin-icon.svg";
import github from "../../images/github-icon.svg";
import heart from "../../images/heart.svg";

const Footer = () => {
	let content = (
		<div className='footer-container'>
			<div className='made-by'>
				<p className='made-by--text'>
					made with <img className='heart' src={heart} alt='heart icon' /> by{" "}
					<span className='bold'>nunolemos</span>
				</p>
			</div>
			<ul className='social'>
				<li className='social--item'>
					<a target='blank' href='https://www.linkedin.com/in/nunojllemos/'>
						<img src={linkedin} alt='linkedin logo' />
					</a>
				</li>
				<li className='social--item'>
					<a target='blank' href='https://github.com/nunojllemos'>
						<img src={github} alt='github logo' />
					</a>
				</li>
			</ul>
		</div>
	);

	return content;
};

export default Footer;
