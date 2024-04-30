/* eslint-disable react/prop-types */
import React from 'react'
import './VideoPlayer.css'
import video from '../../assets/edusity_assets/college-video.mp4'


const VideoPlayer = ({playState}) => {
  return (
    <div className={`video-player ${playState?'':'hide'}`}>
        <video src={video} autoPlay muted controls></video>
    </div>
  )
}

export default VideoPlayer