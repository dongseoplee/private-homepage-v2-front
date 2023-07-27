/* eslint-disable prettier/prettier */
/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import './Skills.scss';
import reactImg from '../../images/tech/react.png';
import djangoImg from '../../images/tech/django.png';
import gitImg from '../../images/tech/git.png';
import githubImg from '../../images/tech/github.jpg';
import pythonImg from '../../images/tech/python.png';
import javascriptImg from '../../images/tech/javascript.png';
import javaImg from '../../images/tech/java.png';
import springImg from '../../images/tech/spring.png';
import awsImg from '../../images/tech/aws.png';

const Skills = ({ skill }) => {
	const techList = {
		Eeact: reactImg,
		Django: djangoImg,
		Git: gitImg,
		GitHub: githubImg,
		Python: pythonImg,
		JavaScript: javascriptImg,
		Java: javaImg,
		AWS: awsImg,
		SpringBoot: springImg,
		React: reactImg,
	};

	const [tech, setTech] = useState([]);

	useEffect(() => {
		// DB에서 str 형태로 온 스킬들을 배열 형태로 저장
		setTimeout(() => {
			console.log(skill);
			let tmp = skill.split(', ');

			setTech(tmp);
		}, 300);
	}, [skill]);

	return (
		<div className="skills">
			<Fade triggerOnce direction="up">
				<div className="title">Skills</div>
			</Fade>
			<Fade triggerOnce direction="up">
				<div className="skills-table">
					{tech.map(com => {
						return (
							<div className="each-table" key={com}>
								<img className="tech-image" src={techList[com]} />
								<div className="tect-title">{com}</div>
							</div>
						);
					})}
				</div>
			</Fade>
		</div>
	);
};

export default Skills;
