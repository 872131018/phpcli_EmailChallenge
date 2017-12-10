import React from 'react';
import GoogleMap from './GoogleMap';
import Form from './Form';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-container w3-pale-blue">
                <div className="w3-content w3-padding-32">
                    <div className="w3-half w3-padding">
                        <GoogleMap/>
                    </div>
                    <div className="w3-half w3-padding">
                        <Form/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;
