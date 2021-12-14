import React, {Component} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default class Layout extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{width:'100%', height:' 100%'}}>
                <Header />
                <div id="masterRenderContainer">
                    <div id="masterRenderTarget">
                        {this.props.children}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }

}