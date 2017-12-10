import React from 'react';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <span className="w3-bar-item w3-button w3-wide w3-left">
                <i className="fa fa-hand-spock-o fa-2x w3-margin-right"/>WELCOME.
            </span>
        );
    }
}

export default Welcome;
