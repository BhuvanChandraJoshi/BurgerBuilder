import React, { Component } from 'react';
import Auxillary from '../../HOC/Auxillary/Auxillary.js';
import Classes from './Layout.module.css'
import Toolbar from '../../Components/Navigation/Toolbar/Toolbar.js';
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer.js';

class Layout extends Component {
	state = {
		showSideDrawer : false
	}
	closeSideDrawerHandler = () => {
		this.setState({showSideDrawer : false})
	}
	toggleSidebarHandler = () => {
		const showSideDrawerState = this.state.showSideDrawer;
		this.setState({showSideDrawer: !showSideDrawerState});
	}

	render(){
		return(
			<Auxillary>
				<Toolbar SideDrawerToggle={this.toggleSidebarHandler}/>
				<SideDrawer open={this.state.showSideDrawer} close={this.closeSideDrawerHandler}/>
				<main className={Classes.Content}>
					{this.props.children}
				</main>
			</Auxillary>
		);
	}
}

export default Layout;