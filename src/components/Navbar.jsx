import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'

const Navbar = () => {
  return (
    <Stack
      direction="row"
      p={2}
      alignItems="center"
      sx={{
        background: '#000',
        position: 'sticky',
        top: 0,
        justifyContent: 'space-between',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
        <img src={"/public/tcrown.png"} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  )
}

export default Navbar
