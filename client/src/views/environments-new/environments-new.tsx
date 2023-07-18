import { Header } from "../../components/header/header"
import { MainMenu, MainMenuItem } from "../../components/main-menu/main-menu";
import { InputField } from "../../components/input-field/input-field";
import { InputButton } from "../../components/input-button/input-button";
import { InputSelect } from "../../components/input-select/input-select";
import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import wand from "../../assets/wand.svg";
import { useState } from 'preact/hooks';
import { User, Auth } from "firebase/auth";

import "./environments-new.css"
import { route } from "preact-router";
import { ExperimentDefinition, ProjectDefinition } from "../../types";

export function NewEnvironment(props: { path: string; user: User | undefined; auth: Auth; addExperiment: (experiment: ExperimentDefinition) => void; addProject: (project: ProjectDefinition) => void }) {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("global");
  const [region, setRegion] = useState("europe-west4");
  const [size, setSize] = useState("xs");

  function submit() {

    if (!name) {
      alert("Please provide a name for the project!");
    }
    else if (!description) {
      alert("Please provide a description for the project!");
    }
    else {
      var newProject: ProjectDefinition = {
        id: name.toLowerCase().replace(" ", "_") + "_" + (new Date()).getTime().toString(),
        name: name,
        description: description,
        locationType: location,
        locationRegion: region,
        size: size
      }

      fetch(import.meta.env.VITE_SERVICE_URL + "/data/projects", {
        body: JSON.stringify(newProject),
        method: "POST",
        headers: {
          Accept: "application/json"
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data: ProjectDefinition) => {
          console.log("Successfully saved experiement to server.")
          console.log(data);

          props.addProject(data);
          route("/home");
        });
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

      <div class="environment_new_main_panel">

        <form class="main_panel_content" autocomplete="off">

          <div class="main_panel_header">
            New Project
          </div>

          <InputField id="experiment_name" placeholder="Name" focus={true} type="singleline" rows={1} value={name} setValue={setName} />
          <InputField id="experiment_description" placeholder="Description" focus={false} type="multiline" rows={4} value={description} setValue={setDescription} />

          <div class="environment_location_select">
            <div class="environment_location_select_label">Location</div>
            <InputButton text={"Global"} action={() => { setLocation("global"); setRegion("europe-west4"); }} type={location == "global" ? "primary" : "secondary"}></InputButton>
            <InputButton text={"Sovereign"} action={() => { setLocation("sovereign"); setRegion("germany"); }} type={location == "sovereign" ? "primary" : "secondary"}></InputButton>
            <InputButton text={"Edge"} action={() => { setLocation("edge"); setRegion("berlin"); }} type={location == "edge" ? "primary" : "secondary"}></InputButton>

            {location === "global" &&
              <InputSelect label="Region" defaultValue="europe-west4" onValueChanged={setRegion}>
                <option value="europe-west4">Europe Finland</option>
                <option value="us-central1">US Iowa</option>
              </InputSelect>
            }

            {location === "sovereign" &&
              <InputSelect label="Region" defaultValue="germany" onValueChanged={setRegion}>
                <option value="germany">Germany T-Systems</option>
                <option value="france">France Thales</option>
              </InputSelect>
            }

            {location === "edge" &&
              <InputSelect label="Region" defaultValue="berlin" onValueChanged={setRegion}>
                <option value="berlin">Berlin Edge Site 1</option>
                <option value="amsterdam">Amsterdam Edge Site 1</option>
              </InputSelect>
            }
          </div>

          <div class="environment_location_select">
            <div class="environment_location_select_label">Capacity</div>
            <InputSelect label="Size" defaultValue={size} onValueChanged={setSize}>
              <option value="xs">1xCPU 4 GB RAM</option>
              <option value="m">4xCPU 16 GB RAM</option>
              <option value="l">16xCPU 32 GB RAM</option>
              <option value="lgpu">16xCPU 32 GB RAM GPU</option>
              <option value="ltpu">16xCPU 32 GB RAM TPU</option>
            </InputSelect>
          </div>

        </form>
        <div class="bottom_buttons_panel">
          <InputButton text="Submit" type="primary" action={() => submit()} />
          <InputButton text="Cancel" type="secondary" action={() => route("/home")} />
        </div>
      </div>
    </>
  )
}