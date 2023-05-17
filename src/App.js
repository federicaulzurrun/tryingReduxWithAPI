import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import UserList from './components/userList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>User List</h1>
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
