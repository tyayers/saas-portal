import { Header } from "../../components/header/header"
import { MainMenu, MainMenuItem } from "../../components/main-menu/main-menu";

import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import wand from "../../assets/wand.svg";
import data from "../../assets/data.svg";

import "./datasets.css";

import { Auth, User } from "firebase/auth";
import { DatasetDefinition } from "../../types";

export function Datasets(props: { path: string, user: User | undefined, auth: Auth, datasets: DatasetDefinition[] }) {

  return (
    <>
      <Header user={props.user} auth={props.auth} showSearch={true} />

      <MainMenu>
        <MainMenuItem item={{ id: "projects", text: "My Projects", icon: box, route: "/home", selected: false }} />
        <MainMenuItem item={{ id: "workbenches", text: "My Workbenches", icon: flask, route: "/workbenches", selected: false }} />
        <MainMenuItem item={{ id: "datasets", text: "Datasets", icon: data, route: "/datasets", selected: true }} />
        <MainMenuItem item={{ id: "assistant", text: "AI Assistant", icon: wand, route: "/assistant", selected: false }} />
      </MainMenu>

      <div class="main_panel">
        <div class="main_panel_header">
          Datasets
        </div>
        <table class="styled-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Organs</th>
              <th>Source</th>
              <th>Status</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {props.datasets.map((dataset) => (
              <tr>
                <td>{dataset.name}</td>
                <td>{dataset.organs}</td>
                <td>{dataset.source}</td>
                <td>{dataset.status}</td>
                <td>{dataset.lastUpdated}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}