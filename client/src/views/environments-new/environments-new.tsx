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
import { ExperimentDefinition } from "../../types";

export function NewEnvironment(props: { path: string; user: User | undefined; auth: Auth; addExperiment: (experiment: ExperimentDefinition) => void }) {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("global");

  function addExperiment() {

    // var exp: ExperimentDefinition = {
    //   id: name.toLowerCase().replace(" ", "_") + "_" + (new Date()).getTime().toString(),
    //   name: name,
    //   description: description,
    //   organ: organ,
    //   status: "Created",
    //   lastUpdated: (new Date()).toString(),
    //   docs: {}
    // }

    // fetch(import.meta.env.VITE_SERVICE_URL + "/data/experiments", {
    //   body: JSON.stringify(exp),
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json"
    //   },
    // })
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data: ExperimentDefinition) => {
    //     console.log("Successfully saved experiement to server.")
    //     console.log(data);

    //     props.addExperiment(data);
    //     route("/experiments");
    //   });
  }

  return (
    <>
      <Header user={props.user} auth={props.auth} showSearch={true} />

      <MainMenu>
        <MainMenuItem item={{ id: "environments", text: "My Environments", icon: box, route: "/home", selected: true }} />
        <MainMenuItem item={{ id: "experiments", text: "My Experiments", icon: flask, route: "/experiments", selected: false }} />
        <MainMenuItem item={{ id: "assistant", text: "AI Assistant", icon: wand, route: "/assistant", selected: false }} />
      </MainMenu>

      <div class="main_panel">
        <div class="main_panel_header">
          New Environment
        </div>
        <div class="input_form">
          <form id="newExperimentForm" autocomplete="off" noValidate>
            <InputField id="experiment_name" placeholder="Name" focus={true} type="singleline" rows={1} value={name} setValue={setName} />
            <InputField id="experiment_description" placeholder="Description" focus={false} type="multiline" rows={4} value={description} setValue={setDescription} />

            <div>
              <InputButton text={"Global Cloud"} action={() => { setLocation("global"); }} type={location == "global" ? "primary" : "secondary"}></InputButton>
              <InputButton text={"Sovereign Cloud"} action={() => { setLocation("sovereign"); }} type={location == "sovereign" ? "primary" : "secondary"}></InputButton>
              <InputButton text={"Edge Cloud"} action={() => { setLocation("edge"); }} type={location == "edge" ? "primary" : "secondary"}></InputButton>
            </div>

            <InputSelect />
          </form>
        </div>
        <div class="bottom_buttons_panel">
          <InputButton text="Submit" type="primary" action={() => addExperiment()} />
          <InputButton text="Cancel" type="secondary" action={() => route("/home")} />
        </div>
      </div>
    </>
  )
}