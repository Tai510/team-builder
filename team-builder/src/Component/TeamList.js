import React, {useState} from 'react';


const TeamList = props => {

  return (
    <div className='new-members'>
      {props.team.map(squad => (
        <div className="team" key={squad.id}>
          <h2><span>Name:</span> {squad.name}</h2>
          <p><span>Email:</span> {squad.email}</p>
          <p><span>Role:</span> {squad.role}</p>
          <button>Update</button>
        </div>
      ))}
    </div>
  );
};

export default TeamList;