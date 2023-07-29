import { Header } from "../../components/header/header"
import { MainMenu, MainMenuItem } from "../../components/main-menu/main-menu";
import { InputField } from "../../components/input-field/input-field";
import { InputButton } from "../../components/input-button/input-button";
import { InputSelect } from "../../components/input-select/input-select";
import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import sparkle from "../../assets/sparkle.gif";
import sparkle_thinking from "../../assets/sparkle_thinking.gif";
import wand from "../../assets/wand.svg";
import { useState } from 'preact/hooks';
import { User, Auth } from "firebase/auth";

import "./project-new.css"
import { route } from "preact-router";
import { ExperimentDefinition, ProjectDefinition } from "../../types";

export function ProjectNew(props: { path: string; user: User | undefined; auth: Auth; addExperiment: (experiment: ExperimentDefinition) => void; addProject: (project: ProjectDefinition) => void }) {

  const [name, setName] = useState("");
  const [originalDescription, setOriginalDescription] = useState("");
  const [description, setDescription] = useState("");
  const [descriptionHelpText, setDescriptionHelpText] = useState("First, type a simple description of your project. Click AI Assist for a generated description from your initial input.");
  const [genDescription, setGenDescription] = useState("");
  const [displayGenDescription, setDisplayGenDescription] = useState(false);
  const [genProcessing, setGenProcessing] = useState(false);
  const [location, setLocation] = useState("global");
  const [region, setRegion] = useState("europe-west4");
  const [size, setSize] = useState("xs");

  function onDescriptionInput(newInput: string) {
    setDescription(newInput);
  }

  function onAIRemix() {
    var searchText: string = "";

    if (originalDescription == "") {
      setOriginalDescription(description);
      searchText = description;
    }
    else {
      searchText = originalDescription;
    }

    setGenProcessing(true);
    fetch(import.meta.env.VITE_SERVICE_URL + "/assistant/prompt", {
      body: JSON.stringify({
        "question": `Generate a paragraph summary of 
             a medical software product that ${searchText}.`,
        "model": "text-bison"

      }),
      method: "POST",
      headers: {
        Accept: "application/json"
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data: { question: string, answer: string }) => {
        setDescription(data.answer);
        setDescriptionHelpText("You can click AI Remix again for another try, or undo to get the best description.");
        setGenProcessing(false);
        // setDisplayGenDescription(true);
        //document.getElementById("project_new_generated_text").innerText = data.answer
        //setGenDescription(data.answer);
      });
  }

  function submit() {

    if (!description) {
      alert("Please provide a description for the project!");
    }
    else {
      route("/new-project-details")
    }
  }

  return (
    <>
      <Header user={props.user} auth={props.auth} showSearch={true} />

      <MainMenu>
        <MainMenuItem item={{ id: "environments", text: "My Projects", icon: box, route: "/home", selected: true }} />
        <MainMenuItem item={{ id: "experiments", text: "My Workbenches", icon: flask, route: "/experiments", selected: false }} />
        <MainMenuItem item={{ id: "assistant", text: "AI Assistant", icon: wand, route: "/assistant", selected: false }} />
      </MainMenu>

      <div class="project_new_main_panel">

        <div class="project_new_main_panel_content" autocomplete="off">

          <div class="project_new_main_panel_header">
            New Project
          </div>

          <InputField id="project_new_description" placeholder="Project Description"
            focus={true} type="multiline" rows={12}
            value={description} setValue={onDescriptionInput}
            helpText={descriptionHelpText}
          />

          {/* {displayGenDescription &&

            <div class="project_new_gen_description_panel">
              <InputField id="project_new_gen_description" placeholder="AI Generated Description"
                focus={true} type="multiline" rows={14}
                value={genDescription} setValue={setGenDescription}
                helpText="This AI generated description will also be saved with the project. You can use it, remix it, or ignore it at any time."
              />
            </div>
          } */}

          <div class="project_new_generated_description">

            <button onClick={onAIRemix} title="Click to generate AI version" class="project_new_generated_button">
              {genProcessing
                ?
                <img class="project_new_gen_button_icon" src={sparkle_thinking}></img>
                :
                <img class="project_new_gen_button_icon" src={wand}></img>
              }
              <span class="project_new_generated_button">AI Assist</span>
            </button>

            {/* <InputField id="project_generated_description" placeholder="AI Assistant Version"
              focus={false} type="multiline" rows={10}
              value={genDescription} setValue={setGenDescription}
            /> */}

          </div>
        </div>
        <div class="bottom_buttons_panel">
          <InputButton text="Next" type="primary" action={() => submit()} />
          <InputButton text="Cancel" type="secondary" action={() => route("/home")} />
        </div>
      </div>
    </>
  )
}