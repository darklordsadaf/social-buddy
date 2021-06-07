import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});
const Post = (props) => {
    const classes = useStyles();
    const { title, body, id } = props.post;
    const postStyle = {
        border: '1px solid white',
        margin: '20px 20px 20px 50px',
        padding: '20px',
        borderRadius: '20px',
        width: '400px',
        height: '290px',
        alignItems: 'center',
        boxShadow: '10px 10px 50px gray'


    }
    if (props.loading) {
        return <h2>Loading...</h2>;
    }
    return (

        <div >


            <Card style={postStyle} className={classes.root}>
                <CardContent>
                    <Typography variant="h6" component="h2">
                        {title}
                    </Typography>

                    <Typography variant="body2" component="p">
                        {body.slice(0, 100)}...
                    </Typography>

                </CardContent>
                <CardActions>
                    <Link style={{ textDecoration: "none" }} to={`/post/${id}`}>
                        <Button style={{ color: "#4051B5", backgroundColor: "salmon" }} size="small"><strong>See More</strong></Button>
                    </Link>
                </CardActions>
            </Card>
        </div>
    );
};

export default Post;