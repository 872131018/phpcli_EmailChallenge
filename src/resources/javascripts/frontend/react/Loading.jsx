import React from 'react';

class Loading extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="atom">
                <div className="w3-aqua center"/>
                <div className="w3-border-grey ring"/>
                <div className="w3-border-grey ring"/>
                <div className="w3-border-grey ring"/>
                <div className="w3-aqua e"/>
                <div className="w3-aqua e"/>
                <div className="w3-aqua e"/>
            </div>
        );
    }
}

export default Loading;
