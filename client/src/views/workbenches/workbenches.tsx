import { Header } from "../../components/header/header"
import { MainMenu, MainMenuItem } from "../../components/main-menu/main-menu";

import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import wand from "../../assets/wand.svg";
import data from "../../assets/data.svg";
import jupyter from "../../assets/jupyter.png";
import slicer from "../../assets/slicer.png";
import vertex from "../../assets/vertex.png";
import gcp from "../../assets/gcp.png";

import "./workbenches.css";

import { Auth, User } from "firebase/auth";
import { route } from "preact-router";
import { WorkbenchDefinition } from "../../types";

export function Workbenches(props: { path: string, user: User | undefined, auth: Auth, workbenches: WorkbenchDefinition[] }) {

  return (
    <>
      <Header user={props.user} auth={props.auth} showSearch={true} />

      <MainMenu>
        <MainMenuItem item={{ id: "projects", text: "My Projects", icon: box, route: "/home", selected: false }} />
        <MainMenuItem item={{ id: "workbenches", text: "My Workbenches", icon: flask, route: "/workbenches", selected: true }} />
        <MainMenuItem item={{ id: "datasets", text: "Datasets", icon: data, route: "/datasets", selected: false }} />
        <MainMenuItem item={{ id: "assistant", text: "AI Assistant", icon: wand, route: "/assistant", selected: false }} />
      </MainMenu>

      <div class="main_panel">
        <div class="main_panel_header">
          Workbenches <span class="main_panel_header_top_button" onClick={() => route("/new-workbench")}>+ Create new</span>
        </div>
        <table class="standard_main_table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Organ</th>
              <th>Status</th>
              <th>Connect</th>
            </tr>
          </thead>
          <tbody>
            {props.workbenches.map((workbench) => (
              <tr onClick={() => route("/workbenches/" + workbench.id)}>
                <td>{workbench.name}</td>
                <td>{workbench.organ}</td>
                <td>{workbench.status}</td>
                <td onClick={(e) => { e.stopPropagation(); }}>
                  <img class="workbench_start_icon" title="Open Jupyter Labs" src={jupyter}></img>
                  <img class="workbench_start_icon" title="Open 3D Slicer" src={slicer}></img>
                  <img class="workbench_start_icon" title="Open Vertex AI" src={vertex}></img>
                  <img class="workbench_start_icon" title="Open Google Cloud" src={gcp}></img>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}