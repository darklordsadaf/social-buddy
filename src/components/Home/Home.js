import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Post from '../Post/Post';
import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '30px'
    },
}));
const Home = () => {
    const classes = useStyles();
    const [allPosts, setAllPosts] = useState([]);
    const [posts, setPosts] = useState([]);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(10);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                setAllPosts(data);
                setPosts(data.slice(0, 10));
                setLoggedInUser(data.slice(1, 2));
            })
    }, [])

    let count3 = count1;
    let count4 = count2;
    const handleChange = () => {

        window.scrollTo(0, 0);

        count3 = count3 + 10;
        setCount1(count3);

        count4 = count4 + 10;
        setCount2(count4);
        setPosts(allPosts.slice(count3, count4));
    }

    return (
        <div className="d-flex justify-content-center">
            <Grid spacing={1}>
                <Grid item xs={12} spacing={2}>
                    {
                        posts.map(post => <Post key={post.id} post={post}></Post>)
                    }
                    {count2 === 100 ? <div></div>
                        :
                        <div className="text-center p-4"> <button className="btn btn-primary" onClick={handleChange}><b>load more</b></button></div>
                    }
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;