import { Header } from "../../components/header/header"
import { MainMenu, MainMenuItem } from '../../components/main-menu/main-menu';

import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import wand from "../../assets/wand.svg";
import data from "../../assets/data.svg";
import { Auth, User } from "firebase/auth";
import { ProjectDefinition } from "../../types";
import { useEffect, useState } from "preact/hooks";

import "./project.css";

export function Project(props: { id: string; getProject: (id: string) => ProjectDefinition | undefined; path: string, user: User | undefined, auth: Auth }) {

  const [project, setProject] = useState(props.getProject(props.id));
  const [docContent, setDocContent] = useState("");
  const [docVisible, setDocVisible] = useState(false);

  useEffect(() => {
    if (!project) {
      var new_project = props.getProject(props.id);

      if (new_project) {
        setProject(new_project);
      }

    }
  })

  return (
    <>
      <Header user={props.user} auth={props.auth} showSearch={true} />

      <MainMenu>
        <MainMenuItem item={{ id: "projects", text: "My Projects", icon: box, route: "/home", selected: true }} />
        <MainMenuItem item={{ id: "workbenches", text: "My Workbenches", icon: flask, route: "/workbenches", selected: false }} />
        <MainMenuItem item={{ id: "datasets", text: "Datasets", icon: data, route: "/datasets", selected: false }} />
        <MainMenuItem item={{ id: "assistant", text: "AI Assistant", icon: wand, route: "/assistant", selected: false }} />
      </MainMenu>

      <div class="standard_main_panel">
        <div class="standard_main_panel_header">
          {project?.name}
        </div>
        <h3>Overview</h3>
        <span class="standard_main_paragraph"><b>Description: </b><span>{project?.description}</span></span>
        {project?.organs &&
          <span class="standard_main_paragraph"><b>Organs: </b><span>{project?.organs}</span></span>
        }
        {project?.disease &&
          <span class="standard_main_paragraph"><b>Disease: </b>{project?.disease}</span>
        }
        {project?.team &&
          <span class="standard_main_paragraph"><b>Team: </b>{project?.team}</span>
        }

        <h3>Regulatory Documentation</h3>

        <table class="standard_main_table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {project?.docs && project.docs.map((doc: { name: string, content: string }) => (
              <tr onClick={() => { if (doc.content) { setDocContent(doc.content); setDocVisible(true); } }}>
                <td>{doc.name}</td>
                {doc.content ?
                  <td>Generated</td>
                  :
                  <td>Generating...</td>
                }
                <td>April 23rd, 2023</td>
              </tr>
            ))
            }
          </tbody>
        </table>

      </div>

      {docVisible &&
        <div class="project_popup" onClick={() => { setDocVisible(false); }}>
          <div class="project_popup_doc" dangerouslySetInnerHTML={{ __html: docContent }} onClick={(e) => { e.stopPropagation(); }}>

          </div>
        </div>
      }

    </>
  )
}