import "./Class.css";
import React, {useState, useEffect} from 'react';
function ClassGraphQL(props){ 
    const [classInfo, setClassInfo] = useState({});
    const url = "https://api.peterportal.org/graphql"
    useEffect(()=>{
        const fetchData = async () => {
            const query = `
                query{
                    course(id: "${props.name}")
                    {
                        title 
                        department_name
                        description
                        instructor_history
                        {
                            name
                        }
                    }
                    
                }
            `
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({query}),
                headers: {
                    "Content-Type": "application/json" //Passing as json
                }
            });
            const data = await response.json();
            console.log(data);     
            setClassInfo(data.data.course);
        }
        fetchData();
    }, [props.name]) //This means that only request is made when there is a name change
    
    let info;
    if(classInfo)  
    {
        //Storing fetch data in html
        info = <div className = "Information">
        <p id = "title">Course Title: {classInfo.title}</p>
        <p id = "department">Department: {classInfo.department_name}</p>
        <p id = "description"> Course Description: <br />{classInfo.description}</p>
        <p>
            <p id = "instructorNames"> Instructor Names: </p>
            {classInfo.instructor_history?.map((item,i) =>(
                        <li key = {i}> {item.name} </li>
                    )
                ) 
            }
        </p>
        </div>

    } else if (classInfo == null){
        info = <p> Class Not Found!</p>
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
export default ClassGraphQL;