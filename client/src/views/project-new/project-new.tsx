import { Header } from "../../components/header/header"
import { MainMenu, MainMenuItem } from "../../components/main-menu/main-menu";
import { InputField } from "../../components/input-field/input-field";
import { InputButton } from "../../components/input-button/input-button";
import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import sparkle_thinking from "../../assets/sparkle_thinking.gif";
import wand from "../../assets/wand.svg";
import data from "../../assets/data.svg";
import { useState } from 'preact/hooks';
import { User, Auth } from "firebase/auth";

import "./project-new.css"
import { route } from "preact-router";
import { ProjectDefinition } from "../../types";

export function ProjectNew(props: {
  path: string; user: User | undefined; auth: Auth;
  addProject: (project: ProjectDefinition) => void;
  currentProject: ProjectDefinition | undefined;
  setCurrentProject: (project: ProjectDefinition) => void;
}) {

  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [organ, setOrgan] = useState("");
  const [disease, setDisease] = useState("");
  const [code, setCode] = useState<{ name: string, type: string, code: string }[]>([]);
  const [milestones, setMilestones] = useState<{ name: string, date: string }[]>([]);
  const [team, setTeam] = useState("");
  const [duetMainThinking, setDuetMainThinking] = useState(false);
  const [duetCodeThinking, setDuetCodeThinking] = useState(false);

  const [selectedCode, setSelectedCode] = useState("");

  if (props.currentProject) {
    setDescription(props.currentProject.description);
  }

  function onDescriptionInput(newInput: string) {
    setDescription(newInput);

    setDuetMainThinking(true);
    setDuetCodeThinking(true);

    const now = new Date()
    const inFifteenDays = new Date(new Date(now).setDate(now.getDate() + 15))
    const inSixtyDays = new Date(new Date(now).setDate(now.getDate() + 60))
    const inNinetyDays = new Date(new Date(now).setDate(now.getDate() + 90))

    setMilestones([
      {
        name: "Projekt Definition",
        date: now.toLocaleString()
      },
      {
        name: "Projekt Start",
        date: inFifteenDays.toLocaleDateString()
      },
      {
        name: "Projekt Sprint 1",
        date: inSixtyDays.toLocaleDateString()
      },
    ])

    fetch(import.meta.env.VITE_SERVICE_URL + "/assistant/prompt", {
      body: JSON.stringify({
        "question": `Based on the following text, Based on the following text, create a good product name in three words in plain text.

          Here's the text: ${newInput}`,
        "model": "text-bison",
        "output": "TEXT"
      }),
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data: { question: string, answer: string }) => {
        setName(data.answer);
      });

    fetch(import.meta.env.VITE_SERVICE_URL + "/assistant/prompt", {
      body: JSON.stringify({
        "question": `Based on the following text, what is the primary organ in one or two words?

          Here's the text: ${newInput}`,
        "model": "text-bison",
        "output": "TEXT"
      }),
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data: { question: string, answer: string }) => {
        setOrgan(data.answer);
      });

    fetch(import.meta.env.VITE_SERVICE_URL + "/assistant/prompt", {
      body: JSON.stringify({
        "question": `Based on the following text, what is the primary disease being diagnosed in one or two words?

          Here's the text: ${newInput}`,
        "model": "text-bison",
        "output": "TEXT"
      }),
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data: { question: string, answer: string }) => {
        setDisease(data.answer);
        setDuetMainThinking(false);
      });

    fetch(import.meta.env.VITE_SERVICE_URL + "/assistant/code", {
      body: JSON.stringify({
        "question": `Write a python module based on the following description.

          ${newInput}`
      }),
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data: { question: string, answer: string }) => {
        setDuetCodeThinking(false);
        setCode([{
          "name": "Python model 1",
          "type": "Python 3",
          "code": data.answer
        }]);
      });
  }

  function submit() {

    if (!description) {
      alert("Please provide a description for the project!");
    }
    else {

      // Send wait event to display progress bar
      document.dispatchEvent(new Event("showWait"));

      fetch(import.meta.env.VITE_SERVICE_URL + "/language/entities", {
        body: JSON.stringify({
          "description": originalDescription
        }),
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data: { description: string, entities: [{ name: string, type: number, salience: number, isHumanOrgan: string, isDisease: string }] }) => {

          let generatedTitle: string = "";
          let organs: string[] = [];
          let usedWords: string[] = [];
          let disease: string = "";

          for (var i = 0; i < data.entities.length; i++) {
            let newWord = data.entities[i].name.toLowerCase();

            let wordAlreadyUsed = false;
            for (let p = 0; p < usedWords.length; p++) {
              if (usedWords[p].includes(newWord)) {
                wordAlreadyUsed = true;
                break;
              }
            }

            if (!wordAlreadyUsed && usedWords.length <= 3) {
              if (generatedTitle === "")
                generatedTitle = newWord[0].toUpperCase() + newWord.slice(1).toLowerCase()
              else
                generatedTitle = generatedTitle + " " + newWord[0].toUpperCase() + newWord.slice(1).toLowerCase()

              usedWords.push(newWord);
            }

            if (data.entities[i].isHumanOrgan === "true") {
              organs.push(newWord[0].toUpperCase() + newWord.slice(1).toLowerCase())
            };

            if (data.entities[i].isDisease === "true") {
              disease = newWord[0].toUpperCase() + newWord.slice(1).toLowerCase()
            };
          }

          let newProject = props.currentProject;
          if (newProject === undefined) {
            newProject = {
              id: "",
              name: "",
              description: "",
              status: "Initializing",
              team: "",
              organs: organs,
              disease: disease,
              docs: [
                {
                  name: "Software Development Plan",
                  content: ""
                }, {
                  name: "Software Architecture Document",
                  content: ""
                }, {
                  name: "Software Requirements Document",
                  content: ""
                }, {
                  name: "Software Verification Plan",
                  content: ""
                }
              ]
            }
          }

          newProject.id = generatedTitle.toLowerCase().replace(" ", "_") + "_" + (new Date()).getTime().toString()
          newProject.name = generatedTitle;
          newProject.description = description;
          props.setCurrentProject(newProject);

          route("/new-project-details")
        });
    }
  }

  return (
    <>
      <Header user={props.user} auth={props.auth} showSearch={true} />

      <MainMenu>
        <MainMenuItem item={{ id: "environments", text: "My Projects", icon: box, route: "/home", selected: true }} />
        <MainMenuItem item={{ id: "experiments", text: "My Workbenches", icon: flask, route: "/workbenches", selected: false }} />
        <MainMenuItem item={{ id: "datasets", text: "Datasets", icon: data, route: "/datasets", selected: false }} />
        <MainMenuItem item={{ id: "assistant", text: "AI Assistant", icon: wand, route: "/assistant", selected: false }} />
      </MainMenu>

      <div class="project_new_main_panel">

        <div class="project_new_main_panel_content" autocomplete="off">
          {!name
            ?
            <div class="project_new_main_panel_header">
              New Project
            </div>
            :
            <div class="project_new_main_panel_header">
              {name}
            </div>
          }

          <InputField id="project_new_description" placeholder="Project Description"
            focus={true} type="multiline" rows={12}
            value={description} setValue={onDescriptionInput}
            duetEnabled={true} duetInitialPrompt={"Write a concise description of a SaMD solution to detect liver lesions with 96% accuracy."}
          />
          <br />

          {duetMainThinking &&
            <img class="project_new_duet_thinking_icon" src={sparkle_thinking}></img>
          }

          <InputField id="project_name" placeholder="Name" focus={false} type="singleline"
            rows={1} value={name} setValue={setName}
            duetEnabled={true} duetInitialPrompt="Create an innovative name for a new SaMD product in one word." />

          <InputField id="project_organ" placeholder="Organ" focus={false} type="singleline"
            rows={1} value={organ} setValue={setOrgan} />

          <InputField id="project_disease" placeholder="Disease" focus={false} type="singleline"
            rows={1} value={disease} setValue={setDisease} />

          <br />

          {(duetCodeThinking || code.length > 0) &&
            <div>
              <h2>Initial Code</h2>
              {duetCodeThinking &&
                <img class="project_new_duet_thinking_icon" src={sparkle_thinking}></img>
              }
              <table class="styled-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Language</th>
                  </tr>
                </thead>
                <tbody>
                  {code.map((c) => (
                    <tr onClick={() => { setSelectedCode(c.code) }}>
                      <td>{c.name}</td>
                      <td>{c.type}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }

          <h2>Team</h2>
          <InputField id="project_disease" placeholder="Team" focus={false} type="singleline"
            rows={1} value={team} setValue={setTeam} />

          <br />

          {milestones.length > 0 &&
            <div>
              <h2>Milestones</h2>
              <table class="styled-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {milestones.map((c) => (
                    <tr>
                      <td>{c.name}</td>
                      <td>{c.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          }

          {selectedCode &&
            <div class="popup_dialog" onClick={() => { setSelectedCode(""); }}>
              <div class="popup_dialog_content" contentEditable={true} dangerouslySetInnerHTML={{ __html: selectedCode }} onClick={(e) => { e.stopPropagation(); }}>
              </div>
            </div>
          }

        </div>
        <div class="bottom_buttons_panel">
          <InputButton text="Submit" type="primary" action={() => submit()} />
          <InputButton text="Cancel" type="secondary" action={() => route("/home")} />
        </div>
      </div>
    </>
  )
}