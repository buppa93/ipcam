import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ContainerCamsPreviewComponent from './ContainerCamsPreviewComponent';
import CamViewComponent from './CamViewComponent';
import FooterComponent from './FooterComponent';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const styles = theme => ({
    root: {
        display: 'flex',
    },
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        maxWidth: '1140px',
        margin: 'auto',
    },
});

class ContainerComponent extends Component {

    render() {
        const { classes } = this.props;
        return (
            <main className={classes.content}>
                <div className={classes.root}>
                    <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                        <Route
                            exact path='/'
                            render={props => <ContainerCamsPreviewComponent {...this.props} />}
                        />
                        <Route
                            path='/cam/:id'
                            render={props => <CamViewComponent {...this.props} />}
                        />
                        <FooterComponent></FooterComponent>
                    </Container>
                </div>
            </main>
        );
    }

}
export default withStyles(styles)(ContainerComponent);