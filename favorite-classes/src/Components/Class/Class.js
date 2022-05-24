import "./Class.css";
import React, {useState, useEffect} from 'react';
function Class(props){ 
    const [classInfo, setClassInfo] = useState({});
    const url = "https://api.peterportal.org/rest/v0/courses/"
    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch(url + props.name)
            const data = await response.json();
            console.log(data);     
            setClassInfo(data);
        }
        fetchData();
    }, [props.name]) //This means that only request is made when there is a name change
    let info;
    if(classInfo.id){
        //Storing fetch data in html
        info = <div className = "Information">
        <p id = "title">Course Title: {classInfo.title}</p>
        <p id = "department">Department: {classInfo.department_name}</p>
        <p id = "description"> Course Description: <br />{classInfo.description}</p>
        </div>
    } else if (classInfo.error){
        info = <p> Class Not Found! </p>
    } 
    else {
        info = <p>Loading....</p>
    }

    return (
        <div className = "class"> 
            <div>
            <p id = "class-id"> {props.name}</p>
            {info}
            </div>
        </div>
    )
}
export default Class;