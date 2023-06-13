import { Header } from "../../components/header/header"
import { MainMenu, MainMenuItem } from "../../components/main-menu/main-menu";

import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import wand from "../../assets/wand.svg";

import "./experiments.css";

import { Auth, User } from "firebase/auth";
import { route } from "preact-router";

export function Experiments(props: { path: string, user: User | undefined, auth: Auth, experiments: { Id: string, Name: string, Organs: string, Status: string, LastUpdated: string }[] }) {

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
          Experiments <span class="main_panel_header_top_button" onClick={() => route("/new-experiment")}>+ Create</span>
        </div>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Organs</th>
              <th>Status</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {props.experiments.map((experiment) => (
              <tr onClick={() => route("/experiments/" + experiment.Id)}>
                <td>{experiment.Name}</td>
                <td>{experiment.Organs}</td>
                <td>{experiment.Status}</td>
                <td>{experiment.LastUpdated}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}