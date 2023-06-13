import { Auth, User } from "firebase/auth";
import { Header } from "../../components/header/header";
import { MainMenu, MainMenuItem } from "../../components/main-menu/main-menu";
import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import wand from "../../assets/wand.svg";

import { ExperimentDefinition } from "../../types"
import { useState } from "preact/hooks";

import "./experiment.css"

export function Experiment(props: { path: string, user: User | undefined, auth: Auth, id: string, getExperiment: (id: string) => ExperimentDefinition | undefined }) {

  const [exp,] = useState(props.getExperiment(props.id))

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
          {exp?.Name}
        </div>

        <div class="main_panel_description">
          {exp?.Description}
        </div>
      </div>
    </>
  )
}