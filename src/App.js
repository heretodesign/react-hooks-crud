import React, { useState } from 'react'
import './App.scss';
import axios from 'axios'
import { Button, table, thead, tbody, columns, column} from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import Nav from './components/layouts/Nav'
import Footer from './components/layouts/Footer'
import UserTable from './components/tables/UserTable'
import AddUserForm from './components/forms/AddUserForm'


const App = () => {
  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }



  return (
    <div className="App">
      <Nav />
      <div className="container">
        <div className="notification">
          <div className="columns">
            <div className="column is-two-fifths">
              <h2 className="title is-4">Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
            <div className="column is-three-fifths">
              <h2 className="title is-4">View User</h2>
              <UserTable users={users} deleteUser={deleteUser} />
            </div>
          </div>
        </div>
        </div>
      <Footer />
    </div>
  );
}

export default App;
