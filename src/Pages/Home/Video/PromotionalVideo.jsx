import { Box, Button } from '@mui/material';
import React from 'react';
import ReactPlayer from 'react-player'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import VideoIcon from './VideoIcon';

const PromotionalVideo = () => {
    return (
        <Box sx={{
            height:{
                xs:'300px',
                sm:'500px',
                md:'35rem'  
            },
            // background:'#000',
            width:'100%'
        }}>
        <ReactPlayer
            muted={false}
            controls={true}
            light={"https://www.redrockresort.com/wp-content/uploads/2020/04/RR-King-Bedroom-1080x675.jpg"} 
            playbackRate={1.4}
            fullscreen={true}
            playIcon={<VideoIcon/>}
            width='100%'
            height='100%'
            url='https://youtu.be/A-yYTkfrHR0' />
        </Box>
    );
};

export default PromotionalVideo;