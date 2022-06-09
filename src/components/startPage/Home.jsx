import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import CreateTweet from './CreateTweet';
import TweetList from './TweetList';
import AccountInfo from './AccountInfo';
import TrendList from './TrendList';
import UserService from "../../services/UserService";
import { useQuery, useQueryClient } from "react-query";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    margin: 15,
    color: theme.palette.text.secondary,
}));


function Home() {

    const { data: user, refetch } = useQuery('get', async () => {
        return await UserService.getUserTest();
    });

    return (
        <React.Fragment>
            <Box sx={{ width: '100%' }}>
                <Grid container direction="row">
                    <Grid item container direction="column" xs={6}>
                        <Grid item>
                            <Item>
                                <CreateTweet />
                            </Item>
                        </Grid>
                        <Grid item>
                            <Item>
                                <TweetList />
                            </Item>
                        </Grid>
                    </Grid>
                    <Grid item container direction="column" xs={6}>
                        <Grid item>
                            <Item>
                                <AccountInfo />
                            </Item>
                        </Grid>
                        <Grid item>
                            <Item>
                                <TrendList />
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </React.Fragment>


    );
}



export default Home;