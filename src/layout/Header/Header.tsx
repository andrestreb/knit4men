import React from 'react'
import './Header.scss'

import { AppBar, Toolbar, Typography, List, ListItem, ListItemText } from '@material-ui/core'

import { NavLink } from 'react-router-dom'

const navLinks = [
  { title: 'Patterns', path: '/Patterns' },
  { title: 'About us', path: '/About' },
]

export default function Header() {

  return (
    <AppBar position="static" className="Header">
      <Toolbar>
        <div className="navbarDisplayFlex">
          <NavLink to="/" className="navLogo">
            <Typography variant="h5">
              Knit4Men
            </Typography>
          </NavLink>

          <List component="nav" aria-labelledby="main navigation" className="navDisplayFlex">
            {navLinks.map(({ title, path }) => (
              <NavLink to={path} key={title} className="linkText">
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </NavLink>
            ))}
          </List>
        </div>
      </Toolbar>
    </AppBar>
  )
}

interface IHeaderProps {
  // TODO
}

interface IHeaderState {
  isNavOpen: boolean
}

interface IHeaderSnapshot {
  // TODO
}