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
import { useEffect, useState } from 'preact/hooks';
import { Experiment } from './views/experiment/experiment';
import { ExperimentDefinition } from './types';
import { Assistant } from './views/assistant/assistant';

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

    if (window.location.href.endsWith("/static/") || window.location.href.endsWith("/sign-in"))
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

  const [experiments, setExperiments] = useState<ExperimentDefinition[]>([]);

  // const [experiments, setExperiments] = useState([{
  //   id: "Liver lesion test 1".toLowerCase().replaceAll(" ", "_") + "_" + (new Date()).getTime().toString(),
  //   name: "Liver lesion test 1",
  //   description: "First test of a liver lesion detection model.",
  //   organ: "liver",
  //   status: "Completed",
  //   lastUpdated: "Tue Jun 13 2023 09:41:32 GMT+0200 (Central European Summer Time)"
  // }]);

  useEffect(() => {
    fetch(import.meta.env.VITE_SERVICE_URL + "/data/experiments", {
      method: "GET",
      headers: {
        Accept: "application/json"
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data: { experiments: ExperimentDefinition[] }) => {
        setExperiments(data.experiments);
      });
  }, []);

  function getExperiment(id: string): ExperimentDefinition | undefined {
    var result = undefined;

    for (var i = 0; i < experiments.length; i++) {
      if (experiments[i].id === id)
        result = experiments[i];
    }

    return result;
  }

  function addExperiment(experiment: ExperimentDefinition) {
    var newExperiements: ExperimentDefinition[] = experiments;
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
        <Experiment path="/experiments/:id" id="" user={currentUser.value} auth={auth} getExperiment={getExperiment} />
        <NewExperiment path="/new-experiment" user={currentUser.value} auth={auth} addExperiment={addExperiment} />
        <Assistant path="/assistant" user={currentUser.value} auth={auth} />
      </Router>
    </div>
  );
}

render(<Main />, document.getElementById('app') as HTMLElement)


