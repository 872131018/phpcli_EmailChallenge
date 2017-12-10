import React from 'react';

class Icon extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="w3-left w3-padding">
                <p>{ this.props.tool.header }</p>
                <i className={ `w3-jumbo ${ this.props.tool.icon }` }/>
            </div>
        );
    }
}

export default Icon;
