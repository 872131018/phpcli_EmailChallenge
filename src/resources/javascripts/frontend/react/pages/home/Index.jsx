import React from 'react';
import { connect } from 'react-redux';
import Dropzone from 'dropzone';
import Email from './Email';

const props = (store) => {
    return {
        emails: store.EmailStore.emails
    };
};

class Page extends React.Component {
    constructor(props) {
        super(props);

        this.clear = this.clear.bind(this);
    }

    componentDidMount() {
        Dropzone.autoDiscover = false;
        var dz = new Dropzone('.dropzone');
        dz.on('sending', (request, data) => {
            store.dispatch({ type: 'SERVICE_LOADING' });
        });
        dz.on('success', (file, response) => {
            console.log(response)
            store.dispatch({ type: 'SERVICE_FINISHED' });
            store.dispatch({ type: 'SET_EMAIL', data: JSON.parse(response) });
        });
    }

    clear() {
        store.dispatch({ type: 'CLEAR_EMAILS' });
    }

    render() {
        const emails = this.props.emails.map((email) => {
            return <Email key={ email.name } email={ email }/>;
        });

        return (
            <div>
                <div className="w3-sidebar w3-third">
                    <div className="bgimg"></div>
                </div>
                <div style={{ marginLeft: '33.3%' }}>
                    <header className="w3-center">
                        <p>Upload a file to see its data.</p>
                        <button className="w3-button w3-red"
                            onClick={ this.clear }>Clear
                        </button>
                        <form className="dropzone" method="POST" action="/index.php"/>
                    </header>
                    { emails }
                </div>
            </div>
        );
    }
}

export default connect(props)(Page);
