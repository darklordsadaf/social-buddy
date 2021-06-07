import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ProfilePost from '../ProfilePost/ProfilePost';

const Profile = () => {
    const [posts, setPosts] = useState([]);


    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data, e) => {
        const newPost = {};
        newPost.title = data.title;
        newPost.body = data.body;
        newPost.id = posts.length + 100;
        newPost.userId = 2;
        const updatePost = [newPost, ...posts];
        setPosts(updatePost);
        localStorage.setItem('profile', JSON.stringify(updatePost));
        e.target.reset();
    };

    const handleDelete = (id) => {

        const remainingPosts = posts.filter(pd => pd.id !== id);
        setPosts(remainingPosts);
        localStorage.setItem('profile', JSON.stringify(remainingPosts));
    }


    const handleUpdate = (data) => {
        const remainingPosts = posts.filter(pd => pd.id !== data.id);
        const newPost = {};
        newPost.title = data.title;
        newPost.body = data.body;
        newPost.id = data.id;
        newPost.userId = data.userId;
        window.scrollTo(0, 0);
        const updatePost = [newPost, ...remainingPosts];
        setPosts(updatePost);
        localStorage.setItem('profile', JSON.stringify(updatePost));

    }
    function MyComponent() {
        useEffect(() => {
            setPosts(JSON.parse(localStorage.getItem('profile')) || {});
        }, [])
    }

    function MyComponent2() {
        useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(data => {
                    const user = data.filter(pd => pd.userId === 2);
                    setPosts(user);
                })
        }, [])
    }
    if (localStorage.getItem('profile')) {
        MyComponent();
    }
    else {
        MyComponent2()
    }
    return (
        <div className="container">

            <div >
                <div>
                    <div className="text-center mt-4 text-primary"><h3><b>Share a post</b></h3></div>
                    <div className="d-flex justify-content-center mt-4">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input style={{ height: '60px', width: '350px' }} placeholder="Title" required {...register("title")} />
                            <br />
                            <br />
                            {/* include validation with required or other standard HTML validation rules */}
                            <input placeholder="Description..." style={{ height: '200px', paddingBottom: '150px', width: '350px' }} required {...register("body")} />
                            {/* errors will return when field validation fails  */}
                            {errors.exampleRequired && <p>This field is required</p>}
                            <br />
                            <br />
                            <div className="text-center">
                                <Button className="px-5 btn-dark" variant="primary " type="submit">
                                    <b>Post</b>
                                </Button>
                            </div>

                        </form>
                    </div>
                </div>

                <div className="d-flex justify-content-center" ><Grid spacing={1}>
                    <Grid item xs={12} spacing={2}>
                        {
                            posts.map(post => <ProfilePost handleUpdate={handleUpdate} handleDelete={handleDelete} key={post.id} post={post}></ProfilePost>)
                        }

                    </Grid>
                </Grid></div>

            </div>
        </div>
    );
};

export default Profile;