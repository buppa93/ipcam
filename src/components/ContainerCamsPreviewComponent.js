import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CamPreviewComponent from './CamPreviewComponent';
import FooterComponent from './FooterComponent';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Route } from "react-router-dom";

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

class ContainerCamsPreviewComponent extends Component {

    render() {
        const { classes } = this.props;
        return (
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12} lg={4}>
                    <CamPreviewComponent camId={1} />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <CamPreviewComponent camId={2} />
                </Grid>
                <Grid item xs={12} lg={4}>
                    <CamPreviewComponent camId={3} />
                </Grid>
            </Grid>
        );
    }

}
export default withStyles(styles)(ContainerCamsPreviewComponent);