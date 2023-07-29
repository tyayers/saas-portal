import { Header } from "../../components/header/header"
import { MainMenu, MainMenuItem } from "../../components/main-menu/main-menu";

import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import wand from "../../assets/wand.svg";

import "./projects.css";

import { Auth, User } from "firebase/auth";
import { route } from "preact-router";
import { ExperimentDefinition } from "../../types";

export function Projects(props: { path: string, user: User | undefined, auth: Auth, experiments: ExperimentDefinition[] }) {

  return (
    <>
      <Header user={props.user} auth={props.auth} showSearch={true} />

      <MainMenu>
        <MainMenuItem item={{ id: "environments", text: "My Projects", icon: box, route: "/home", selected: false }} />
        <MainMenuItem item={{ id: "experiments", text: "My Workbenches", icon: flask, route: "/experiments", selected: true }} />
        <MainMenuItem item={{ id: "assistant", text: "AI Assistant", icon: wand, route: "/assistant", selected: false }} />
      </MainMenu>

      <div class="main_panel">
        <div class="main_panel_header">
          Workbenches <span class="main_panel_header_top_button" onClick={() => route("/new-experiment")}>+ Create new</span>
        </div>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Organ</th>
              <th>Status</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {props.experiments.map((experiment) => (
              <tr onClick={() => route("/experiments/" + experiment.id)}>
                <td>{experiment.name}</td>
                <td>{experiment.organ}</td>
                <td>{experiment.status}</td>
                <td>{experiment.lastUpdated}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}