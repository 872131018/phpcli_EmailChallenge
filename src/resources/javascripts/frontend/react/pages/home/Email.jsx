import React from 'react';

class Email extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-padding">
                <h3>Email: { this.props.email.name }</h3>
                <p>{ this.props.email.to }</p>
                <p>{ this.props.email.from }</p>
                <p>{ this.props.email.date }</p>
                <p>{ this.props.email.subject }</p>
            </div>
        );
    }
}

export default Email;
