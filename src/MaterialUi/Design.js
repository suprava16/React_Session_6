import React, { Component } from 'react'
import Button from '@mui/material/Button';
import { Grid ,Box} from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
export default class Design extends Component {
  render() {
    return (
      <div>
        {/* <Button variant="contained" fullWidth>LOGIN</Button>  */}
        {/* 
       <Grid container style={{border:"3px solid red"}}>
      <Grid item xs={12} md={6} lg={4} style={{border:"3px solid blue"}}>hello</Grid>
      <Grid item xs={12} md={6} lg={4} item style={{border:"3px solid blue"}}>
        bye
      </Grid>
       </Grid> */}

        <Grid container>
          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  Title
                </Typography>
                <Typography variant="body2">
                  Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          {/* 2nd card */}
          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  Title
                </Typography>
                <Typography variant="body2">
                  Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
          {/* 3rd card */}
          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  Title
                </Typography>
                <Typography variant="body2">
                  Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* 4th card */}
          <Grid item xs={12} md={6} lg={3}>
            <Card>
              <CardContent>
                <Typography color="text.secondary" gutterBottom>
                  Title
                </Typography>
                <Typography variant="body2">
                  Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">Learn More</Button>
              </CardActions>
            </Card>

          </Grid>

         <Grid container mt={5}>
         <Grid item xs={12} md={6} lg={4}>
         <Box boxShadow={3} fontSize={15} color="red" p={3}>
          Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information.
          </Box>
         </Grid>
         </Grid>
        </Grid>

      </div>
    )
  }
}
