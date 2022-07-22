import React, { Component, Fragment } from 'react';
import Layout from './HOC/Layout/Layout.js'
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder.js';

export class BurgerApp extends Component {
	render() {
		return (
			<Fragment>
				<Layout>
					<BurgerBuilder/>
				</Layout>
			</Fragment>
		);
	}
}

export default BurgerApp;