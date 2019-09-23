import React, { Component } from 'react';
import AppBarComponent from '../components/AppBarComponent';
import ContainerComponent from '../components/ContainerComponent';

class MainLayout extends Component {

    render() {
        return (
            <div className={'root'}>
                <AppBarComponent {...this.props}></AppBarComponent>
                <ContainerComponent></ContainerComponent>
            </div>
        );
    }
}

export default (MainLayout);