import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import DrawerComponent from '../components/DrawerComponent';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
});

class AppBarComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleDrawerOpen = () => {
        console.log("Open Drawer");
        this.setState({ open: true });
    }

    handleDrawerClose = () => {
        console.log("Close Drawer");
        this.setState({ open: false });
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            className={clsx(classes.menuButton, this.state.open && classes.hide)}
                            onClick={this.handleDrawerOpen}
                        >

                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>News</Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
                <DrawerComponent 
                    {...this.props} 
                    handleCloseEvent={this.handleDrawerClose}
                    handleOpenEvent={this.handleDrawerOpen}
                    openState={this.state.open}
                ></DrawerComponent>
            </div>
        );
    }
}
export default withStyles(styles)(AppBarComponent);