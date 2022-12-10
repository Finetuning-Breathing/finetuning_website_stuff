import {useState} from "react";
import Parse from "parse/dist/parse.min.js";
import "./Login.css";

export default function Login() {
    //state variables
    const [fail, setFail] = useState(0);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState(Parse.User.current());

    // Function that will return current user and also update current username
    const getCurrentUser = async function () {
        const currentUser = await Parse.User.current();
        // Update state variable holding current user
        setCurrentUser(currentUser);
        return currentUser;
    };

    const getFail = async function (val) {
        // Update state variable holding current user
        setFail(val);
        return fail;
    };

    //log into user account if username and password is correct
    const doUserLogIn = async function () {
        // Note that these values come from state variables that we've declared before
        try {
            const loggedInUser = await Parse.User.logIn(username, password);
            // logIn returns the corresponding ParseUser object
            //alert(`Success! User ${loggedInUser.get('username')} has successfully signed in!`);
            // To verify that this is in fact the current user, `current` can be used
            const currentUser = await Parse.User.current();
            console.log(loggedInUser === currentUser);
            // Clear input fields
            setUsername('');
            setPassword('');
            //resetEmail(currentUser.getEmail());
            // Update state variable holding current user
            await getCurrentUser();
            //go home when logged in
            return getFail(-1);
        } catch (error) {
            // Error can be caused by wrong parameters or lack of Internet connection
            //or wrong credentials
            console.log(`Error! ${error.message}`);
            //empty login inputs
            setUsername('');
            setPassword('');
            //fail = 1;
            return getFail(1);
        }
    };

    //log user out by clicking button
    const doUserLogOut = async function () {
        try {
            await Parse.User.logOut();
            // Update state variable holding current user
            await getCurrentUser();
            //go home when logged out
            return getFail(-1);
        } catch (error) {
            console.log(`Error! ${error.message}`);
            return getFail(1);
        }
    };

    // Functions used by the screen components
    const doUserRegistration = async function () {
        // Note that these values come from state variables that we've declared before
        try {
            // Since the signUp method returns a Promise, we need to call it using await
            const createdUser = await Parse.User.signUp(username, password);
            setCurrentUser(createdUser);
            //alert(`Success! User ${createdUser.getUsername()} was successfully created!`);
            //fail = -1;
            return getFail(-1);
        } catch (error) {
            // signUp can fail if any parameter is blank or failed a uniqueness check on the server
            alert(`Error! ${error}`);
            //fail = 2;
            return getFail(2);
        }
    };

    //return code that displays the user login info when logged in
    return <>
        {currentUser === null && (
            <div className="container">
                <h2 className="heading">Account Login</h2>
                <div className="form_fields">
                    <input
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        placeholder="Username"
                        size="large"
                        className="form_input"
                    />
                    <br/>
                    <input
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        placeholder="Password"
                        size="large"
                        type="password"
                        className="form_input"
                    />
                    {fail === 1 && (
                        <>
                            <br/>
                            <div style={{color: "red"}}>Incorrect username/password</div>
                        </>
                    )}
                </div>
                <div className="form_buttons">
                    <button
                        onClick={() => setFail(doUserRegistration)}
                        type="primary"
                        className="form_button"
                    >
                        Sign Up
                    </button>
                    <button
                        onClick={() => setFail(doUserLogIn)}
                        type="primary"
                        className="form_button"
                    >
                        Log In
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => {
                        }}
                        type="primary"
                        className="form_button"
                    >
                        Forgot Password?
                    </button>
                </div>
            </div>)}
        {currentUser !== null && (
            <div>
                <h2 className="heading">User Screen</h2>
                <br/>
                <h2 className="heading">{currentUser.getUsername()}</h2>
                <div className="form_fields">
                    <b>{currentUser.getEmail()}</b>
                </div>
                <div className="form_buttons">
                    <button
                        onClick={() => setFail(doUserLogOut)}
                        type="primary"
                        className="form_button"
                    >Log Out</button>
                </div>
            </div>
        )}
    </>;
}