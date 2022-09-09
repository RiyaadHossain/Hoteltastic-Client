import { Button } from '@mui/material';
import React from 'react';
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

const VideoIcon = () => {
    return (
        <Button sx={{
            border: "2px solid #fff",
            borderRadius: "50%",
            "&:hover": {
                border: "4px solid #fff",
                borderRadius: "50%",
                // color:'red',
                padding: "15px",
                transition: "ease-out 0.8s",
                transform: "scale(1.2)",
            }
        }}>
            <PlayCircleOutlineIcon sx={{
                color:'#fff',
                fontSize:100,
                cursor:'pointer',
                "&:hover": {
                    // color:'red',
                    transition: "ease-out 0.8s",
                    transform: "scale(1.2)",
                }
            }}/>
        </Button>
    );
};

export default VideoIcon;