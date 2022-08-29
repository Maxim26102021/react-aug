import './style.css';

const Message = (props) => {
    return (
        <div className="wrapper">
            <div className="wrapper__text">
                {props.text}
            </div>
        </div>
    )
}

export default Message