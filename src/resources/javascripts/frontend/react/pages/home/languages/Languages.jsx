import React from 'react';
import { connect } from 'react-redux';
import ProgressBar from './ProgressBar';

const props = (store) => {
    return {
        languages: store.LanguageStore.languages
    };
};

class Languages extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const proficiencies = this.props.languages.slice(0,3).map((language) => {
            return (
                <ProgressBar key={ language.id.toString() } language={ language }/>
            );
        });

        const interests = this.props.languages.slice(3,6).map((language) => {
            return (
                <ProgressBar key={ language.id.toString() } language={ language }/>
            );
        });


        return (
            <div className="w3-container w3-light-grey">
                <div className="w3-content w3-padding-32">
                    <div className="w3-section w3-center">
                        <div className="w3-half">
                            <h1>Proficiencies</h1>
                            { proficiencies }
                        </div>
                        <div className="w3-half">
                            <h1>Interests</h1>
                            { interests }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(props)(Languages);
