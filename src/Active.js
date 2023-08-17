import './App.css';
function Active (props) {

  return (
      <div className="active">
        <li className={props.data.checked ? "active-text checked" : "active-text"} onClick={() => props.checked(props.index)}>{props.data.text}</li>
        <button className="button" onClick={() => props.deleteActivity(props.index)}>X</button>
      </div>
  );
}

export default Active;