import React, { useState } from 'react';

import upIcon from '../assets/arrow_upward.svg'
import downIcon from '../assets/arrow_downward.svg'
import commentIcon from '../assets/add_comment.svg'
import optionIcon from '../assets/more_vert.svg'
import replyIcon from '../assets/reply.svg'

import mlogo from '../assets/male_avatar.svg'

import './styles.css';

import axios from 'axios';


function Post({ content, name, token, setUser, user }) {
	const [upCounter, setUp] = useState(false);
	const [downCounter, setDown] = useState(false);
	const [commentCounter, setComment] = useState(false);
	let comments = [];

	function handleLike(id) {
		setUp(!upCounter);
		setDown(false);


		let number = 1;
		if (upCounter == true)
			number = -1;
		axios.post(`${process.env.REACT_APP_BASE_URL}/like`,
			{ number, id },
			{ headers: { "Authorization": `Bearer ${token}` } }
		)
			.then(res => {
				// setUser(res.data)
				console.log(res.data)
			}).catch(err => console.log(err))
	}

	function handleDislike(id) {
		setUp(false);
		setDown(!downCounter);

		let number = 1;
		if (downCounter == true)
			number = -1;
		axios.post(`${process.env.REACT_APP_BASE_URL}/dislike`,
			{ number, id },
			{ headers: { "Authorization": `Bearer ${token}` } }
		)
			.then(res => {
				// setUser(res.data)
				console.log(res.data)
			}).catch(err => console.log(err))
	}

	function handleComment(comment, id) {
		let name = user.userName
		axios.post(`${process.env.REACT_APP_BASE_URL}/addComment`,
			{ comment, id, name },
			{ headers: { "Authorization": `Bearer ${token}` } }
		)
			.then(res => {
				// setUser({...res.data})
				console.log(user)
			}).catch(err => console.log(err))

	}
	const CommentForm = () => {
		return (
			<form className="reply">
				<input className="addComment"
					type="comment" name="addComment"
					placeholder="Your text" autoComplete="off"
				/>
				<img src={replyIcon} alt="reply"
					onClick={() => handleComment(
						document.getElementsByName("addComment")[0].value,
						content.id
					)}
				/>

			</form>
		)
	}

	return (
		<div className="Post">
			<div className="headTab">
				<img src={mlogo} alt="Logo" width={64} />
				<p>{name}</p>
				<p className="date">{content.date}</p>
			</div>
			<div className="textTab">
				<p>{content.text}</p>
			</div>
			<div className="commentsOfPost">
				{console.log(content.comments)}
				{content.comments.map(e =>
					<div style={{ display: 'flex' }}>
						<p style={{color:"#2211aa"}}>{e.user}:</p>
						<p>{e.text}</p>
					</div>)
				}
			</div>
			<div className="likeTab">
				<img src={upIcon} alt="upvote"
					className={upCounter ? "selected" : "a"}
					onClick={() => handleLike(content.id)}
				/>
				<img src={downIcon} alt="downvote"
					className={downCounter ? "selected" : "a"}
					onClick={() => handleDislike(content.id)}
				/>
				<img src={commentIcon} alt="comment"
					onClick={() => setComment(!commentCounter)}
				/>
				<img src={optionIcon} alt="options" />

			</div>
			{console.log(content.comments)}
			{commentCounter
				&& <CommentForm />}
		</div>





	);
}

export default Post;
