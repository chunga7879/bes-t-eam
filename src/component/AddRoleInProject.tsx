import axios, {AxiosResponse} from "axios";
import React, {useState} from "react";
import {Input} from "antd";

// TODO: MAKING ROLE CREATE COMPONENT SEPERATELY
export const AddRoleInProject = (props: any) => {
    const { open, close, header, roles, setRoles} = props;

    const [roleName, setRole] = useState("");
    const [abilityInputs, setAbilityInputs] = useState([{type: "text", value: ""}]);
    const [numForRole, setNumForRole] = useState(1);

    const addAbilityInput = (event: any) => {
        setAbilityInputs([...abilityInputs, { type: "text", value: ""}])
    }


    const handleAbilityChange = (event: any, index: number) => {
        event.preventDefault();
        const newArr = [...abilityInputs];
        newArr[index].value = event.target.value;

        setAbilityInputs(newArr);
    }
    // TODO: ANY needs to be changed
    const onSubmitRole = (event: any) => {
        event.preventDefault();
        const abilities: string[] = abilityInputs.map((a) => (a.value));

        axios.post("https://example.com/localhost:8080/api/v1/roles/create", {name: roleName, abilities: abilities}).then((res: AxiosResponse<any>) => {
            console.log(res.data);
            setRoles(
                    [...roles,
                    {
                        "role": res.data,
                        "numForRole": numForRole
                    }
                ])
        }).catch(e => console.log(e));
    }

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {
                open ? (
                    <section>
                        <header>
                            {header}
                            <button className="close" onClick={close}>
                                &times;
                            </button>
                        </header>
                        <main>
                            <button onClick={addAbilityInput}>+</button>

                            <form>
                                <label>
                                    Role Name: <br />
                                    <Input
                                        placeholder="Role Name"
                                        type="text"
                                        name="roleName"
                                        className="input"
                                        value={roleName}
                                        onChange={(event) => setRole(event.target.value)}
                                    />
                                </label> <br />
                                <label>
                                    Abilities: <br />
                                    {abilityInputs.map((ability, i) => {
                                        return  <Input
                                            placeholder="ability"
                                            name="ability"
                                            className="input"
                                            type="text"
                                            value={ability.value}
                                            onChange={(event) => handleAbilityChange(event, i)}
                                        />;
                                    })}

                                </label> <br />

                                <label>
                                    Number Of Member For This Role: <br />
                                    <Input
                                        placeholder="2"
                                        type="number"
                                        name="numForRole"
                                        className="input"
                                        value={numForRole}
                                        onChange={(event) => setNumForRole(+event.target.value)}
                                    />
                                </label> <br />
                            </form>
                        </main>
                        <footer className="fotFor">
                            <button onClick={onSubmitRole}>
                                ADD
                            </button>
                        </footer>
                    </section>
                ) : null
            }
        </div>
    );
}