/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import './Mysite.scss';

import github from '../../images/icons/github.png';
import favicon from '../../images/icons/favicon.png';

const Mysite = ({ git, projectDesc, projectUrls }) => {
	return (
		<div className="mysite">
			<Fade triggerOnce direction="up">
				<div className="title">My Site</div>
			</Fade>
			<div className="site-table" direction="up">
				<Fade triggerOnce direction="up">
					<div className="each-table">
						<li className="site-desc">GitHub Profile</li>
						<a href={git} className="site-url">
							{git}
						</a>
					</div>
				</Fade>
				{projectDesc.map((com, idx) => {
					return (
						<Fade triggerOnce direction="up">
							<div className="each-table">
								<li className="site-desc">{com}</li>
								<a href={projectUrls[idx]} className="site-url">
									{projectUrls[idx]}
								</a>
							</div>
						</Fade>
					);
				})}
			</div>
		</div>
	);
};

export default Mysite;
