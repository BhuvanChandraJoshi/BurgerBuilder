import React, { Component } from 'react';
import Auxillary from '../../HOC/Auxillary/Auxillary.js';
import Burger from '../../Components/Burger/Burger.js';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls.js';
import Modal from '../../Components/UI/Modal/Modal.js';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary.js';


const INGREDIENTS_PRICES = {
	bacon: 0.7,
	cheese: 0.4,
	salad: 0.5,
	meat: 1.3
}

class BurgerBuilder extends Component{
	state = {
		ingredients : {
			bacon: 0,
			cheese: 0,
			salad: 0,
			meat: 0
		},
		totalPrice : 4,
		purchasable : false,
		purchasing : false
	}

	updatePurchaseState = (updatedIngredients) => {
		const ingredients = {
			...updatedIngredients
		}
		const sum = Object.keys(ingredients).map(igKey => {
			return ingredients[igKey];
		}).reduce((sum, el) => {
			return sum+el;
		}, 0)
		this.setState({purchasable: sum>0})
	}

	addIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		const updatedCount = oldCount+1;
		const updatedIngredients = {
			...this.state.ingredients
		}
		updatedIngredients[type] = updatedCount;
		const oldPrice = this.state.totalPrice;
		const updatedPrice = oldPrice + INGREDIENTS_PRICES[type];
		this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
		this.updatePurchaseState(updatedIngredients);
	}

	removeIngredientHandler = (type) => {
		const oldCount = this.state.ingredients[type];
		if(oldCount === 0){
			return;
		}
		let updatedCount = oldCount-1;
		const updatedIngredients = {
			...this.state.ingredients
		}
		updatedIngredients[type] = updatedCount;
		const oldPrice = this.state.totalPrice;
		const updatedPrice = oldPrice - INGREDIENTS_PRICES[type];
		this.setState({ingredients: updatedIngredients, totalPrice: updatedPrice});
		this.updatePurchaseState(updatedIngredients);
	}

	purchaseHandler = () => {
		this.setState({purchasing: true})
	}

	purchaseCancelHandler = () => {
		this.setState({purchasing: false})
	}

	purchaseContinueHandler = () => {
		alert("Continue");
	}

	render() {
		const disabledInfo = {
			...this.state.ingredients
		}	
		for(let key in disabledInfo){
			disabledInfo[key] = disabledInfo[key] <= 0             	// this will set value true/false to the key in disable info
		} 
		return(
			<Auxillary>

				<Modal 
					show={this.state.purchasing} 
					modalClosed={this.purchaseCancelHandler}>
						<OrderSummary 
							ingredients={this.state.ingredients} 
							purchaseCancelled={this.purchaseCancelHandler}
							purchaseContinued={this.purchaseContinueHandler}
							price={this.state.totalPrice.toFixed(2)}
						/>
				</Modal>

				<Burger ingredients={this.state.ingredients}/>

				<BuildControls 
					ingredientAdded={this.addIngredientHandler} 
					ingredientRemoved={this.removeIngredientHandler} 
					disabled={disabledInfo} 
					price={this.state.totalPrice.toFixed(2)} 
					purchasable={this.state.purchasable} 
					ordered={this.purchaseHandler}/>  

			</Auxillary>
		);
	};
}

export default BurgerBuilder