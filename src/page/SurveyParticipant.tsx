import React, {useState} from "react";
import {AddRoleInProject} from "../component/AddRoleInProject";
import {Input} from "antd";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";

export default function SurveyParticipant() {
    let params = useParams();
    const surveyId = params.surveyId;

    const navigate = useNavigate();

    const [studentNumber, setStudentNumber] = useState(0);
    const [email, setEmail] = useState("");

    const onSubmit = (event: any) => {
        event.preventDefault();

        axios.post(`http://localhost:8080/api/v1/participant/create/survey/${surveyId}`, {
            "studentNumber": studentNumber,
            "email": email
        }).then((res) => {
            console.log(res.data);

            navigate(`/answer/create/survey/${surveyId}/participant/${res.data.id}`);
        })
    }

    return (
        <div>
            <div className="inner">\
                <form>
                    <label>
                        Student Number: <br />
                        <Input
                            placeholder="Student Number"
                            type="text"
                            name="Student Number"
                            className="input"
                            value={studentNumber}
                            onChange={(event) => setStudentNumber(parseInt(event.target.value))}
                        />
                    </label> <br />
                    <label>
                        Email: <br />
                        <Input
                            placeholder="Email"
                            type="text"
                            name="email"
                            className="input"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </label> <br />
                </form>
                <footer className="fotFor">
                    <button onClick={onSubmit}>
                        CREATE
                    </button>
                </footer>
            </div>
        </div>
    );
}