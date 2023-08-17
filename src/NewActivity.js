import {useState} from "react";

function NewActivity (props) {
    const [activeText, setActiveText] = useState("");

    const onChange = (e) => {
        console.log(e.target.value);
        setActiveText(e.target.value);
    }
    return (
        <div>
            <input type="text" placeholder="Add new activity" onChange={(e) => onChange(e)}/>
            <button className={"button"} onClick={ (e) => props.setActiveList(activeText) }>Add</button>
        </div>
    );
}

export default NewActivity;