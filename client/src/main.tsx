import { Router, route } from 'preact-router';
import { createHashHistory } from 'history';
import { render } from 'preact'
import { Signal, signal } from "@preact/signals";
import { initializeApp } from "firebase/app";
import { User, getAuth, onAuthStateChanged, getRedirectResult } from "firebase/auth";

import { SignedOut } from './views/signed-out/signed-out';
import { SignIn } from './views/sign-in/sign-in';
import { Home } from './views/home/home';
import { Experiments } from './views/experiments/experiments';
import { NewExperiment } from './views/experiments-new/experiments-new';

import './main.css'
import { useState } from 'preact/hooks';

var config = {
  apiKey: "AIzaSyDWh5sExqNSMsT8Jj6-0q01j6KWL_UmX48",
  authDomain: "cloud32x.firebaseapp.com",
};

// Initialize Firebase
const app = initializeApp(config);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
var currentUser: Signal<User | undefined> = signal(undefined);
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Found user, going to home page.");
    currentUser.value = user;
    route("/home");
  } else {
    console.log("No user found.");
    // User is signed out
    currentUser.value = undefined;
    route("/");
  }
});

getRedirectResult(auth)
  .then((result) => {
    // User is signed in.
    // IdP data available in result.additionalUserInfo.profile.

    // Get the OAuth access token and ID Token
    console.log(result);
    // if (result) {
    //   // const credential = OAuthProvider.credentialFromResult(result);
    //   // console.log(credential?.accessToken);
    //   // console.log(credential?.idToken);
    //   // const accessToken = credential.accessToken;
    //   // const idToken = credential.idToken;
    // }
    // else {
    //   signOut(auth).then(() => {
    //     route("/");
    //   });
    // }
  })
  .catch((error) => {
    // Handle error.
    console.error(error);
  });

function sendCancelEvent() {
  //First, we initialize our event
  const event = new Event('dialogCancel');

  // Next, we dispatch the event.
  document.dispatchEvent(event);
}

function Main() {

  const [experiments, setExperiments] = useState([{
    Name: "Liver lesion test 1",
    Organs: "Liver",
    Status: "Completed",
    LastUpdated: "Tue Jun 13 2023 09:41:32 GMT+0200 (Central European Summer Time)"
  }]);

  function addExperiment(experiment: { Name: string, Organs: string, Status: string, LastUpdated: string }) {
    var newExperiements = experiments;
    newExperiements.push(experiment);

    setExperiments(newExperiements);
  }

  return (
    <div onClick={() => { sendCancelEvent() }}>
      {/* @ts-ignore */}
      <Router history={createHashHistory()}>
        <SignedOut path="/" user={currentUser.value} auth={auth} />
        <SignIn path="/sign-in" user={currentUser.value} auth={auth} />
        <Home path="/home" user={currentUser.value} auth={auth} />
        <Experiments path="/experiments" user={currentUser.value} auth={auth} experiments={experiments} />
        <NewExperiment path="/new-experiment" user={currentUser.value} auth={auth} addExperiment={addExperiment} />
      </Router>
    </div>
  );
}

render(<Main />, document.getElementById('app') as HTMLElement)


