import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Videos } from '.'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import ChannelCard from './ChannelCard'

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null)
  const [channelVids, setChannelVids] = useState([])
  const { id } = useParams()
  const channelId = channelDetail?.channelId
  const avatar = channelDetail?.avatar
  const title = channelDetail?.title
  const stats = channelDetail?.stats

  console.log(channelVids)

  const handleChannel = async () => {
    const response = await fetchFromAPI(`channel/details/?id=${id}`)
    setChannelDetail(response)
  }
  const handleChannelVids = async () => {
    const response = await fetchFromAPI(`channel/videos/?id=${id}`)
    setChannelVids(response.contents)
  }

  useEffect(() => {
    handleChannel()
    handleChannelVids()
  }, [id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%)',
            height: '300px',
            zIndex: 10,
          }}
        />
        <ChannelCard
          channelDetail={{ channelId, avatar, title, stats }}
          marginTop="-110px"
        />
      </Box>
      <Box width="80%" margin="auto">
        <Videos videos={channelVids} />
      </Box>
    </Box>
  )
}

export default ChannelDetail
