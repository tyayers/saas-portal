import { Header } from "../../components/header/header"
import { MainMenu, MainMenuItem } from "../../components/main-menu/main-menu";
import { InputField } from "../../components/input-field/input-field";
import { InputButton } from "../../components/input-button/input-button";

import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import wand from "../../assets/wand.svg";
import { useState } from 'preact/hooks';
import { User, Auth } from "firebase/auth";

import "./experiments-new.css"
import { route } from "preact-router";
import { ExperimentDefinition } from "../../types";

export function NewExperiment(props: { path: string; user: User | undefined; auth: Auth; addExperiment: (experiment: ExperimentDefinition) => void }) {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [organs, setOrgans] = useState("");

  function addExperiment() {

    var exp: ExperimentDefinition = {
      Id: name.toLowerCase().replace(" ", "_") + "_" + (new Date()).getTime().toString(),
      Name: name,
      Description: "",
      Organs: organs,
      Status: "Created",
      LastUpdated: (new Date()).toString()
    }

    props.addExperiment(exp);
    route("/experiments");
  }

  return (
    <>
      <Header user={props.user} auth={props.auth} />

      <MainMenu>
        <MainMenuItem item={{ id: "environments", text: "My Environments", icon: box, route: "/home", selected: false }} />
        <MainMenuItem item={{ id: "experiments", text: "My Experiments", icon: flask, route: "/experiments", selected: true }} />
        <MainMenuItem item={{ id: "assistant", text: "AI Assistant", icon: wand, route: "/assistant", selected: false }} />
      </MainMenu>

      <div class="main_panel">
        <div class="main_panel_header">
          New Experiment
        </div>
        <div class="input_form">
          <form id="newExperimentForm" autocomplete="off">
            <InputField id="experiment_name" placeholder="Name" focus={true} type="singleline" rows={1} value={name} setValue={setName} />
            <InputField id="experiment_description" placeholder="Description" focus={false} type="multiline" rows={4} value={description} setValue={setDescription} />
            <InputField id="experiment_organs" placeholder="Organs" focus={false} type="multiline" rows={2} value={organs} setValue={setOrgans} />
          </form>
        </div>
        <div class="bottom_buttons_panel">
          <InputButton text="Submit" type="primary" action={() => addExperiment()} />
          <InputButton text="Cancel" type="secondary" action={() => history.back()} />
        </div>
      </div>
    </>
  )
}