import React from 'react';

class Hero extends React.Component {
    constructor(props) {
        super(props);

        this.downloaded = this.downloaded.bind(this);
    }

    downloaded() {
        axios.post(`${ window.baseUrl }/analytic/store`, { page: 'Download' }).then(response => {
            //
        });
    }

    render() {
        return (
            <div className="w3-display-container parallaxHero">
                <div className="w3-display-right w3-padding w3-text-aqua">
                    <h1>John Huffman</h1>
                    <h3>Human : Colorado : Earth</h3>
                    <a className="w3-button w3-light-grey w3-opacity"
                        href="/images/JHuffmanResume.pdf"
                        download="JHuffmanResume.pdf"
                        onClick={ this.downloaded }>
                        <i className="fa fa-download w3-margin-right"/>Download Resume
                    </a>
                </div>
            </div>
        );
    }
}

export default Hero;
