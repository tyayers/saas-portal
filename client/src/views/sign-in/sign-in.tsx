import { Header } from "../../components/header/header"
import { Auth, GoogleAuthProvider, User, signInWithRedirect, OAuthProvider } from "firebase/auth";

import "./sign-in.css"
import { route } from "preact-router";

export function SignIn(props: { path: string, auth: Auth, user: User | undefined, registerUser: boolean | undefined }) {
  const googleProvider = new GoogleAuthProvider();
  const microsoftProvider = new OAuthProvider('microsoft.com');
  const buttonText = props.registerUser ? "Register" : "Sign In";
  const headerText = props.registerUser ? "Join Health.io" : "Welcome back.";

  function signInGoogle() {
    signInWithRedirect(props.auth, googleProvider);
  }

  function signInMicrosoft() {
    signInWithRedirect(props.auth, microsoftProvider);
    // signInWithPopup(props.auth, microsoftProvider)
    //   .then((result) => {
    //     // User is signed in.
    //     // IdP data available in result.additionalUserInfo.profile.

    //     // Get the OAuth access token and ID Token
    //     const credential = OAuthProvider.credentialFromResult(result);
    //     console.log(credential?.accessToken)
    //     console.log(credential?.idToken)
    //     // const accessToken = credential.accessToken;
    //     // const idToken = credential.idToken;
    //   })
    //   .catch((error) => {
    //     // Handle error.
    //     console.error(error);
    //   });
  }

  function signInPassword() {
    if (props.registerUser)
      route("/register-email")
    else
      route("/sign-in-password")
  }

  return (
    <>
      <Header user={props.user} auth={props.auth} showSearch={false} />

      <div class="background" onClick={() => history.back()}>
        <div class="provider_panel" onClick={(e) => e.stopPropagation()}>
          {headerText}
          <div class="providers">
            <button class="provider_button" onClick={() => signInGoogle()}>
              <div class="provider_button_panel">
                <svg width="25" height="25"><g fill="none" fill-rule="evenodd"><path d="M20.66 12.7c0-.61-.05-1.19-.15-1.74H12.5v3.28h4.58a3.91 3.91 0 0 1-1.7 2.57v2.13h2.74a8.27 8.27 0 0 0 2.54-6.24z" fill="#4285F4" /><path d="M12.5 21a8.1 8.1 0 0 0 5.63-2.06l-2.75-2.13a5.1 5.1 0 0 1-2.88.8 5.06 5.06 0 0 1-4.76-3.5H4.9v2.2A8.5 8.5 0 0 0 12.5 21z" fill="#34A853" /><path d="M7.74 14.12a5.11 5.11 0 0 1 0-3.23v-2.2H4.9A8.49 8.49 0 0 0 4 12.5c0 1.37.33 2.67.9 3.82l2.84-2.2z" fill="#FBBC05" /><path d="M12.5 7.38a4.6 4.6 0 0 1 3.25 1.27l2.44-2.44A8.17 8.17 0 0 0 12.5 4a8.5 8.5 0 0 0-7.6 4.68l2.84 2.2a5.06 5.06 0 0 1 4.76-3.5z" fill="#EA4335" /></g></svg>
                <span class="provider_label">{buttonText} with Google</span>
              </div>
            </button>

            <button class="provider_button" onClick={() => signInMicrosoft()}>
              <div class="provider_button_panel">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"><path fill="#f3f3f3" d="M0 0h23v23H0z" /><path fill="#f35325" d="M1 1h10v10H1z" /><path fill="#81bc06" d="M12 1h10v10H12z" /><path fill="#05a6f0" d="M1 12h10v10H1z" /><path fill="#ffba08" d="M12 12h10v10H12z" /></svg>
                <span class="provider_label" style="padding-left: 8px">{buttonText} with Microsoft</span>
              </div>
            </button>

            <button class="provider_button" onClick={() => { signInPassword() }}>
              <div class="provider_button_panel">
                <svg width="25" height="25" class="pl gs ah"><path d="M4 6v13h17V6H4zm5.9 7.97l2.6 2.12 2.6-2.12 4.14 4.02H5.76l4.15-4.02zm-4.88 3.32V9.97l4.1 3.35-4.1 3.97zm10.87-3.97l4.1-3.35v7.32l-4.1-3.97zm4.1-6.3v1.64l-7.49 6.12-7.48-6.13V7.01h14.96z"></path></svg>
                <span class="provider_label" style="padding-left: 6px">{buttonText} with Email</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}