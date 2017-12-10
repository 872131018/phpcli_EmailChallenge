import React from 'react';

class Checkbox extends React.Component {
    constructor(props) {
        super(props);

        this.liked = this.liked.bind(this);
    }

    liked(event) {
        store.dispatch({
            type: 'SET_LIKES',
            data: event.target.checked });
    }

    render() {
        return (
            <div className="w3-section">
                <div className="demo">
                    <label className="switcher">
                        <input className="w3-hide" type="checkbox"
                            checked={ this.props.checked }
                            onChange={ this.liked }/>
                        <div className="switcher__indicator"></div>
                        <span>This is a cool site</span>
                    </label>
                </div>
            </div>
        );
    }
}

export default Checkbox;
