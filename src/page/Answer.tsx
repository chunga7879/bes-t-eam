import React, {useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {useParams} from "react-router-dom";
import {Input} from "antd";
import {PreferMateAnswer, SurveyDto} from "../data/responseData";

export default function Answer() {
    let params = useParams();
    const surveyId = params.surveyId;
    const participantId = params.participantId;
    const [survey, setSurvey] = useState<SurveyDto>();

    // TODO: list of preferred participants
    const [preferredMate, setPreferredMate] = useState<PreferMateAnswer>();

    const roleElement = {
        "type": "matrix",
        "name": "quality",
        "title": "Please indicate how you would like to take the role",
        "columns": [
            {"value": 1, "text": 1}
        ],
        "rows": [
            {"value": "affordable", "text": "Product is affordable"}
        ],
        "alternateRows": true,
        "isAllRowRequired": true
    }

    const roleJson = {
        "elements": [

        ],
        "showQuestionNumbers": "off"
    };

    useEffect(() => {
        axios.get(`http://localhost:8080/api/v1/survey/${surveyId}`)
            .then((res: AxiosResponse<SurveyDto>) => {
                setSurvey(res.data || null);

                for (let i = res.data.minRangeRolePreference; i <= res.data.maxRangeRolePreference; i++) {
                    roleElement.columns.push({ "value": i, "text": i});
                }

                // for (RoleDto role : res.data.project.roles) {
                //
                // }
            })
    }, []);
    return (
        <div>
            <div className="inner">
                {survey ?
                    (
                        <div>
                            <h1> Survey : {survey.project.name}</h1>
                            <form>
                                <label>
                                    Preferred teammates: <br />
                                    <Input
                                        placeholder="Student Number"
                                        type="text"
                                        name="studentNumber"
                                        className="input"
                                        value={preferredMate?.studentNumber.toString()}
                                        onChange={(event) => setPreferredMate({"studentNumber": parseInt(event.target.value), "priority": 1})}
                                    />
                                </label> <br />
                            </form>
                        </div>
                    ) : null
                }
                <footer className="fotFor">
                    {/*<button onClick={onSubmit}>*/}
                    {/*    CREATE*/}
                    {/*</button>*/}
                </footer>
            </div>
        </div>
    )

}