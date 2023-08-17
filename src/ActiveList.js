import Active from "./Active";

function ActiveList(props) {
    return (
        <div>
            <h2>Active List</h2>
            {props.activeList.length === 0 && <p>No active items</p>}
            <ul>
                {props.activeList.map((active, index) => {
                    return (
                        <li><Active
                            key={index}
                            data={active}
                            checked={(index) => props.checked(index)}
                            deleteActivity={(index) => props.deleteActivity(index)}
                            index={index}
                        /></li>
                    );
                })}
            </ul>
        </div>
    );

}
export default ActiveList;