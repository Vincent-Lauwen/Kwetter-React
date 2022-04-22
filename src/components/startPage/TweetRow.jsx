import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";


function TweetRow(props) {
    const message = props.message ? props.message : "no message";
    const timestamp = props.timestamp ? props.timestamp : "no date";
    const displayName = props.displayName ? props.displayName : "";

    return (
        <React.Fragment>
            <Box margin={0.5}>
                <Typography textAlign="left" fontSize={13} fontWeight={800}>{displayName}</Typography>
                <Box textAlign="left">
                    {message}
                </Box>
                <Typography textAlign="left" fontSize={10}>{timestamp}</Typography>
            </Box>
        </React.Fragment >
    );
}

export default TweetRow;