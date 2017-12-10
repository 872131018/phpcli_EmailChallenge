import React from 'react';

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-padding">
                <p>{ this.props.language.header }</p>
                <div className="w3-aqua" style={{ width: this.props.language.interest }}>{ this.props.language.interest }</div>
            </div>
        );
    }
}

export default ProgressBar;
