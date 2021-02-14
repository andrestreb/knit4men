import React, { useState, useEffect } from 'react'
import './PatternsPage.scss'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Container, Card, CardMedia, CardContent, Box, Typography, Chip } from '@material-ui/core'
import { RouteComponentProps } from 'react-router-dom'
import { PATTERNS } from '../../shared/patterns'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: 275,
      minWidth: 200,
      maxHeight: 550,
      margin: 10,

    },
    media: {
      top: 0,
      maxHeight: '200px',
    },
    cardContainer: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    cardTitle: {
      fontSize: 18,
    },
    cardDescription: {
      fontSize: 14,
    },
    cardComplexity: {
      marginLeft: '12px',
      marginBottom: '6px',
    },
  }),
);


export default function PatternsPage() {
  const classes = useStyles();
  const [patterns, setPatterns] = useState<PatternType[]>([]);

  useEffect(() => {
    return setPatterns(PATTERNS)
  }, [])

  const patternsList = patterns.map((pattern: PatternType) => {
    return (
      <Card className={classes.root} key={pattern.id}>
        <CardMedia
          component="img"
          alt={pattern.name}
          className={classes.media}
          image={pattern.image}
          title={pattern.name}
        />
        <CardContent className="CardContent">
          <Typography className={classes.cardTitle} component="h4">
            {pattern.name}
          </Typography>
          <Typography className={classes.cardDescription} component="h5" color="textSecondary">
            {pattern.description}
          </Typography>
        </CardContent>
        <Box className={classes.cardComplexity}>
          Complexity: <Chip color="primary" label={pattern.complexity} size="small" /> - <Chip color="secondary" label={pattern.category} size="small" />
        </Box>
      </Card>
    )
  }
  )

  return (
    <div className="PatternsPage">
      <Container className={classes.cardContainer}>
        {patternsList}
      </Container>
    </div>
  )
}

interface IPatternsPageProps extends RouteComponentProps<{ name: string }> {
  // TODO
}

interface IPatternsPageState {
  name: string
}

interface PatternType {
  id: number
  name: string
  image: string
  description: string
  category: string
  complexity: number
}

interface IPatternsPageSnapshot {
  // TODO
}