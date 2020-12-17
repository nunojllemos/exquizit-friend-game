import React from "react";
import bbq from "../../images/bbq-image.svg";

const Rules = () => {
	let content = (
		<>
			<div className='rules-text-wrapper'>
				<h1 className='rule-title'>
					1<span className='upper-text'>st</span> RULE:{" "}
					<span className='rule-title--unbold'>You do not talk about ex</span>
					<span className='bold'>QUIZ</span>
					<span className='rule-title--unbold'>it game club.</span>
				</h1>
				<h2 className='rule-title-jk'>JK! Tell everyone.</h2>
				<div className='rules-text'>
					<p>
						This super quiz can have a{" "}
						<span className='bold'>maximum of 50 questions</span> and{" "}
						<span className='bold'>up to 8 players</span>.
					</p>
					<p>
						Questions have <span className='bold'>categories</span> and there
						are <span className='bold'>10</span> to choose from.
					</p>
					<p>
						There's a timer starting at <span className='bold'>15 seconds</span>{" "}
						although it is <span className='bold'>optional</span> to turn it on.
					</p>
					<p>
						<span className='bold'>Each player</span> will choose{" "}
						<span className='bold'>one category</span> as its own specialty and
						questions <span className='bold'>about that category</span> will
						value <span className='bold'>2</span> points.{" "}
						<span className='bold'>Regular</span> questions value{" "}
						<span className='bold'>1</span> point.
					</p>
				</div>
			</div>
			<div className='rules-image-wrapper'>
				<img src={bbq} alt='barbeque illustration' />
			</div>
		</>
	);

	return content;
};

export default Rules;
