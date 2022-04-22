import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import TweetRow from "./TweetRow";
import moment from 'moment';




function TweetList() {

    function getTimeline() {
        console.log("heres timeline")
    }
    function getMentions() {
        console.log("heres timeline")
    }


    return (
        <React.Fragment>
            <Button
                onClick={getTimeline}
                variant="outlined"
                sx={{ my: 0.5, color: 'black' }}
            >
                Timeline
            </Button>
            <Button
                onClick={getMentions}
                variant="outlined"
                sx={{ my: 0.5, color: 'black' }}
            >
                @Mentions
            </Button>
            <Box
                sx={{
                    border: 1,
                    borderColor: 'primary.main'
                }}
            >
                <TweetRow
                    message="Testter"
                    timestamp={moment().toDate().toString()}
                    displayName="Vincent"
                />
                <TweetRow
                    message="Testter"
                    timestamp={moment().toDate().toString()}
                    displayName="Vincent"
                />
                <TweetRow
                    message="Testter"
                    timestamp={moment().toDate().toString()}
                    displayName="Vincent"
                />
                <TweetRow
                    message="Testter a sdfasd fasdf adsf asdfdsafsa d fdsaf sdf adsdf sadfasdf asdf asdfa dsf dsfdaf dfa dsfasdf asdfa dsfasdf dfa dsfadsf adfa dfadfa"
                    timestamp={moment().toDate().toString()}
                    displayName="Vincent"
                />
                <TweetRow
                    message="Testter"
                    timestamp={moment().toDate().toString()}
                    displayName="Vincent"
                />
            </Box>
        </React.Fragment>
    );
}

export default TweetList;