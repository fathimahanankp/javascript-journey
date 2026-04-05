import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="card">
      <Avatar/>
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList/>
      </div>
    </div>
  );
}

function Avatar(){
  return <img className= 'avatar' src = "me.jpg" alt = 'Fathima Hanan'/>

}

function Intro(){
  return (
   <div>
     <h1>Fathima Hanan</h1>
    <p>I am a frontend developer learning HTML, CSS, JavaScript, and React. My profile card displays my skills using reusable components, where each skill is customized with props to show my proficiency levels. I am continuously learning and improving by building small projects and exploring new concepts.</p>
  </div>
)}

function SkillList(){
  return(
     <div className= 'skill-list'>
      <Skill skill = 'React' emoji="💪" color='lightgreen'/>
      <Skill skill = 'JavaScript' emoji="💪" color = 'yellow'/>
      <Skill skill = 'HTML' emoji="💪" color = 'coral'/>
      <Skill skill = 'CSS' emoji="💪" color = 'pink'/>
      <Skill skill = 'Python' emoji="💪" color='lightblue'/>

     </div>
  )
}

function Skill(props){
  return(
  <div className="skill" style ={{backgroundColor: props.color}}> 
    <span> {props.skill}</span> 
    <span> {props.emoji}</span>
  </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
