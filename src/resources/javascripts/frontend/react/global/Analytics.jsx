import React from 'react';

class Analytics extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.post('/analytic/store', { page: this.props.page }).then(response => {
            //
        });
    }

    render() {
        return (
            <div/>
        );
    }
}

export default Analytics;
