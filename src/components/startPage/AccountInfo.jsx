import { Box } from "@mui/system";
import React from "react";
import TweetRow from "./TweetRow";
import moment from 'moment';
import { Button, Grid, Paper, styled, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'center',
    margin: 15,
}));

function AccountInfo() {
    return (
        <React.Fragment>
            <Box>
                <Grid container direction="row" spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom component="div">
                            Your tweets {1}
                        </Typography>
                        <TweetRow
                            message="Mijn laatste tweet"
                            timestamp={moment().toDate().toString()}
                        />
                    </Grid>
                    <Grid item xs>
                        <Button
                            variant="outlined"
                            sx={{ my: 0.5, color: 'black' }}
                        >
                            Following: {0}
                        </Button>
                    </Grid>
                    <Grid item xs>
                        <Button
                            variant="outlined"
                            sx={{ my: 0.5, color: 'black' }}
                        >
                            Followers: {0}
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>
    );

}

export default AccountInfo;