import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Project(props: any) {
    let params = useParams();
    const projectId = parseInt(params.id || "");
    const [project, setProject] = useState({});
    const navigate = useNavigate();


    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/projects" + `/${projectId}`)
            .then((res: any) => {
                setProject(res.data);
            })
    }, []);

    return (
        <div>
            <div className="inner">
                <div>
                    // TODO: project informations
                </div>
                <div>
                    <button className="survey" onClick={(event) => {
                        event.preventDefault();
                        navigate(`/survey/create/project/${projectId}`);
                    }}>
                        Create Survey
                    </button>
                </div>
            </div>
        </div>
    )

}
