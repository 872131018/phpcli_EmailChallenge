import React from 'react';
import Content from './Content';
import Languages from './languages/Languages';
import Tools from './tools/Tools';
import Analytics from '../../global/Analytics';

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Content/>
                <Languages/>
                <Tools/>
                <Analytics page="Home"/>
            </div>
        );
    }
}

export default Page;
