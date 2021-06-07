import React from 'react';
import { Link } from 'react-router-dom';

const AllUsersData = ({ user, loading }) => {

    if (loading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            <table className="table table-borderless">
                <thead style={{ background: 'salmon', }}>
                    <tr>
                        <th className="text-black" scope="col">Sr No.</th>
                        <th className="text-black" scope="col">Name</th>
                        <th className="text-black" scope="col">Email</th>
                        <th className="text-black" scope="col">Website</th>

                    </tr>
                </thead>


                <tbody >

                    {
                        user.map((user) =>

                            <tr key={user.id} style={{ background: 'white' }}>
                                <td>{user.id}</td>
                                <td><Link onClick={() => localStorage.setItem('userId', JSON.stringify(user.id))} to='/userspost'  >{user.name}</Link></td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>

                            </tr>
                        )
                    }

                </tbody>

            </table>
        </div>
    );
};

export default AllUsersData;