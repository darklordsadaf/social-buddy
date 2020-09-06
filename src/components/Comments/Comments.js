import React from 'react';
import { ListItem, Avatar, ListItemAvatar, ListItemText, Typography, Divider } from "@material-ui/core";

const Comments = (props) => {
    const { name, id, email, body } = props.comment;
    return (
        <>
            <ListItem alignItems="flex-start" key={id}>
                <ListItemAvatar>
                    <Avatar src={`https://randomuser.me/api/portraits/women/${id}.jpg`} alt="" />
                </ListItemAvatar>
                <ListItemText
                    primary={name}
                    secondary={
                        <>
                            <Typography component="span" variant="body2" color="textPrimary">
                                {email}
                            </Typography>
                            {` — ${body}`}
                        </>
                    }
                ></ListItemText>
            </ListItem>
            <Divider variant="inset" />
        </>
    );
};

export default Comments;