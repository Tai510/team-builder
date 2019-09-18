import React, { useState , useEffect} from 'react';
import './App.css';
import TeamForm from '../src/Component/TeamForm'
import TeamList from '../src/Component/TeamList'

function App() {
  const [team, setTeam] = useState([
    {
      id: 1,
      name: "Tashi Woeser",
      email: 'tashiwoeser@gmail.com',
      role: 'Full Stack Developer'
    }
  ]);

  
  const addNewTeam = squad => {
    const newTeam = {
      id: Date.now(),
      name: squad.name,
      email: squad.email,
      role:  squad.role
    };
    setTeam([...team, newTeam]);
  };

  return (
    <div className="App">
      <h1>The Squad <i class="fas fa-users"></i></h1>
      <TeamForm addNewTeam={addNewTeam} />
      <TeamList team={team} />
    </div>
  );
}


export default App;
