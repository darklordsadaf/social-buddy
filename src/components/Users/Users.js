import React, { useState, useEffect } from 'react';
import AllUsersData from '../AllUsersData/AllUsersData';
import Pagination from '../Paginantion/Pagination';

const Users = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [q, setQ] = useState("");
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(3);


    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                setAllUsers(data);
                setLoading(false);
            })
    }, [])

    function search(rows) {
        return rows.filter((row) => row.name.toLowerCase().indexOf(q.toLowerCase()) > -1
            || row.email.toLowerCase().indexOf(q.toLowerCase()) > -1
            || row.website.toLowerCase().indexOf(q.toLowerCase()) > -1);
    }


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentUsers = allUsers.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => {
        setCurrentPage(pageNumber)
        localStorage.setItem('pageNumber', JSON.stringify(pageNumber));
    };

    function MyComponent() {
        useEffect(() => {
            setCurrentPage(JSON.parse(localStorage.getItem('pageNumber')) || {});
        }, [])
    }

    function MyComponent2() {
        useEffect(() => {
            setLoading(true);
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(res => res.json())
                .then(data => {
                    setAllUsers(data);
                    setLoading(false);
                })
        }, [])
    }


    if (localStorage.getItem('pageNumber')) {
        MyComponent();
    }
    else {
        MyComponent2()
    }



    return (
        <div className="container">

            <div className="d-flex justify-content-end">
                <div className=" my-4 justify-content-end">

                    <input className="mr-3" style={{ height: '40px', width: '250px' }} value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search..." />


                </div>
            </div>
            {
                q === '' && <AllUsersData
                    loading={loading} user={currentUsers}>
                </AllUsersData>
            }

            {
                q && <AllUsersData user={search(allUsers)}></AllUsersData>
            }

            {
                q === '' && <div className="d-flex justify-content-center">
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={allUsers.length}
                        paginate={paginate}
                    />
                </div>
            }

        </div>
    );
};

export default Users;