import React, {useEffect, useState} from "react";
import axios from "axios";
import {Input} from "antd";
import {AddRoleInProject} from "../component/AddRoleInProject";

export default function CreateProject() {
    const [name, setName] = useState("");
    const [numPerTeam, setNumPerTeam] = useState(4);
    // const [category, setCategory] = useState(0);
    const [roles, setRoles] = useState([]);

    // const [categories, setCategories] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:8080/api/v1/category/all/active").then((res: any) => {
    //         console.log(res.data);
    //         setCategories(res.data);
    //     })
    // })

    const [roleAddOpen, setRoleAddOpen] = useState(false);

    // const handleCategory = (event: any) => {
    //     event.preventDefault();
    //
    //     setCategory(event.target.value);
    // }

    const roleOpen = () => {
        setRoleAddOpen(true);
    };
    const roleClose = () => {
        setRoleAddOpen(false);
    };

    const onSubmit = (event: any) => {
        event.preventDefault();
        // TODO: NEED SIGN UP, LOG-IN (NOW JUST USE USER 1)
        axios.post("http://localhost:8080/api/v1/projects/create"
            , {"name": name, "category": {"id": 1}, "roles": roles, "numPerGroup": numPerTeam, "user": {"id": 1}})
            .then((res: any) => {
        });
    }

    return (
        <div className="project">
            <div className="inner">
                <div className="middleTask">
                    <AddRoleInProject open={roleAddOpen} close={roleClose} header="ROLE ADD TO PROJECT" roles={roles} setRoles={setRoles}/>
                </div>
                <button onClick={
                    roleOpen
                } className="add">
                    <span>ADD ROLE</span>
                </button>
                <form>
                    <label>
                        Project Name: <br />
                        <Input
                            placeholder="Project Name"
                            type="text"
                            name="projectName"
                            className="input"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />
                    </label> <br />ççc

                    {/*<label>*/}
                    {/*    Category: <br/>*/}
                    {/*    <select*/}
                    {/*        placeholder="choose one"*/}
                    {/*        name="category"*/}
                    {/*        className="input"*/}
                    {/*        value={category}*/}
                    {/*        onChange={handleCategory}>*/}
                    {/*        {*/}
                    {/*            categories.map((option: any) => (*/}

                    {/*                <option value={option.id}>{option.name}</option>*/}
                    {/*            ))*/}
                    {/*        }*/}
                    {/*    </select>*/}
                    {/*</label> <br />*/}
                    <label>
                        Number Of Per Team: <br />
                        <Input
                            placeholder="2"
                            type="number"
                            name="numPerTeam"
                            className="input"
                            value={numPerTeam}
                            onChange={(event) => setNumPerTeam(+event.target.value)}
                        />
                    </label> <br />
                    <label>
                        Roles: <br />
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