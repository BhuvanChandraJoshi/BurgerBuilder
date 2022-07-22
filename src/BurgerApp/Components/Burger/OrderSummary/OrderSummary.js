import React, { Component } from 'react';
import Auxillary from '../../../HOC/Auxillary/Auxillary.js';
import Btn from '../../UI/Button/Button.js';

class OrderSummary extends Component {
	//This can be a Functional Component, doesn't have to be a class component
	
	//componentDidUpdate() is used here just to check when OrderSummary gets changed(there is no need) {this is why we used class component here i.e. just for checking}
	componentDidUpdate() {
		console.log("[OrderSummary] DidUpdate");
	}

	render(){
		const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
			return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span> {this.props.ingredients[igKey]}</li>;
		});
		return(
			<Auxillary>
				<p>Your Order</p>
				<p>A delicious burger with the following ingredients:</p>
				<ul>
					{ingredientSummary}
				</ul>
				<p><strong>Total Price : ${this.props.price}</strong></p>
				<Btn BtnType={"Danger"} clicked={this.props.purchaseCancelled}>Cancel</Btn>
				<Btn BtnType={"Success"} clicked={this.props.purchaseContinued}>Continue</Btn>
			</Auxillary>
		);
	};
}

export default OrderSummary;