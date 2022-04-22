import React, { useState } from "react";
import { Typography, Button } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TweetService from "../../services/TweetService";
import { Tweet } from "../../models/Tweet";
import moment from 'moment';
import Moment from "react-moment";
import { useMutation } from "react-query";
import { Box } from "@mui/system";

const defaultValues = {
    Id: "1",
    Content: "",
    Likes: 0,
    PublishDate: moment().toDate(),
    userId: "1",
};

function CreateTweet() {
    const [formValues, setFormValues] = useState(defaultValues)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const submitMutation = useMutation((props) =>
        TweetService.postTweet(props)(), {
        onSuccess: (data) => {
        },
    })

    return (
        <React.Fragment>
            <Typography variant="h4" gutterBottom component="div">
                What's happening?
            </Typography>
            <TextareaAutosize
                variant="outlined"
                label="tweet"
                name="Content"
                maxLength={140}
                defaultValue={formValues.Content}
                onChange={handleInputChange}
                style={{ minWidth: 500, maxWidth: 500, minHeight: 50, maxHeight: 70, borderColor: "#E71234" }}
            />
            <Box>
                <Button
                    onClick={() => submitMutation.mutate(formValues)}
                    variant="outlined"
                    sx={{ my: 0.5, color: 'black' }}
                >
                    Submit
                </Button>
            </Box>



        </React.Fragment>
    );
}

export default CreateTweet;