import React from 'react';

class Parallax extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-display-container parallax">
                <div className="w3-display-middle w3-text-aqua w3-center">
                    <h1 className="w3-opacity-off">Contact</h1>
                    <h3 className="w3-opacity-off">Email : Text : Phone</h3>
                    <p><i className="fa fa-map-marker fa-2x w3-margin-right"/>Denver, CO</p>
                    <p><i className="fa fa-phone fa-2x w3-margin-right"/>970-471-6603</p>
                    <p><i className="fa fa-envelope-o fa-2x w3-margin-right"/>j-huffman@hotmail.com</p>
                </div>
            </div>
        );
    }
}

export default Parallax;
