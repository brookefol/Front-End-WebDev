function LoginForm(props) {
    function handleSubmit(event) { // function "handle(InsertType)"
        const name = event.target.name.value; // gets name that was entered
        props.onSubmit(name);
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input type = "text" placeholder = "Enter your name" name = "name"></input>
            <button type = "submit">Login</button>
        </form>
    )
}

export default LoginForm;