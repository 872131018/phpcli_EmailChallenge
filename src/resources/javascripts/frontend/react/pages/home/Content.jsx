import React from 'react';
import { connect } from 'react-redux';

const props = (store) => {
    return {
        contents: store.ContentStore.contents
    };
};

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-container w3-pale-blue">
                <div className="w3-content w3-padding-32">
                    <div className="w3-section w3-center">
                        <h1><em>{ this.props.contents[0].header }</em></h1>
                        <p>{ this.props.contents[0].content }</p>
                    </div>
                    <div className="w3-section w3-center">
                        <div className="w3-half w3-padding">
                            <img className="w3-image w3-opacity" src="/images/jamboree.jpg"/>
                        </div>
                        <div className="w3-half w3-padding">
                            <p>{ this.props.contents[1].content }</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(props)(Content);
