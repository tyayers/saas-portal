import { Header } from "../../components/header/header"
import { Auth, createUserWithEmailAndPassword, User } from "firebase/auth";
import { InputField } from "../../components/input-field/input-field";
import { InputButton } from "../../components/input-button/input-button";

import "./register-password.css"
import { useState } from "preact/hooks";
import { route } from "preact-router";

export function SignInRegister(props: { path: string, auth: Auth, user: User | undefined }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeatPassword] = useState("");

  function createUser() {
    if (password != repeat_password)
      alert("Passwords don't match!")
    else {
      createUserWithEmailAndPassword(props.auth, email, password)
        .then(() => {
          // Signed in 
          //const user = userCredential.user;
          route("/home");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode + " - " + errorMessage);

          alert(errorMessage);
          // ..
        });
    }
  }

  return (
    <>
      <Header user={props.user} auth={props.auth} showSearch={false} />

      <div class="signin_password_background" onClick={() => history.back()}>
        <div class="signin_password_panel" onClick={(e) => e.stopPropagation()}>
          Welcome! Please enter your email and new password.
          <div class="signin_password_form">
            <InputField id="email" placeholder="Email" focus={true} type="singleline" rows={1} value={email} setValue={setEmail}></InputField>
            <InputField id="password" placeholder="Password" focus={false} type="password" rows={1} value={password} setValue={setPassword}></InputField>
            <InputField id="repeat_password" placeholder="Repeat password" focus={false} type="password" rows={1} value={repeat_password} setValue={setRepeatPassword}></InputField>
            <br />
            <div>
              <InputButton text="Register" type="primary" action={() => createUser()}></InputButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}