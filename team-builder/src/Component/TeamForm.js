import React, { useState } from "react";

const TeamForm = props => {
  console.log(props);
  const [team, setTeam] = useState({ name: "", email: "", role: ""});

  const handleChanges = e => {
    setTeam({ ...team, [e.target.name]: e.target.value });
    console.log(team);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewTeam(team);
    setTeam({ name: "", email: "", role: "" });
    console.log(e.target.value);
  };

  return (
    <form className='form-section' onSubmit={submitForm}>

    <div className='fullname-input'>
      <label id='label1' htmlFor="name">Full Name</label>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={team.name}
      />
      </div>

      <div className='email-input'>
      <label id='label2' htmlFor="note">Email</label>
      <input
        id="email"
        type="text"
        name="email"
        onChange={handleChanges}
        value={team.email}
      />
      </div>
      
      <div className='role-input'>
      <label id='label3' htmlFor="note">Role</label>
      <input
        id="role"
        type="text"
        name="role"
        onChange={handleChanges}
        value={team.role}
      />
      </div>

      <button type="submit">Add Member</button>

    </form>
  );
};

export default TeamForm;
