import React from "react";
import addFriends from "../../images/add_friends.svg";
import addQuestion from "../../images/my_answer.svg";
import havingFun from "../../images/having-fun.svg";

const Menu = () => {
	let content = (
		<div className='menu-container'>
			<div className='one'>
				<div className='step-number step-one'>1</div>
				<div className='step-text-container'>
					<h2>Add Friends</h2>
					<p>
						Create a profile for each of your friends. <br />
						They can choose a username and a category as a specialty.
					</p>
					<button className='btn'>Add Friends</button>
				</div>
				<div className='step-image image-one'>
					<img src={addFriends} alt='' />
				</div>
			</div>
			<div className='two'>
				<div className='step-image image-two'>
					<img src={addQuestion} alt='' />
				</div>
				<div className='step-text-container text-question'>
					<h2>Add Questions</h2>
					<p>
						Create a maximum of 50 questions. Each question must have a
						category. <br />
						Try to have same number of questions per category.
					</p>
					<button className='btn'>Add Questions</button>
				</div>
				<div className='step-number step-two'>2</div>
			</div>
			<div className='three'>
				<div className='step-number step-three'>3</div>
				<div className='step-text-container'>
					<h2>Have Fun</h2>
					<p>
						Sometimes competitiveness can be a little out of control. <br />
						Try to avoid overreacting and have <span className='bold'>
							fun
						</span>{" "}
						with your friends.
					</p>
					<button className='btn'>Play Me</button>
				</div>
				<div className='step-image image-three'>
					<img src={havingFun} alt='' />
				</div>
			</div>
		</div>
	);

	return content;
};

export default Menu;
