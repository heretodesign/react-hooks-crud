import React, { useState } from 'react'

const AddUserForm = props => {

  const initialFormState = { id: null, name: '', username: '' }
  const [user, setUser] = useState(initialFormState)

  const handleInputChange = event => {
  const { name, value } = event.target

  setUser({ ...user, [name]: value })
  }

  return (
    <>
     <section className="section is-paddingless-horizontal">
        <div className="container grid is-large">
            <div className="firstsection">
                <div className="content" id="todoForm">
                  <form id="todo-form"   onSubmit={event => {
                      event.preventDefault()
                      if (!user.name || !user.username) return

                      props.addUser(user)
                      setUser(initialFormState)
                    }}>
                    <div className="columns">
                        <div className="column is-one-third">
                          <div className="field">
                            <div className="control">
                              <input className="input is-medium is-info" type="text" name="name" placeholder="Add Name" value={user.name} onChange={handleInputChange} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-one-third">
                          <div className="field">
                            <div className="control">
                              <input className="input is-medium is-info" type="text" name="username"  placeholder="Add Username" value={user.username} onChange={handleInputChange} />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="columns">
                        <div className="column is-one-third">
                          <div className="field">
                            <div className="control">
                              <button className="button is-medium is-info is-fullwidth" type="submit" value="Submit">Add New Profile</button>
                            </div>
                          </div>
                        </div>
                      </div>
                  </form>
                </div>
             </div>
        </div>
      </section>
    </>
  )
}

export default AddUserForm
