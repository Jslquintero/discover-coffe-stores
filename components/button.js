const Button = (props) => {
    return (
        <button className={props.styleClass}>{
            props.text
        }</button>
    )
}

export default Button;
