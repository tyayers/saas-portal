import { Router, route } from 'preact-router';
import { useEffect, useState } from 'preact/hooks';
import topbar from 'topbar';

import './main.css'

import { createHashHistory } from 'history';
import { render } from 'preact'
import { initializeApp } from "firebase/app";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";

import { SignedOut } from './views/signed-out/signed-out';
import { SignIn } from './views/sign-in/sign-in';
import { SignInPassword } from './views/sign-in-password/sign-in-password';
import { SignInRegister } from './views/register-password/register-password';

import { Projects } from './views/projects/projects';
import { ProjectNew } from './views/project-new/project-new';
import { ProjectNew2 } from './views/project-new/project-new-2';
import { Project } from './views/project/project';

import { Datasets } from './views/datasets/datasets';

import { Workbenches } from './views/workbenches/workbenches';
import { Workbench } from './views/workbench/workbench';
import { NewWorkbench } from './views/workbench-new/workbench-new';

import { AssistantChatHistory, WorkbenchDefinition, ProjectDefinition, DatasetDefinition } from './types';
import { AssistantView } from './views/assistant/assistant';

const firebaseKey = import.meta.env.VITE_FIREBASE_KEY;
const firebaseAuthDomain = import.meta.env.VITE_FIREBASE_DOMAIN;

function Main() {

  const [projects, setProjects] = useState<ProjectDefinition[]>([]);
  const [workbenches, setWorkbenches] = useState<WorkbenchDefinition[]>([]);
  const [datasets] = useState<DatasetDefinition[]>([
    {
      "id": "lung_ctscans_v3",
      "name": "Lung CT Scans version 3",
      "organs": ["Lung"],
      "status": "Level 1 Accessable",
      "source": "Synthetic Data Generation",
      "lastUpdated": ""
    }
  ]);

  var config = {
    apiKey: firebaseKey,
    authDomain: firebaseAuthDomain,
  };

  // Initialize Firebase
  const app = initializeApp(config);

  // Initialize Firebase Authentication and get a reference to the service
  const auth = getAuth(app);
  const [currentUser, setUser] = useState<User | undefined>();
  const [currentProject, setCurrentProject] = useState<ProjectDefinition | undefined>();

  const [chats, setChats] = useState<AssistantChatHistory | undefined>(undefined);

  function sendCancelEvent() {
    //First, we initialize our event
    const event = new Event('dialogCancel');

    // Next, we dispatch the event.
    document.dispatchEvent(event);
  }

  topbar.config({
    autoRun: true,
    barThickness: 3,
    barColors: {
      '0': 'rgba(26,  188, 156, .9)',
      '.25': 'rgba(52,  152, 219, .9)',
      '.50': 'rgba(241, 196, 15,  .9)',
      '.75': 'rgba(230, 126, 34,  .9)',
      '1.0': 'rgba(211, 84,  0,   .9)'
    },
    shadowBlur: 10,
    shadowColor: 'rgba(0,   0,   0,   .6)',
    className: 'topbar'
  });

  document.addEventListener("showWait", () => {
    topbar.show();
  });

  document.addEventListener("hideWait", () => {
    topbar.hide();
  });

  document.addEventListener("reloadData", () => {
    loadData();
  });

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

    loadData()
  }, []);

  function loadData() {
    fetch(import.meta.env.VITE_SERVICE_URL + "/data/experiments", {
      method: "GET",
      headers: {
        Accept: "application/json"
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data: { experiments: WorkbenchDefinition[] }) => {
        setWorkbenches(data.experiments);
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
  }

  function getWorkbench(id: string): WorkbenchDefinition | undefined {
    var result = undefined;

    for (var i = 0; i < workbenches.length; i++) {
      if (workbenches[i].id === id)
        result = workbenches[i];
    }

    return result;
  }

  function getProject(id: string): ProjectDefinition | undefined {
    var result = undefined;

    for (var i = 0; i < projects.length; i++) {
      if (projects[i].id === id)
        result = projects[i];
    }

    return result;
  }

  function setProject(project: ProjectDefinition) {
    setCurrentProject(project);
  }

  function addProject(project: ProjectDefinition) {
    var newProjects: ProjectDefinition[] = projects;
    newProjects.push(project);

    setProjects(newProjects);
  }

  function addWorkbench(experiment: WorkbenchDefinition) {
    var newWorkbenches: WorkbenchDefinition[] = workbenches;
    newWorkbenches.push(experiment);

    setWorkbenches(newWorkbenches);
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

        <Projects path="/home" user={currentUser} auth={auth} projects={projects} />
        <ProjectNew path="/new-project" user={currentUser} auth={auth} addProject={addProject} currentProject={currentProject} setCurrentProject={setProject} />
        <Project path="/projects/:id" id="" getProject={getProject} user={currentUser} auth={auth} />

        <Workbenches path="/workbenches" user={currentUser} auth={auth} workbenches={workbenches} />
        <Workbench path="/workbenches/:id" id="" user={currentUser} auth={auth} getWorkbench={getWorkbench} />
        <NewWorkbench path="/new-workbench" user={currentUser} auth={auth} addExperiment={addWorkbench} />

        <Datasets path="/datasets" user={currentUser} auth={auth} datasets={datasets} />

        <AssistantView path="/assistant" user={currentUser} auth={auth} chats={chats} onChatUpdate={updateChatHistory} />
      </Router>
    </div>
  );
}

render(<Main />, document.getElementById('app') as HTMLElement)


