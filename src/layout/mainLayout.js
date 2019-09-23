import React, { Component } from 'react';
import AppBarComponent from '../components/AppBarComponent';

class MainLayout extends Component {

    render() {
        return (
            <div className={'root'}>
                <AppBarComponent {...this.props}></AppBarComponent>
                
            </div>
        );
    }

}

export default (MainLayout);