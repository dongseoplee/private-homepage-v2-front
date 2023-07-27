/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './About.scss';

import calendar from '../../images/icons/calendar.svg';
import home from '../../images/icons/home.svg';
import mail from '../../images/icons/mail.svg';
import phone from '../../images/icons/phone.svg';
import school from '../../images/icons/school.svg';
import user from '../../images/icons/user.svg';

const About = ({ name, location, birthday, email, phone_number, university, dept }) => {
	return (
		<div>
			<div className="about">
				<Fade triggerOnce direction="up">
					<div className="title">About</div>
				</Fade>
				<Fade triggerOnce direction="up">
					<div className="about-table">
						<div className="each-table">
							<img className="icon" src={user} />
							<div className="description">name</div>
							<div className="answer">{name}</div>
						</div>
						<div className="each-table">
							<img className="icon" src={calendar} />
							<div className="description">birth</div>
							<div className="answer">{birthday}</div>
						</div>
						<div className="each-table">
							<img className="icon" src={home} />
							<div className="description">location</div>
							<div className="answer">{location}</div>
						</div>
						<div className="each-table">
							<img className="icon" src={phone} />
							<div className="description">phone</div>
							<div className="answer">{phone_number}</div>
						</div>
						<div className="each-table">
							<img className="icon" src={mail} />
							<div className="description">email</div>
							<div className="answer">{email}</div>
						</div>
						<div className="each-table">
							<img className="icon" src={school} />
							<div className="description">scholarship</div>
							<div className="answer">
								{university} <br /> {dept}
							</div>
						</div>
					</div>
				</Fade>
			</div>
		</div>
	);
};

export default About;
