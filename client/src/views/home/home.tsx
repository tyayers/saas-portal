import { Header } from "../../components/header/header"
import { MainMenu, MainMenuItem } from '../../components/main-menu/main-menu';

import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import wand from "../../assets/wand.svg";
import data from "../../assets/data.svg";

import "./home.css";

import { Auth, User } from "firebase/auth";
import { route } from "preact-router";
import { ProjectDefinition } from "../../types";

export function Home(props: { path: string, user: User | undefined, auth: Auth, projects: ProjectDefinition[] }) {

  return (
    <>
      <Header user={props.user} auth={props.auth} showSearch={true} />

      <MainMenu>
        <MainMenuItem item={{ id: "environments", text: "My Projects", icon: box, route: "/home", selected: true }} />
        <MainMenuItem item={{ id: "experiments", text: "My Workbenches", icon: flask, route: "/experiments", selected: false }} />
        <MainMenuItem item={{ id: "datasets", text: "Datasets", icon: data, route: "/datasets", selected: false }} />
        <MainMenuItem item={{ id: "assistant", text: "AI Assistant", icon: wand, route: "/assistant", selected: false }} />
      </MainMenu>

      <div class="main_panel">
        <div class="main_panel_header">
          Projects <span class="main_panel_header_top_button" onClick={() => route("/new-environment")}>+ Create new</span>
        </div>
        {props.projects.map((project) => (
          <div class="main_panel_item">
            <div class="main_panel_item_header1">{project.name}</div>
            <div class="main_panel_item_header2"><b>Description:</b> {project.description}</div>
            <div class="main_panel_item_header2"><b>Location:</b> {project.locationType}</div>
            <div class="main_panel_item_header2"><b>Region:</b> {project.locationRegion}</div>
            <div class="main_panel_item_header2"><b>Size:</b> {project.size.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </>
  )
}