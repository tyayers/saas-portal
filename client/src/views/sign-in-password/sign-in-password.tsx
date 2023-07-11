import { Header } from "../../components/header/header"
import { Auth, signInWithEmailAndPassword, User } from "firebase/auth";
import { InputField } from "../../components/input-field/input-field";
import { InputButton } from "../../components/input-button/input-button";

import "./sign-in-password.css"
import { useState } from "preact/hooks";
import { route } from "preact-router";

export function SignInPassword(props: { path: string, auth: Auth, user: User | undefined }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function createUser() {
    signInWithEmailAndPassword(props.auth, email, password)
      .then(() => {
        // Signed in 
        //const user = userCredential2.user;
        route("/home");
        // ...
      })
      .catch((error2: { code: any; message: any; }) => {
        const errorCode = error2.code;
        const errorMessage = error2.message;

        console.error(errorCode + " - " + errorMessage);
        alert(errorMessage);
      });
  }

  return (
    <>
      <Header user={props.user} auth={props.auth} showSearch={false} />

      <div class="signin_password_background" onClick={() => history.back()}>
        <div class="signin_password_panel" onClick={(e) => e.stopPropagation()}>
          Welcome! Please enter your email and password.
          <div class="signin_password_form">
            <InputField id="email" placeholder="Email" focus={true} type="singleline" rows={1} value={email} setValue={setEmail}></InputField>
            <InputField id="password" placeholder="Password" focus={false} type="password" rows={1} value={password} setValue={setPassword}></InputField>
            <br />
            <div>
              <InputButton text="Sign In" type="primary" action={() => createUser()}></InputButton>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}