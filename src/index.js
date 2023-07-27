/* eslint-disable react/jsx-no-useless-fragment */
import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import { RecoilRoot } from 'recoil';

// import './styles/reset.scss';
// import './styles/common.scss';

ReactDOM.render(
	<React.Fragment>
		<RecoilRoot>
			<Router />
		</RecoilRoot>
	</React.Fragment>,
	document.getElementById('root'),
);
