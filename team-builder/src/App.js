import React, { useState } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import TeamForm from "./Form";
import Member from "./Member";

const initialTeamList = [
  {
    id: uuid(),
    name: "ALDO GAMBOA",
    email: "GAMBOALDO@IMTHEBEST.COM",
    role: "Unit 2",
  },
];

const initialFormValues = {
  name: "",
  email: "",
  role: "",
};

function App() {
  const [members, setMembers] = useState(initialTeamList);
  // set members
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const newTeam = {
      id: uuid(),
      name: formValues.name,
      email: formValues.email,
      role: formValues.role,
    };
    setMembers([...members, newTeam]);
    setFormValues(initialFormValues);
  };

  return (
    <div className="container">
      <header>
        <h1>Universal inc.</h1>
      </header>
      <TeamForm
        classname="team-form"
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
      />
      {members.map((member) => {
        return <Member classname="members" key={member.id} details={members} />;
      })}
    </div>
  );
}

export default App;
