import { Box } from '@mui/material';
import React from 'react';
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import { Time, Seek, Volume, Captions, PlayPause, Fullscreen, Overlay, apiHelpers } from 'react-html5video'

const PromotionalVideo = () => {
    return (
        <Box sx={{
            height:'30rem',
            background:'#000',
            width:'100%'
        }}>
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/fN4f1CZ4GX8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        {/* <Video
            autoPlay loop muted
            controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
            // poster="http://azim.commonsupport.com/Realshed/assets/images/background/video-1.jpg"
            onCanPlayThrough={() => {
                // Do stuff
            }}>
            <source src="https://youtu.be/q-Bz8FKPQVI" type="video/mp4" />
            <track label="English" kind="subtitles" srcLang="en" src="https://youtu.be/q-Bz8FKPQVI" default />
        </Video>        */}
        </Box>
    );
};

export default PromotionalVideo;