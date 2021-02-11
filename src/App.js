import Profile from "./profile/Profile";
import photo from "./photo.png"
import "./App.css";

function App() {

  const getName = (fullName) => alert (`my name is ${fullName} `)

  return (
    <div  className="App" >
      <div style={{color: "blue", textAlign: 'center' , margin:"50px 200px"}}>
        <Profile
        fullName="Aymen Ben Ayed"
        bio="My name is Aymen, I am Tunisian and I am currently a student at UMT, I went to the 4th year of computer engineering,
        my goals are to be a freelancer and to open my own business, my skills are c c++ java html css js and I am learning to react"
        profession="Student" 
        getName={getName}  >
            <img width={250} src={photo} alt="profilephoto"/>
        </Profile>
      </div>
    </div>
  );
}
export default App

