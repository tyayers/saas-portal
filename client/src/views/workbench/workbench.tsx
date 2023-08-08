import { Auth, User } from "firebase/auth";
import { Header } from "../../components/header/header";
import { MainMenu, MainMenuItem } from "../../components/main-menu/main-menu";
import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import wand from "../../assets/wand.svg";
import docs from "../../assets/docs.svg"
import start from "../../assets/start.svg"
import data from "../../assets/data.svg"
import medical_image from "../../assets/medical_image.svg"

import { WorkbenchDefinition } from "../../types"
import { useEffect, useState } from "preact/hooks";

import "./workbench.css"
import { InputButton } from "../../components/input-button/input-button";

export function Workbench(props: { path: string, user: User | undefined, auth: Auth, id: string, getWorkbench: (id: string) => WorkbenchDefinition | undefined }) {

  const [workbench, setWorkbench] = useState(props.getWorkbench(props.id))
  const [selectedFeature, setSelectedFeature] = useState("runs");
  const [selectedRegulatory, setSelectedRegulatory] = useState("fda");

  const [regulatorySelectedDoc, setRegulatorySelectedDoc] = useState(["fda", 0])

  useEffect(() => {
    if (!workbench) setWorkbench(props.getWorkbench(props.id));
  })

  return (
    <>
      <Header user={props.user} auth={props.auth} showSearch={true} />

      <MainMenu>
        <MainMenuItem item={{ id: "projects", text: "My Projects", icon: box, route: "/home", selected: false }} />
        <MainMenuItem item={{ id: "workbenches", text: "My Workbenches", icon: flask, route: "/workbenches", selected: true }} />
        <MainMenuItem item={{ id: "datasets", text: "Datasets", icon: data, route: "/datasets", selected: false }} />
        <MainMenuItem item={{ id: "assistant", text: "AI Assistant", icon: wand, route: "/assistant", selected: false }} />
      </MainMenu>

      <div class="main_experiment_panel">
        <div class="main_experiment_panel_header">
          {workbench?.name}
        </div>

        <div class="main_panel_description">
          {workbench?.description}
        </div>

        <div class="experiment_panel">
          <div class="experiment_menu">
            <div onClick={() => setSelectedFeature("runs")} className={selectedFeature == "runs" ? "experiment_menu_panel_item experiment_menu_panel_item_selected" : "experiment_menu_panel_item"}>
              <img class="experiment_menu_panel_item_icon" src={start} />
              <span class="experiment_menu_panel_item_text">Training Jobs</span>
            </div>
            <div onClick={() => setSelectedFeature("datasets")} className={selectedFeature == "datasets" ? "experiment_menu_panel_item experiment_menu_panel_item_selected" : "experiment_menu_panel_item"}>
              <img class="experiment_menu_panel_item_icon" src={data} />
              <span class="experiment_menu_panel_item_text">Datasets</span>
            </div>
            <div class="experiment_menu_panel_item_disabled">
              <img class="experiment_menu_panel_item_icon" src={medical_image} />
              <span class="experiment_menu_panel_item_text">Upload Test Images</span>
            </div>
            <div onClick={() => setSelectedFeature("regulatory_docs")} className={selectedFeature == "regulatory_docs" ? "experiment_menu_panel_item experiment_menu_panel_item_selected" : "experiment_menu_panel_item"}>
              <img class="experiment_menu_panel_item_icon" src={docs} />
              <span class="experiment_menu_panel_item_text">Regulatory Submission Docs</span>
            </div>
          </div>
          <div class="experiment_detail_panel">
            {selectedFeature == "runs" &&
              <div class="experiment_detail_table">
                <table class="styled-table">
                  <thead>
                    <tr>
                      <th>Environment</th>
                      <th>Start Time</th>
                      <th>Status</th>
                      <th>Last Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Google Cloud Public - Belgium (low CO2)</td>
                      <td>Tue Jun 13 2023 09:41:32 GMT+0200 (Central European Summer Time)</td>
                      <td>Completed</td>
                      <td>Mon Jun 12 2023 010:11:14 GMT+0200 (Central European Summer Time)</td>
                    </tr>
                    <tr>
                      <td>Google Cloud Sovereign - Germany</td>
                      <td>-</td>
                      <td>Scheduled</td>
                      <td>Mon Jun 12 2023 010:11:14 GMT+0200 (Central European Summer Time)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }
            {selectedFeature == "datasets" &&
              <div class="experiment_detail_table">
                <table class="styled-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Size</th>
                      <th>Last Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Large public med-image data set</td>
                      <td>2PB</td>
                      <td>Mon Jun 12 2023 010:11:14 GMT+0200 (Central European Summer Time)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            }
            {selectedFeature == "regulatory_docs" &&
              <div class="regulatory_panel">
                <div class="regulatory_docs_header_panel">
                  {/* @ts-ignore */}
                  {Object.keys(workbench?.docs).map((reg) => (
                    <InputButton text={reg} action={() => { setSelectedRegulatory(reg); setRegulatorySelectedDoc([reg, 0]); }} type={selectedRegulatory == reg ? "primary" : "secondary"}></InputButton>
                  ))}
                </div>
                <div class="regulatory_docs_panel">
                  <div class="regulatory_docs_menu_panel">
                    {/* @ts-ignore */}
                    {workbench?.docs[selectedRegulatory]?.map((doc: { name: string, content: string }, index: number) => (
                      <div onClick={() => setRegulatorySelectedDoc([selectedRegulatory, index])} className={regulatorySelectedDoc[1] == index ? "regulatory_menu_panel_item experiment_menu_panel_item_selected" : "regulatory_menu_panel_item"}>
                        <img class="experiment_menu_panel_item_icon" src={docs} />
                        <span class="experiment_menu_panel_item_text">{doc.name}</span>
                      </div>
                    ))
                    }
                  </div>
                  <div class="regulatory_docs_editor_panel">

                    {/* @ts-ignore */}
                    <div class="regulatory_docs_editor" dangerouslySetInnerHTML={{ __html: workbench?.docs[regulatorySelectedDoc[0]][regulatorySelectedDoc[1]].content }}>

                    </div>

                    {/* <textarea class="regulatory_docs_editor" value={exp?.docs[regulatorySelectedDoc[0]][regulatorySelectedDoc[1]].content}>
                      {exp?.docs[regulatorySelectedDoc[0]][regulatorySelectedDoc[1]].content}
                    </textarea> */}
                  </div>
                </div>
              </div>
            }
          </div>
        </div>

      </div>
    </>
  )
}