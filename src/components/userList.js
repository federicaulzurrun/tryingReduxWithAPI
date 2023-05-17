import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/store/users/usersSlice';

const UserList = () => {
  const dispatch = useDispatch();
  const [users, setUsers] = useState([]);
  const { isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers())
      .then((response) => {
        setUsers(response.data.results); 
      })
      .catch((error) => {
        console.log(error); 
      });
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <div key={user.id}>
          <p>Name: {user.username}</p>
          <p>Email: {user.email}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default UserList;
