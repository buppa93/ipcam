import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    root: {
        position: 'fixed',
        bottom: '0',
        display: 'flex',
        width: '80%',
    },
    actionsWrapper: { 
        width: '100%',
        float: 'right',
        minHeight: '3em'
    },
    infoWrapper: { 
        width: '100%',
        minHeight: '2em'
    },
    fab: {
        float: 'right',
        display: 'inline-flex',
        margin: theme.spacing(1),
    }
});

class FooterComponent extends Component {

    render() {
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <div className={classes.actionsWrapper}>
                    <Fab color="primary" aria-label="add" className={classes.fab}>
                        <AddIcon />
                    </Fab>
                </div>
            </div>
        );
    }

}
export default withStyles(styles)(FooterComponent);