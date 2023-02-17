import {useEffect, useState, } from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

export default function SurveyList() {
    let params = useParams();
    const projectId = params.projectId;
    const [surveyList, setSurveyList] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8080/api/v1/survey/project" + `/${projectId}`)
            .then((response) => {
                let arr  = response.data;
                setSurveyList(arr);
            })
    }, []);

    return(
        <div>
            <div className="inner">
                <div className="cors">
                    {surveyList.map((survey) => {
                        const { id, name } = survey;

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