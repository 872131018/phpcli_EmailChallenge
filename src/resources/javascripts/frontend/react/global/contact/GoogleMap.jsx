import React from 'react';

class GoogleMap extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="googleMap" className="w3-greyscale" style={{ width: '100%', height:'400px' }}/>
        );
    }
}

export default GoogleMap;
