import React  from 'react';
import classes from "./BuildControls.module.css";
import BuildControl  from "./BuildControl/BuildControl.js";

const controls = [
	{label: 'Bacon', type: 'bacon'},
	{label: 'Cheese', type: 'cheese'},
	{label: 'Salad', type: 'salad'},
	{label: 'Meat', type: 'meat'}
];

const BuildControls = (props) => {

	
	return(
		<div className={classes.BuildControls}>
			<p>Price: <strong>${props.price}</strong></p>
			{controls.map( ctrl => {
				return <BuildControl key={ctrl.label} label={ctrl.label} added={() => props.ingredientAdded(ctrl.type)} removed={() => props.ingredientRemoved(ctrl.type)} disabled={props.disabled[ctrl.type]}/>
			})}
			<button 
				className={classes.OrderButton} 
				disabled={!props.purchasable} 
				onClick={props.ordered}>Order Now 
			</button>
		</div>
	);
	
}

export default BuildControls;