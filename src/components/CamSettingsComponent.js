import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class CamSettingsComponent extends Component {

    camSetting = null;

    constructor(props) {
        super(props);
        
        this.camSetting = {
            id: 1,
            name: 'Test cam name',
            description: 'This is a stupid, very stupid test for modelling an ipcam attributes',
            location: 'Garage',
        };
    }

    render() {
        return(
            <div className={'wrapper'}>
                <Card>
                    <CardContent>
                        Test Content
                    </CardContent>
                    <CardActions>
                        Test Actions
                    </CardActions>
                </Card>
            </div>
        )
    }
}
export default (CamSettingsComponent);