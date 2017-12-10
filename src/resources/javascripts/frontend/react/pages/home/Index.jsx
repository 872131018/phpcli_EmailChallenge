import React from 'react';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="w3-sidebar w3-third">
                    <div className="bgimg"></div>
                </div>
                <div style={{ marginLeft: '33%' }}>
                    <header className="w3-center">
                        <p>Upload a file to see its data.</p>
                        <button className="w3-button w3-light-grey w3-padding-large w3-margin-top">
                            <i className="fa fa-download"></i> Download Resume
                        </button>
                    </header>
                </div>
            </div>
        );
    }
}

export default Page;
