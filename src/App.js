import './App.css';
import React, { Component, Fragment } from 'react';
import BurgerApp from './BurgerApp/BurgerApp.js';

export class App extends Component {
    render() {
        return (
            <Fragment>
                <BurgerApp/>
            </Fragment>
        );
    }
}

export default App;