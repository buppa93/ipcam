import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { CardHeader } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';


class CamViewComponent extends Component {

  data = [];
  camInfo = null;

  constructor(props) {
    super(props);
    /* This is only for test */
    this.data = [
      {
        camId: 1,
        src: '/media/example/video-example.mp4',
        title: 'Example Video',
        createdAt: 1569572460,
      }
    ];

    this.camInfo = {
      camId: 1,
      camName: 'Test Ipcam',
      camDescription: 'This is an example of ipcam video flow',
      camLocation: 'Parking area',
    }
  }

  componentDidMount() {
    //data = fetchIpcamMeta(camId)



  }

  render() {
    console.log(this.data);
    return (
      <div className={'wrapper'}>
        <div>
          <Typography gutterBottom variant="h5" component="h2">{this.camInfo.camName}</Typography>
        </div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={10}
        >
          <Grid item container xs={12} lg={4} md={4}>
            <Card className={'classes.card'}>
              <CardHeader
                style={{ textAlign: 'left' }}
                avatar={
                  <Avatar aria-label="recipe" className={'classes.avatar'}>
                    TI
                  </Avatar>
                }
                title="Ipcam Info"
              />
              <CardContent style={{ textAlign: 'left' }}>
                <Typography gutterBottom variant="h5" component="h5">Descritption</Typography>
                <Typography gutterBottom variant="p" component="p">{this.camInfo.camDescription}</Typography>
                <Typography gutterBottom variant="h5" component="h5">Location</Typography>
                <Typography gutterBottom variant="p" component="p">{this.camInfo.camLocation}</Typography>
              </CardContent>
            </Card>

          </Grid>
          <Grid item container xs={12} lg={8} md={8}>
            <video width="100%" height="auto" controls>
              <source src={this.data[0].src} type="video/mp4"></source>
            </video>
          </Grid>
        </Grid>

      </div>
    );
  }
}

export default (CamViewComponent);
