import React from 'react';
import classes from './Button.module.css';

const Btn = (props) => {
	return(
		<div onClick={props.clicked} className={[classes.Button, classes[props.BtnType]].join(" ")}>
			{props.children}
		</div>
	);
}

export default Btn;