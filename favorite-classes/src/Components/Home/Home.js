import React, {useState} from 'react';
import Class from "../Class/Class";
import ClassGraphQL from '../Class/ClassGraphQL';
import "./Home.css";
function Home(props){
    //State Variables:
    const [value, setValue] = useState('');
    const[favoriteClasses, setClasses] = useState([]);

    //Defining functions
    const handleChange = (event) => {
        setValue(event.target.value);   
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!favoriteClasses.includes(value)){
            setClasses(favoriteClasses.concat(value));
            setValue('');//After submit, clear input
        } //Check duplicate classes
        console.log(favoriteClasses);
    }

    return ( 
        <div>
            <h1>Hello There, Type in the Box to Add Your Favorite Classes!</h1>
            <form onSubmit={handleSubmit}>
                <label className = "class-label">Add Favorite Class</label>    
                <input className = "input-button" type = "text" value ={value} onChange={handleChange}></input>
                <button className = "submit-button" type = "submit"> Add Class!</button>
            </form>
            <div className = "my-classes"> 
                {
                    favoriteClasses.map((favClass) => 
                    <Class name ={favClass} key={favClass}></Class>
                )}
            </div>
            <div className = "my-classes"> 
                {
                    favoriteClasses.map((favClass) => 
                    <ClassGraphQL name ={favClass} key={favClass}></ClassGraphQL>
                )}
            </div>
        </div>
    )
}

export default Home //export the file so other files can access to it