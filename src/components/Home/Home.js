import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	let content = (
		<>
			<div className='text-wrapper'>
				<div className='text-wrapper--title'>
					<h1 className='title'>
						Why did your friend cross the road?
						<br />
						<span className='title--unbold'>He </span> didn't
						<span className='title--unbold'>! He stayed at home.</span>
					</h1>
					<p className='title--hashes'>
						<span className='bold'>#</span>staysafe{" "}
						<span className='bold'>#</span>stayathome
					</p>
				</div>
				<div className='text-wrapper--subtitle'>
					<p className='text-wrapper--subtitle--first-paragraph'>
						Meet your friends using some videoconference app and measure your
						general knowledge in this healthy and competitive ex
						<span className='bold'>QUIZ</span>it friendly game.
					</p>
					<p className='text-wrapper--subtitle--second-paragraph'>
						Create your own questions and invite your own friends.
					</p>

					<Link to='/menu'>
						<button className='btn button-play-now'>play now</button>
					</Link>
				</div>
			</div>
			<div className='image-wrapper'></div>
		</>
	);

	return content;
};

export default Home;
