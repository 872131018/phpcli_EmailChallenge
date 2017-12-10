import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-top w3-bar w3-light-grey w3-opacity">
                <div className="w3-hide-small">
                    <Desktop/>
                </div>
                <div className="w3-hide-medium w3-hide-large">
                    <Mobile/>
                </div>
            </div>
        );
    }
}

export default Navigation;
