import React, {useEffect, useState} from "react";
import axios from "axios";
import {Input} from "antd";
import {AddRoleInProject} from "../component/AddRoleInProject";
import {useParams} from "react-router-dom";

export default function CreateSurveyProject() {
    let params = useParams();
    const projectId = params.projectId;

    const [name, setName] = useState("");
    const [isPossibleSameRolePreference, setIsPossibleSameRolePreference] = useState(true);
    const [minRangeRolePreference, setMinRangeRolePreference] = useState(1);
    const [maxRangeRolePreference, setMaxRangeRolePreference] = useState(5);

    const [isPossibleSameAbilityRating, setIsPossibleSameAbilityRating] = useState(true);
    const [minRangeAbilityRating, setMinRangeAbilityRating] = useState(1);
    const [maxRangeAbilityRating, setMaxRangeAbilityRating] = useState(5);


    const onSubmit = (event: any) => {
        event.preventDefault();
        axios.post("http://localhost:8080/api/v1/survey/create"
            , {"name": name, "project": { "id": parseInt(projectId || "0")}
                , "isPossibleSameRolePreference": isPossibleSameRolePreference
                , "minRangeRolePreference": minRangeRolePreference
                , "maxRangeRolePreference": maxRangeRolePreference
                , "isPossibleSameAbilityRating": isPossibleSameAbilityRating
                , "minRangeAbilityRating": minRangeAbilityRating
                , "maxRangeAbilityRating": maxRangeAbilityRating
            })
            .then((res: any) => {
                console.log(res.data);
            });
    }

    return (
        <div className="project">
            <div className="inner">
                <form>
                    <label>
                        Survey Name: <br />
                        <Input
                            placeholder="Survey Name"
                            type="text"
                            name="surveyName"
                            className="input"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </label> <br />

                    // role option
                    <label>
                        Is it possible same role have same preference: <br/>
                        <select
                            name="isPossibleSameRolePreference"
                            className='input'
                            value={isPossibleSameRolePreference.toString()}
                            onChange={(event) => setIsPossibleSameRolePreference((event.target.value == "true"))}
                        >
                            <option value={"true"}>Yes</option>
                            <option value={"false"}>No</option>
                        </select>
                    </label> <br />
                    <label>
                        Range of Role preference: <br />
                        <Input
                            placeholder="min"
                            type="number"
                            name="minRangeRolePreference"
                            className="input"
                            value={minRangeRolePreference}
                            onChange={(event) => setMinRangeRolePreference(+event.target.value)}
                        />
                        <Input
                            placeholder="max"
                            type="number"
                            name="maxRangeRolePreference"
                            className="input"
                            value={maxRangeRolePreference}
                            onChange={(event) => setMaxRangeRolePreference(+event.target.value)}
                        />
                    </label> <br />

                    // ability option
                    <label>
                        Is it possible same ability have same rating: <br/>
                        <select
                            name="isPossibleSameAbilityRating"
                            className='input'
                            value={isPossibleSameAbilityRating.toString()}
                            onChange={(event) => setIsPossibleSameAbilityRating((event.target.value == "true"))}
                        >
                            <option value={"true"}>Yes</option>
                            <option value={"false"}>No</option>
                        </select>
                    </label> <br />
                    <label>
                        Range of Role preference: <br />
                        <Input
                            placeholder="min"
                            type="number"
                            name="minRangeAbilityRating"
                            className="input"
                            value={minRangeAbilityRating}
                            onChange={(event) => setMinRangeAbilityRating(+event.target.value)}
                        />
                        <Input
                            placeholder="max"
                            type="number"
                            name="maxRangeAbilityRating"
                            className="input"
                            value={maxRangeAbilityRating}
                            onChange={(event) => setMaxRangeAbilityRating(+event.target.value)}
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