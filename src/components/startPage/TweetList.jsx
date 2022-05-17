import { Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import TweetRow from "./TweetRow";
import moment from 'moment';
import TweetService from "../../services/TweetService";
import { useQuery, useQueryClient } from "react-query";




function TweetList() {
    const { data: Tweets, refetch } = useQuery('get', async () => {
        return await TweetService.getTimeLineTweets();
    });


    const getTimeline = () => {
        refetch();
    };

    function getMentions() {
        console.log("heres mentions")
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
            <Box sx={{ border: 1, borderColor: 'primary.main' }}>
                {Tweets?.map((row) => (
                    <TweetRow key={row} message={row.content} timestamp={row.publishDate} displayName="Vincent" />
                ))}
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