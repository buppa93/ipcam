import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const classes = {
  card: {
    maxWidth: 345,
  },

  cardActions: {
    textAlign: 'right',
    display: 'block',
  }
};

class CamPreviewComponent extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      camId: props.camId,
    }
  }

  render() {
    
    return (
      <Card className={this.props.classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="140"
            image="/example-img/example-1.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              IpCam Name 
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={this.props.classes.cardActions}>
          <Button color="primary" aria-label="play" className={this.props.classes.fab} onClick={onClickEditHandler}>
            <Icon>edit</Icon>
          </Button>
          <Button color="primary" aria-label="play" className={this.props.classes.fab} onClick={onClickPlayHandler}>
            <Icon>play_arrow</Icon>
          </Button>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(classes)(CamPreviewComponent)

function onClickPlayHandler(e) {
  console.log("onClickPlayHandler: " + e.type);
  //this.props.history.push('camPlayer/' + this.camId)
}

function onClickEditHandler(e) {
  console.log("onClickEditHandler: " + e.type);
  //this.props.history.push('camPlayer/' + this.camId)
}
