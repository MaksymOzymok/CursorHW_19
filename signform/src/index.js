import React from 'react';
import SignIn from "./sign-in-form/sign-in";
import SignUp from "./sign-up-form/sign-up";
import ReactDOM from "react-dom"
import {BrowserRouter,Switch,Route} from "react-router-dom"

ReactDOM.render(
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={SignIn}/>
                <Route path="/register" component={SignUp}/>
            </Switch>

        </BrowserRouter>
    </>,document.getElementById('root'));

