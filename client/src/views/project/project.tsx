import { Header } from "../../components/header/header"
import { MainMenu, MainMenuItem } from '../../components/main-menu/main-menu';

import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import wand from "../../assets/wand.svg";
import data from "../../assets/data.svg";
import { Auth, User } from "firebase/auth";
import { ProjectDefinition } from "../../types";
import { useEffect, useState } from "preact/hooks";

export function Project(props: { id: string; getProject: (id: string) => ProjectDefinition | undefined; path: string, user: User | undefined, auth: Auth }) {

  const [project, setProject] = useState(props.getProject(props.id))

  useEffect(() => {
    if (!project) setProject(props.getProject(props.id));
  })

  return (
    <>
      <Header user={props.user} auth={props.auth} showSearch={true} />

      <MainMenu>
        <MainMenuItem item={{ id: "environments", text: "My Projects", icon: box, route: "/home", selected: true }} />
        <MainMenuItem item={{ id: "experiments", text: "My Workbenches", icon: flask, route: "/experiments", selected: false }} />
        <MainMenuItem item={{ id: "datasets", text: "Datasets", icon: data, route: "/datasets", selected: false }} />
        <MainMenuItem item={{ id: "assistant", text: "AI Assistant", icon: wand, route: "/assistant", selected: false }} />
      </MainMenu>

      <div class="standard_main_panel">
        <div class="standard_main_panel_header">
          {project?.name}
        </div>
        <h3>Overview</h3>
        <span class="standard_main_paragraph"><b>Description: </b><span contentEditable={true}>{project?.description}</span></span>
        {project?.organs &&
          <span class="standard_main_paragraph"><b>Organs: </b><span contentEditable={true}>{project?.organs}</span></span>
        }
        {project?.organs &&
          <span class="standard_main_paragraph"><b>Status: </b>{project?.status}</span>
        }
        {project?.team &&
          <span class="standard_main_paragraph"><b>Team: </b>{project?.team}</span>
        }

        <h3>Regulatory Documentation</h3>
      </div>
    </>
  )
}