import React from 'react';
import { connect } from 'react-redux';
import Input from './Input';
import Checkbox from './Checkbox';

const props = (store) => {
    return {
        name: store.FormStore.name,
        email: store.FormStore.email,
        message: store.FormStore.message,
        likes: store.FormStore.likes
    };
};

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        };
        this.submit = this.submit.bind(this);
    }

    submit() {
        axios.post(`${ window.baseUrl }/inquiry`, store.getState().FormStore).then(response => {
            this.setState((previousState) => {
                return { toggle: !previousState.toggle };
            });
        });
    }

    render() {
        return (
            <div>
                { !this.state.toggle ?
                    <div>
                        <Input label="Name"
                            value={ this.props.name }/>
                        <Input label="Email"
                            value={ this.props.email }/>
                        <Input label="Message"
                            value={ this.props.message }/>
                        <Checkbox
                            checked={ this.props.likes }/>
                        <button className="w3-button w3-right w3-grey"
                            onClick={ this.submit }>Submit
                        </button>
                    </div> :
                    <div>Thanks for leaving a message, I'll be in touch.</div>
                }
            </div>
        );
    }
}

export default connect(props)(Form);
