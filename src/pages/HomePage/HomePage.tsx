import React from 'react'
import './HomePage.scss'
import { Card, CardContent, CardMedia, CardActions, Button, Typography } from '@material-ui/core'

import { RouteComponentProps } from 'react-router-dom'

const TopCard = () => {
  return (
    <Card className="Card">
      <div className="CardDetails">
        <CardContent className="CardContent">
          <Typography component="h2" variant="h2">
            Welcome Knitter
          </Typography>
          <Typography component="h5" variant="h5" color="textSecondary">
            Start your Knit Padawan path now
          </Typography>
        </CardContent>
        <CardActions className="CardActions">
          <Button variant="contained" color="primary">Start journey</Button>
        </CardActions>
      </div>
      <CardMedia
        component="img"
        alt="knitting"
        height="250"
        className="CardMedia"
        image="https://cdn.shopify.com/s/files/1/0271/0203/articles/IMG_4994_edit_1400x.jpg?v=1552656727"
        title="knitting"
      />
    </Card>
  )
}

export default function HomePage() {

  return (
    <div className="HomePage">
      <TopCard />
    </div>
  )
}

interface IHomePageProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface IHomePageState {
  name: string
}

interface IHomePageSnapshot {
  // TODO
}