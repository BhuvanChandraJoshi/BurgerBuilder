import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js';
import DrawerToggle from '../../Burger/DrawerToggle/DrawerToggle.js';

const Toolbar = (props) => {
	return(
		<header className={classes.Toolbar}>
			<DrawerToggle clicked={props.SideDrawerToggle}/>
			<div className={classes.Logo}>
				<Logo/>
			</div>
			<nav className={classes.DesktopOnly}>
				<NavigationItems/>
			</nav>
		</header>
	);
}

export default Toolbar;