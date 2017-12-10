import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);

        this.update = this.update.bind(this);
    }

    update(event) {
        store.dispatch({
            type: `SET_${ this.props.label.toUpperCase() }`,
            data: event.target.value
        });
    }

    render() {
        return (
            <div className="w3-section">
                <input className="w3-input" type="text"
                    value={ this.props.value }
                    onChange={ this.update }/>
                <label>{ this.props.label }</label>
            </div>
        );
    }
}

export default Input;
