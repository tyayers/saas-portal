import { Router, route } from 'preact-router';
import { createHashHistory } from 'history';
import { render } from 'preact'
import { initializeApp } from "firebase/app";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";

import { SignedOut } from './views/signed-out/signed-out';
import { SignIn } from './views/sign-in/sign-in';
import { SignInPassword } from './views/sign-in-password/sign-in-password';
import { SignInRegister } from './views/register-password/register-password';
import { Home } from './views/home/home';
import { Projects } from './views/projects/projects';
import { ProjectNew } from './views/project-new/project-new';
import { ProjectNew2 } from './views/project-new-2/project-new-2';

import { NewExperiment } from './views/experiments-new/experiments-new';


import './main.css'
import { useEffect, useState } from 'preact/hooks';
import { Experiment } from './views/project/project';
import { AssistantChatHistory, ExperimentDefinition, ProjectDefinition } from './types';
import { AssistantView } from './views/assistant/assistant';

function Main() {

  const [projects, setProjects] = useState<ProjectDefinition[]>([]);
  const [experiments, setExperiments] = useState<ExperimentDefinition[]>([]);

  var config = {
    apiKey: "AIzaSyDWh5sExqNSMsT8Jj6-0q01j6KWL_UmX48",
    authDomain: "cloud32x.firebaseapp.com",
  };

  // Initialize Firebase
  const app = initializeApp(config);

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  // var currentUser: Signal<User | undefined> = signal(undefined);
  const [currentUser, setUser] = useState<User | undefined>();
  const [chats, setChats] = useState<AssistantChatHistory | undefined>(undefined);

  function sendCancelEvent() {
    //First, we initialize our event
    const event = new Event('dialogCancel');

    // Next, we dispatch the event.
    document.dispatchEvent(event);
  }

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Found user, going to home page.");
        setUser(user);

        if (window.location.href.endsWith("/static/") || window.location.href.endsWith("/sign-in") || window.location.href.endsWith("/register"))
          route("/home");

        // Load chat history
        fetch(import.meta.env.VITE_SERVICE_URL + "/data/chats/" + user.uid, {
          method: "GET",
          headers: {
            Accept: "application/json"
          },
        })
          .then((response) => {
            return response.json();
          })
          .then((data: AssistantChatHistory) => {
            setChats(data);
          })
          .catch((error: Error) => {
            console.log(error);
            setChats({
              id: user.uid,
              userEmail: user.email,
              userName: user.displayName,
              chats: []
            });
          });

      } else {
        console.log("No user found.");
        // User is signed out
        setUser(undefined);
        route("/");
      }
    });

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

    fetch(import.meta.env.VITE_SERVICE_URL + "/data/projects", {
      method: "GET",
      headers: {
        Accept: "application/json"
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data: { projects: ProjectDefinition[] }) => {
        setProjects(data.projects);
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

  function addProject(project: ProjectDefinition) {
    var newProjects: ProjectDefinition[] = projects;
    newProjects.push(project);

    setProjects(newProjects);
  }

  function addExperiment(experiment: ExperimentDefinition) {
    var newExperiements: ExperimentDefinition[] = experiments;
    newExperiements.push(experiment);

    setExperiments(newExperiements);
  }

  function updateChatHistory(chatHistory: AssistantChatHistory) {
    setChats(chatHistory);

    fetch(import.meta.env.VITE_SERVICE_URL + "/data/chats/" + chatHistory.id, {
      method: "POST",
      body: JSON.stringify(chatHistory),
      headers: {
        Accept: "application/json"
      },
    });
  }

  return (
    <div onClick={() => { sendCancelEvent() }}>
      {/* @ts-ignore */}
      <Router history={createHashHistory()}>
        <SignedOut path="/" user={currentUser} auth={auth} />
        <SignIn path="/sign-in" user={currentUser} auth={auth} registerUser={false} />
        <SignIn path="/register" user={currentUser} auth={auth} registerUser={true} />
        <SignInPassword path="/sign-in-password" user={currentUser} auth={auth} />
        <SignInRegister path="/register-email" user={currentUser} auth={auth} />
        <Home path="/home" user={currentUser} auth={auth} projects={projects} />
        <Projects path="/home" user={currentUser} auth={auth} experiments={experiments} />
        <ProjectNew path="/new-project" user={currentUser} auth={auth} addExperiment={addExperiment} addProject={addProject} />
        <ProjectNew2 path="/new-project-details" user={currentUser} auth={auth} addExperiment={addExperiment} addProject={addProject} />

        <Experiment path="/experiments/:id" id="" user={currentUser} auth={auth} getExperiment={getExperiment} />
        <NewExperiment path="/new-experiment" user={currentUser} auth={auth} addExperiment={addExperiment} />
        <AssistantView path="/assistant" user={currentUser} auth={auth} chats={chats} onChatUpdate={updateChatHistory} />
      </Router>
    </div>
  );
}

render(<Main />, document.getElementById('app') as HTMLElement)


