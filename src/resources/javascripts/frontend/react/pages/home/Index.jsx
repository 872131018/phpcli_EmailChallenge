import React from 'react';
import Dropzone from 'dropzone';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Dropzone.autoDiscover = false;
        var dz = new Dropzone('.dropzone');
        dz.on('success', function(file, response) {
            console.log(response)
        });
    }

    render() {
        return (
            <div>
                <div className="w3-sidebar w3-third">
                    <div className="bgimg"></div>
                </div>
                <div style={{ marginLeft: '33%' }}>
                    <header className="w3-center">
                        <p>Upload a file to see its data.</p>
                        <form className="dropzone" method="POST" action="/index.php"/>
                    </header>
                </div>
            </div>
        );
    }
}

export default Page;
