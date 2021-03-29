function Email (props){
    return(<div className="emailView">
        {props.sender}<br/>
        {props.recipient}<br/>
        {props.subject}<br/>
        {props.message}<br/>
        {props.date}<br/>
        {props.id}<br/>
    </div>)
}

export default Email;