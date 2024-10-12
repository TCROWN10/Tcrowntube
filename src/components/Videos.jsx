import { Box, Stack } from '@mui/material'
import React from 'react'
import { VideoCard, ChannelCard } from './'

const Videos = ({ videos, direction }) => {
  return (
    <Stack
      direction={direction || 'row'}
      flexWrap="wrap"
      justifyContent="start"
      gap={3}
    >
      {videos.map((item, idx) => {
        const channelId = item.channel?.channelId
        const avatar = item.channel?.avatar
        const title = item.channel?.title
        const stats = item.channel?.stats
        return (
          <Box key={idx}>
            {item.video?.videoId && <VideoCard video={item} />}
            {item.channel && (
              <ChannelCard
                channelDetail={{ channelId, avatar, title, stats }}
              />
            )}
            {item.playlist && null}
          </Box>
        )
      })}
    </Stack>
  )
}

export default Videos
