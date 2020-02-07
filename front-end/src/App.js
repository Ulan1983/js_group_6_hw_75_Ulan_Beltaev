import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router-dom";
import {Container} from "reactstrap";

import MainPage from "./containers/MainPage";


class App extends Component {
    render() {
        return (
            <Fragment>
                <Container style={{marginTop: '50px'}}>
                    <Switch>
                        <Route path='/' exact component={MainPage}/>
                    </Switch>
                </Container>
            </Fragment>
        );
    }
}

export default App;
