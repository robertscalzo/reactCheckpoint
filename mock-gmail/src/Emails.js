import Email from './Email.js'

function Emails (props){
    return(
        <div className="listView">
            <button onClick={() => props.open(props.email)}> 
                {props.email.subject} <br/> {props.email.sender}<br/>
            </button>
        </div>
    )
}

export default Emails;