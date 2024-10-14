import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import { Videos } from './'

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()
  const fetchVideos = async () => {
    const { contents } = await fetchFromAPI(`search/?q=${searchTerm}`)
    setVideos(contents)
  }
  useEffect(() => {
    fetchVideos()
  }, [searchTerm])
  return (
    <Box p={2} sx={{ overflowY: 'auto', flex: 2 }} width="80%" margin="auto">
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: '#fff' }}>
        Search Results For:{' '}
        <span style={{ color: '#2eb14c' }}>{searchTerm}</span> videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed
