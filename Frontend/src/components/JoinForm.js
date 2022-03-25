import React from "react";

const JoinForm = (props) => {
  const handleSubmit = (e) => {
    props.addUser(e);
  };
  const newUser = props.newUser;

  return (
    <div>
      <h1 className="bodytitle">Join our newsletter for deals on airfare, lodging, and tickets!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newUser.firstName}
          onChange={props.handleChange}
          name={"firstName"}
          placeholder={"First Name"}
        />
        <input
          type="text"
          value={newUser.lastName}
          onChange={props.handleChange}
          name={"lastName"}
          placeholder={"Last Name"}
        />
        <input
          type="text"
          value={newUser.email}
          onChange={props.handleChange}
          name={"email"}
          placeholder={"Email"}
        />
        <input
          type="text"
          value={newUser.age}
          onChange={props.handleChange}
          name={"age"}
          placeholder={"Age"}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default JoinForm;


// const [newUser, setNewUser] =useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     age: ''
// })
// const addUser = (e) => {
//     e.preventDefault()
    
// }
// const handleChange = (e) => {
//     setNewUser({...newUser, [e.target.name]: e.target.value})
// }

// <JoinForm
// newUser={newUser}
// handleChange={handleChange}
// addUser={addUser}
// />