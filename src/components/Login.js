import { useState } from "react";
import "./Login.css"
import {auth, provider} from "../firebase"
import { useDispatch } from "react-redux";
import { LOGIN } from "../features/userSlice";
import logo from "./icon-google.svg"

const Login = () => {

    const [emailLogin, setEmailLogin] = useState("")
    const [userPassword, setUserPassword] = useState("")
    const [firstNameRegister, setFirstNameRegister] = useState("")
    const [lastNameRegister, setLastNameRegister] = useState("")
    const [emailRegister, setEmailRegister] = useState("")
    const [passwordRegister, setPasswordRegister] = useState("")
    const [passwordConfirmRegister, setPasswordConfirmRegister] = useState("")
    const dispatch = useDispatch();

    const ToLogin = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(emailLogin, userPassword)
        .then(userAuth => {
            dispatch(LOGIN({
                displayName: userAuth.user.displayName,
                uid: userAuth.user.uid,
                email: userAuth.user.email
            }))
        })
        .catch(err => alert(err));
    }

    const ToRegister = (e) =>{
        e.preventDefault();

        if(passwordRegister !== passwordConfirmRegister){
            alert("Please check the filled fields!!!")
            clearInfo();
            return
        }

        auth.createUserWithEmailAndPassword(emailRegister, passwordRegister)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: firstNameRegister
            })
            .then(() => {
                dispatch(LOGIN({
                    displayName: userAuth.user.displayName,
                    email: userAuth.user.email,
                    uid: userAuth.user.uid
                }))
            })
        })
        .catch((err) => alert(err))
    }

    const LoginGoogle = (e) =>{
        e.preventDefault();
        auth.signInWithPopup(provider)
        .then(userAuth => {
            dispatch(LOGIN({
                displayName: userAuth.user.displayName,
                email: userAuth.user.email,
                uid: userAuth.user.uid
            }))
        })
        .catch((err) => alert(err))
    }

    const clearInfo = () =>{
        setEmailLogin("")
        setUserPassword("")
        setFirstNameRegister("")
        setLastNameRegister("")
        setEmailRegister("")
        setPasswordConfirmRegister("")
        setPasswordRegister("")
    }

    

    return (
        <div className="login">
            <div className="login__left">
                <div className="login__Container">
                    <form>
                        <h1>LOGIN</h1>
                        <div className="form__entry">
                            <p>EMAIL</p>
                            <input type="text" value={emailLogin} onChange={(e) => setEmailLogin(e.target.value)} />
                        </div>
                        <div className="form__entry">
                            <p>PASSWORD</p>
                            <input type="password" value={userPassword} onChange={(e) => setUserPassword(e.target.value)} />
                        </div>
                        <button className="form__btn" onClick={ToLogin}>SIGN IN</button>
                        <button className="form__btn google__btn" onClick={LoginGoogle}><img src={logo} alt="" /> SIGN IN WITH Google</button>
                    </form>
                </div>
            </div>

            <div className="login__right">
                <div className="login__Container">
                    <form>
                        <h1>CREATE AN ACCOUNT</h1>
                        <div className="form__entry">
                            <p>FIRST NAME</p>
                            <input type="text" value={firstNameRegister} onChange={(e) => setFirstNameRegister(e.target.value)}/>
                        </div>
                        <div className="form__entry">
                            <p>LAST NAME</p>
                            <input type="text" value={lastNameRegister} onChange={(e) => setLastNameRegister(e.target.value)}/>
                        </div>
                        <div className="form__entry">
                            <p>EMAIL*</p>
                            <input type="text" required value={emailRegister} onChange={(e) => setEmailRegister(e.target.value)}/>
                        </div>
                        <div className="form__entry">
                            <p>PASSWORD*</p>
                            <input type="password" required value={passwordRegister} onChange={(e) => setPasswordRegister(e.target.value)}/>
                        </div>
                        <div className="form__entry">
                            <p>CONFIRM PASSWORD*</p>
                            <input type="password" required value={passwordConfirmRegister} onChange={(e) => setPasswordConfirmRegister(e.target.value)}/>
                        </div>
                        <button className="form__btn" onClick={ToRegister}>REGISTER</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
 
export default Login;