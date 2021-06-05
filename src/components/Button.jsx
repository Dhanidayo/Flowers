
const Button = (props) => {

    return (
        <>
            <button onClick={props.resizeImage}>{props.text}</button>
        </>
    );
}

export default Button;