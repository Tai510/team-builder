import React, { useState } from "react";

const TeamForm = props => {
  console.log(props);
  const [team, setTeam] = useState({
    name: "",
    email: "",
    role: ""
  });
  const handleChanges = event => {
    setTeam({ ...team, [event.target.name]: event.target.value });
    console.log(team);
  };
  const submitForm = event => {
    event.preventDefault();
    props.addNewTeam(team);
    setTeam({ name: "", email: "", role: "" });
    console.log(event.target.value);
  };

  return (
    <form className='form-section' onSubmit={submitForm}>
      <label htmlFor="name">Full Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={team.name}
      />
      <label htmlFor="note">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        onChange={handleChanges}
        value={team.email}
      />
      <label htmlFor="note">Role</label>
      <input
        id="role"
        type="text"
        name="role"
        onChange={handleChanges}
        value={team.role}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default TeamForm;
