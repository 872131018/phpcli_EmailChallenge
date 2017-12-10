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
