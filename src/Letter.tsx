import './letter.css';

const Login = () => {

    const letter = import.meta.env.VITE_LETTER;

    return(
        <div className="body-container">
            <h1></h1>

            <div className = "writing">
                <p>Dear Mom,</p>
                <p>{letter}</p>
                <p>Love, Shawn</p>
            
            </div>
            
        </div>
        
    )
}

export default Login;