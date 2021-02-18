import React, { useState, useEffect } from 'react'
import './PatternsPage.scss'
import { Card, CardMedia, CardContent, Box, Typography, Chip, TextField, Grid, InputAdornment, MenuItem } from '@material-ui/core'
import Search from '@material-ui/icons/Search';
import { RouteComponentProps, NavLink } from 'react-router-dom'
import { PATTERNS } from '../../shared/patterns'

const category = [
  {
    value: 'hat',
    label: 'hat',
  },
  {
    value: 'jumper',
    label: 'jumper',
  },
]

const SearchPattern = () => {
  return (

    <form noValidate autoComplete="on">
      <Grid container spacing={3}>
        <Grid item spacing={3}>
          <TextField
            id="outlined-basic"
            label="Search a pattern"
            variant="outlined"
            size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item spacing={3}>
          <TextField
            id="Category"
            select
            label="Category"
            value={category}
            variant="outlined"
            size="small"
            className="Filter"
          >
            {category.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item spacing={3}>
          <TextField
            id="Complexity"
            select
            label="Complexity"
            value={category}
            variant="outlined"
            size="small"
            className="Filter"
          >
            {category.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </form>
  )
}

export default function PatternsPage() {
  const [patterns, setPatterns] = useState<PatternType[]>([]);

  useEffect(() => {
    return setPatterns(PATTERNS)
  }, [])

  const patternsList = patterns.map((pattern: PatternType) => {
    return (
      <Grid key={pattern.id} item xl={2} lg={3} md={3} sm={6} xs={12}>
        <NavLink to={`/Patterns/${pattern.id}`} className="navLogo">
          <Card className="CardContainer">
            <CardMedia
              component="img"
              alt={pattern.name}
              className="CardImage"
              image={pattern.image}
              title={pattern.name}
            />
            <CardContent className="CardContent">
              <Typography className="CardTitle" component="h4">
                {pattern.name}
              </Typography>
              <Box component="div" textOverflow="ellipsis" justifyContent="flex-start">
                <Typography className="CardDescription" component="h5" color="textSecondary">
                  {pattern.description}
                </Typography>
              </Box>
            </CardContent>
            <Box className="CardComplexity" justifyContent="center">
              Complexity: <Chip color="primary" label={pattern.complexity} className="CardComplexity" /> - <Chip color="secondary" label={pattern.category} size="small" className="CardCategory" />
            </Box>
          </Card>
        </NavLink>
      </Grid>
    )
  }
  )

  return (
    <div className="PatternsPage">
      <Grid container className="GridContainer" spacing={3}>
        <Grid item xs={12}>
          <Box component="div" display="block" p={1} m={1} bgcolor="background.paper">
            <SearchPattern />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={3}>
            {patternsList}
          </Grid>
        </Grid>
      </Grid>
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