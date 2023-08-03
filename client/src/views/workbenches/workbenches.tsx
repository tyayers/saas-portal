import { Header } from "../../components/header/header"
import { MainMenu, MainMenuItem } from "../../components/main-menu/main-menu";

import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import wand from "../../assets/wand.svg";

import "./workbenches.css";

import { Auth, User } from "firebase/auth";
import { route } from "preact-router";
import { WorkbenchDefinition } from "../../types";

export function Workbenches(props: { path: string, user: User | undefined, auth: Auth, workbenches: WorkbenchDefinition[] }) {

  return (
    <>
      <Header user={props.user} auth={props.auth} showSearch={true} />

      <MainMenu>
        <MainMenuItem item={{ id: "environments", text: "My Projects", icon: box, route: "/home", selected: false }} />
        <MainMenuItem item={{ id: "experiments", text: "My Workbenches", icon: flask, route: "/workbenches", selected: true }} />
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
            {props.workbenches.map((workbench) => (
              <tr onClick={() => route("/workbenches/" + workbench.id)}>
                <td>{workbench.name}</td>
                <td>{workbench.organ}</td>
                <td>{workbench.status}</td>
                <td>{workbench.lastUpdated}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}