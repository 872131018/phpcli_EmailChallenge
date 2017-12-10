import React from 'react';
import { Link } from 'react-router-dom';

class Route extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Link className="w3-bar-item w3-button w3-right" to={ this.props.route }>
                <i className={ 'fa fa-' + this.props.icon + ' fa-2x w3-margin-right' }/>{ this.props.name }
            </Link>
        );
    }
}

export default Route;
