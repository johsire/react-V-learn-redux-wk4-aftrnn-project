import React from 'react';
import WizardOne from './components/WizardOne/WizardOne';
import WizardTwo from './components/WizardTwo/WizardTwo';
import WizardThree from './components/WizardThree/WizardThree';
import WizardFour from './components/WizardFour/WizardFour';
import WizardFive from './components/WizardFive/WizardFive';
import WizardSix from './components/WizardSix/WizardSix';
import WizardSeven from './components/WizardSeven/WizardSeven';
import WizardEight from './components/WizardEight/WizardEight';
import WizardNine from './components/WizardNine/WizardNine';
import WizardTen from './components/WizardTen/WizardTen';
import WizardEleven from './components/WizardEleven/WizardEleven';
import Finish from './components/Finish/Finish';

import NextBtn from './components/NextBtn/NextBtn';
import { HashRouter, Route } from 'react-router-dom';
import reducer from './ducks/reducer';


const initialState = {
    loanType: 'Home Purchase',
    propertType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

function reducer(state = initialState, action) {
    const  UPDATE_LOAN_TYPE = "UPDATE_LOAN_TYPE";
    CONSR   UPDATE_PROPERTY_TYPE = "UPDATE_PROPERTY_TYPE"
}


export default (
    <HashRouter>

        <Route component={NextBtn} exact path= '/' />
        <Route component={WizardOne}  path= '/wOne' />
        <Route component={WizardTwo}  path= '/wTwo' />
        <Route component={WizardThree}  path= '/wThree' />
        <Route component={WizardFour}  path= '/wFour' />
        <Route component={WizardFive}  path= '/wFive' />
        <Route component={WizardSix}  path= '/wSix' />
        <Route component={WizardSeven}  path= '/wSeven' />
        <Route component={WizardEight}  path= '/wEight' />
        <Route component={WizardNine}  path= '/wNine' />
        <Route component={WizardTen}  path= '/wTen' />
        <Route component={WizardEleven}  path= '/WizardEleven' />
        <Route component={Finish}  path= '/finish' />

    </HashRouter>
)
