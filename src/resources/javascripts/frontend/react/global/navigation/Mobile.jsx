import React from 'react';
import Welcome from './Welcome';
import Hamburger from './Hamburger';
import Route from './Route';

class Mobile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
        this.openMenu = this.openMenu.bind(this);
    }

    openMenu() {
        this.setState((previousState) => {
            return { toggle: !previousState.toggle };
        });
    }

    render() {
        return (
            <div>
                <Welcome/>
                <div onClick={ this.openMenu }>
                    <Hamburger/>
                </div>
                { this.state.toggle &&
                    <div className="w3-bar-block">
                        <Route route="/" name="Home" icon="home"/>
                        <Route route="/work" name="Work" icon="cogs"/>
                        <Route route="/contact" name="Contact" icon="commenting-o"/>
                    </div>
                }
            </div>
        );
    }
}

export default Mobile;
