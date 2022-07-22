import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import Backdrop from '../../UI/Backdrop/Backdrop.js';
import Auxillary from '../../../HOC/Auxillary/Auxillary.js';

const SideDrawer = (props) => {
	
	let SideDrawerClasses = [classes.SideDrawer, classes.Close];
	if(props.open === true){
		SideDrawerClasses = [classes.SideDrawer, classes.Open];
	}

	return (
		<Auxillary>
			<Backdrop show={props.open} BackdropClicked={props.close}/>
			<div className={SideDrawerClasses.join(" ")}>
				<div className={classes.Logo}>
					<Logo/>
				</div>
				<nav>
					<NavigationItems/>
				</nav>
			</div>	
		</Auxillary>
		
	);
}

export default SideDrawer;