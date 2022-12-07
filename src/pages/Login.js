import {useState} from "react";
import Parse from "parse/dist/parse.min.js";
import {Link, useParams} from "react-router-dom";

export default function Login(){
    const { loggedIn } = useParams();
    //state variables
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [currentUser, setCurrentUser] = useState(null);

    // Function that will return current user and also update current username
    const getCurrentUser = async function () {
        const currentUser = await Parse.User.current();
        // Update state variable holding current user
        setCurrentUser(currentUser);
        return currentUser;
    };

    const doUserLogIn = async function () {
        // Note that these values come from state variables that we've declared before
        try {
            const loggedInUser = await Parse.User.logIn(username, password);
            // logIn returns the corresponding ParseUser object
            alert(
                `Success! User ${loggedInUser.get(
                    'username'
                )} has successfully signed in!`
            );
            // To verify that this is in fact the current user, `current` can be used
            const currentUser = await Parse.User.current();
            console.log(loggedInUser === currentUser);
            // Clear input fields
            setUsername('');
            setPassword('');
            // Update state variable holding current user
            await getCurrentUser();
            return true;
        } catch (error) {
            // Error can be caused by wrong parameters or lack of Internet connection
            alert(`Error! ${error.message}`);
            return false;
        }
    };

    // Functions used by the screen components
    const doUserRegistration = async function () {
        // Note that these values come from state variables that we've declared before
        try {
            // Since the signUp method returns a Promise, we need to call it using await
            const createdUser = await Parse.User.signUp(username, password);
            alert(
                `Success! User ${createdUser.getUsername()} was successfully created!`
            );
            return true;
        } catch (error) {
            // signUp can fail if any parameter is blank or failed a uniqueness check on the server
            alert(`Error! ${error}`);
            return false;
        }
    };
    if (loggedIn){
        return <>
            <h2 className="heading">Account</h2>
            <div>

            </div>
        </>
    } else return <>
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
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password"
                    size="large"
                    type="password"
                    className="form_input"
                />
            </div>
            <div className="form_buttons">
                <button
                    onClick={() => doUserRegistration()}
                    type="primary"
                    className="form_button"
                    color={'#ec2020'}
                >
                    Sign Up
                </button>
                <button
                        onClick={() => doUserLogIn()}
                        type="primary"
                        className="form_button"
                        color={'#ec2020'}
                    >
                        Log In
                </button>
                <div>
                    <button
                        onClick={() => {}}
                        type="primary"
                        className="form_button"
                        color={'#ec2020'}
                    >
                        Forgot Password?
                    </button>
                </div>
            </div>
        </div>
    </>;
}