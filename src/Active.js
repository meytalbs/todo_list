import './App.css';
function Active (props) {

  return (
      <>
        <li className={props.data.checked && "checked"} onClick={() => props.checked(props.index)}>{props.data.text}</li>
        <button onClick={() => props.deleteActivity(props.index)}>Delete</button>
      </>
  );
}

export default Active;