import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBarComponent from '../components/AppBarComponent';
import DrawerComponent from '../components/AppBarComponent';

const styles = {};

class MainLayout extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={'root'}>
                <AppBarComponent {...this.props}></AppBarComponent>
                <DrawerComponent {...this.props}></DrawerComponent>
            </div>
        );
    }

}

export default (MainLayout);