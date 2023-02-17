import {useEffect, useState, } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function ProjectList() {
    const [projectList, setProjectList] = useState([]);
    const navigate = useNavigate();

    // TODO: USER ID WILL BE REPLACED WITH AUTH
    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/projects/user/1")
            .then((response) => {
                let arr  = response.data;
                setProjectList(arr);
            })
    }, []);

    return(
        <div>
            <div className="inner">
                <div className="cors">
                    {projectList.map((project) => {
                        const { id, name } = project;

                        return (
                            <button className="project" onClick={(event) => {
                                event.preventDefault();
                                navigate(`/projects/${id}`);
                            }}>
                                <h1 className="projectName">
                                    {name} &nbsp;
                                </h1>
                            </button>

                        );
                    })}
                </div>
            </div>
        </div>
    )

}