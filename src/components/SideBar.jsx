import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: 'auto',
        height: { sx: 'auto', md: '95%' },
        flexDirection: { md: 'column' },
      }}
    >
      {categories.map(({ name, icon }) => {
        return (
          <button
            className="category-btn"
            onClick={() => setSelectedCategory(name)}
            style={{
              background: name === selectedCategory && '#2eb14c',
              color: '#fff',
            }}
            key={name}
          >
            <span
              style={{
                color: name === selectedCategory ? '#fff' : '#2eb14c',
                marginRight: '15px',
              }}
            >
              {icon}
            </span>
            <span
              style={{
                opacity: name === selectedCategory ? '1' : '0.8',
              }}
            >
              {name}
            </span>
          </button>
        )
      })}
    </Stack>
  )
}

export default SideBar
