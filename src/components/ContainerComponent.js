import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CamPreviewComponent from './CamPreviewComponent';
import Grid from '@material-ui/core/Grid';

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
    },
});

class ContainerComponent extends Component {

    render() {
        const { classes } = this.props;
        return(
            <main className={classes.content}>
                <div className={classes.root}>
                    <div className={classes.appBarSpacer} />
                        <Container maxWidth="lg" className={classes.container}>
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
                        </Container>
                    </div>
            </main>
        );
    }

}
export default withStyles(styles)(ContainerComponent);