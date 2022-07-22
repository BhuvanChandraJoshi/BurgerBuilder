import React from 'react';
import BurgerLogo from '../../Assets/Images/BurgerLogo.png';
import classes from './Logo.module.css';

const Logo = () => (
	<div className={classes.Logo}>
		<img src={BurgerLogo} alt="Logo"/>
	</div>
);

export default Logo;