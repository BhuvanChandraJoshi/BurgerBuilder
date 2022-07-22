import React, { Component } from 'react';
import classes from './Modal.module.css'
import Auxillary from '../../../HOC/Auxillary/Auxillary.js';
import Backdrop from '../Backdrop/Backdrop.js';

class Modal extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.show !== this.props.show;
	}
	componentDidUpdate() {
		console.log('[Modal] WillUpdate');
	}
	render(){
		return(
			<Auxillary>

				<Backdrop show={this.props.show} BackdropClicked={this.props.modalClosed}/>

				<div className={classes.Modal} 
					style={{ transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)', opacity: this.props.show ? '1':'0'}}>
						{this.props.children}
				</div>

			</Auxillary>
		);
	}
	
}

export default Modal;