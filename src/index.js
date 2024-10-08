import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const skills = [
  {
    skill:"React",
    level:"Basic",
    color:"lightgreen"
  },
  {
    skill:"JavaScript",
    level:"Intermediate",
    color:"Skyblue"
  },
  {
    skill:"HTML+CSS",
    level:"Advanced",
    color:"Yellow"
  },
  {
    skill:"Web Design",
    level:"Intermediate",
    color:"pink"
  },
  {
    skill:"Git & Github",
    level:"Advanced",
    color:"Gold"
  }
];


function App() {
  return (
    <>
      <ProfileCard />
    </>
  );
}

function ProfileCard() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillSet />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="/images/musharafaahel-avatar.jpg"
      alt="avatar"
    />
  );
}

function Intro() {
  return (
    <div>
      <h1>Musharaf Aahel</h1>
      <p>
        Front-End Web Developer and Sitcore Content Autor, when not coding or
        preparing course, I like to play badmitton or to just enjoy the Netflix
        series.
      </p>
    </div>
  );
}

function SkillSet() {
  return <div className="skill-list">
    {/* <Skill skill='React' emoji='💪' color='red'/>
    <Skill skill='JavaScript' emoji='💪'color='blue'/>
    <Skill skill='HTML+CSS' emoji='💪'color='Yellow'/>
    <Skill skill='Web Design' emoji='💪' color='skyblue'/>
    <Skill skill='Git & Github' emoji='💪' color='gold'/> */}

    { skills.map( (e) => <Skill skill={e.skill} color={e.color} emoji={e.level} />  ) }
    
  </div>;
}
function Skill({skill, color, emoji}) {
  return <div className="skill" style={{backgroundColor: color}}>
    <span>{skill}</span>
    <span>
      {emoji === "Advanced" && "💪"}
      {emoji === "Intermediate" && "👍"}
      {emoji === "Basic" && "👶"}
      </span>
  </div>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
