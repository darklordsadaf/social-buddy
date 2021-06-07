import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Pagination from '../Paginantion/Pagination';
import Post from '../Post/Post';

const UsersPost = () => {

    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState({});
    const [company, setCompany] = useState({});
    const [address, setAddress] = useState({});
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(2);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => {
                const userPost = data.filter(pd => pd.userId === (JSON.parse(localStorage.getItem('userId'))));
                setPosts(userPost);
                setLoading(false);
            })
    }, [])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                const person = data.find(pd => pd.id === (JSON.parse(localStorage.getItem('userId'))));
                setUser(person);
                setCompany(person.company);
                setAddress(person.address);
            })
    }, [])
    console.log(company);


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    // console.log(currentPosts);

    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
    };
    return (
        <div className="container">
            <div className=" mt-4 d-flex justify-content-center">
                <div style={{ border: '1px solid lightGray', padding: '30px' }}>
                    <h4>Name: <span style={{ color: 'salmon' }}>{user.name}</span></h4>
                    <h4>Email: <span style={{ color: 'salmon' }}>{user.email}</span></h4>
                    <h4>Phone: <span style={{ color: 'salmon' }}>{user.phone}</span></h4>
                    <h4>Address: <span style={{ color: 'salmon' }}>{address.suite}, {address.street}, {address.city}-{address.zipcode}</span></h4>
                    <h4>Website: <span style={{ color: 'salmon' }}>{user.website}</span></h4>
                    <h4>Company Name: <span style={{ color: 'salmon' }}>{company.name}</span></h4>
                    <h4>Company Catchphrase: <span style={{ color: 'salmon' }}>{company.catchPhrase}</span></h4>
                </div>
            </div>
            <div className="text-center my-4">
                <h3>{user.name}'s Post</h3>
            </div>
            <div className="d-flex justify-content-center">

                <Grid spacing={1}>
                    <Grid item xs={12} spacing={2}>
                        {
                            currentPosts.map(post => <Post loading={loading} key={post.id} post={post}></Post>)
                        }
                        {/* {count2 === 100 ? <div></div>
                        :
                        <div className="text-center p-4"> <button className="btn btn-primary" onClick={handleChange}><b>load more</b></button></div>
                    } */}
                    </Grid>
                </Grid>
            </div>
            <div className="d-flex justify-content-center">
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
};

export default UsersPost;