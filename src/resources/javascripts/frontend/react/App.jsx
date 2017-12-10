import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Loading from './Loading';
import Home from './pages/home/Index';

const props = (store) => {
    return {
        loading: store.ServiceStore
    };
};

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("App Mounted!");

        // @TODO analytic component mounting twice :/
        //store.dispatch({ type: 'SERVICE_LOADING' });
        /*
        axios.get('/tool/find').then(response => {
            store.dispatch({ type: 'SET_TOOLS', data: response.data });
            store.dispatch({ type: 'SERVICE_FINISHED' });
        });
        */
    }

    render() {
        return (
            <Router>
                <div>
                    { this.props.loading != 0 ?
                        <Loading/> :
                        <div>
                            <Route exact path='/' component={ Home }/>
                        </div>
                    }
                </div>
            </Router>
        );
    }
}

export default connect(props)(App);
