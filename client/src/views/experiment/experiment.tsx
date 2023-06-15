import { Auth, User } from "firebase/auth";
import { Header } from "../../components/header/header";
import { MainMenu, MainMenuItem } from "../../components/main-menu/main-menu";
import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import wand from "../../assets/wand.svg";
import docs from "../../assets/docs.svg"
import start from "../../assets/start.svg"
import data from "../../assets/data.svg"

import { ExperimentDefinition } from "../../types"
import { useEffect, useState } from "preact/hooks";

import "./experiment.css"
import { InputButton } from "../../components/input-button/input-button";

export function Experiment(props: { path: string, user: User | undefined, auth: Auth, id: string, getExperiment: (id: string) => ExperimentDefinition | undefined }) {

  const [exp, setExp] = useState(props.getExperiment(props.id))
  const [selectedFeature, setSelectedFeature] = useState("runs");
  const [selectedRegulatory, setSelectedRegulatory] = useState("fda");
  // const [regulatoryDocsIndex,] = useState({
  //   "fda": [
  //     {
  //       name: "Documentation Level Evaluation",
  //       content: "Introduction\n\nThe Food and Drug Administration(FDA) regulates Software as a Medical Device(SaMD) under the Medical Device Amendments of 1976(MDA).SaMD is defined as any medical device that is intended to be used as a stand- alone software or that is part of a larger medical device system and that performs one or more of the following functions: \n\nAcquisition of medical data\nGeneration of medical images or reports\nInterpretation of medical data\nProvision of clinical decision support\nGuidance of medical therapy\nThe FDA evaluates SaMD submissions using a risk - based approach.The level of risk associated with a SaMD device is determined by the device's intended use, its potential for harm, and the availability of alternative devices.\n\nEvaluation\n\nThe average SaMD submission for radiology is evaluated using the following criteria:\n\nTechnical documentation: The technical documentation should provide a comprehensive description of the SaMD device, including its intended use, design, development, testing, and performance. The technical documentation should also include a risk analysis that identifies and mitigates the risks associated with the device.\nClinical evidence: The clinical evidence should demonstrate the safety and effectiveness of the SaMD device for its intended use. The clinical evidence should be conducted in a well-designed and well-conducted clinical study.\nManufacturing and quality assurance: The manufacturing and quality assurance (QA) system should ensure that the SaMD device is manufactured and controlled in a way that meets the FDA's requirements for safety and effectiveness.\nConclusion\n\nThe average SaMD submission for radiology is generally well- written and comprehensive.The technical documentation is typically clear and easy to follow.The clinical evidence is often strong and supportive of the device's safety and effectiveness. The manufacturing and QA system is typically robust and capable of ensuring the quality of the device.\n\nHowever, there are some areas where the average SaMD submission for radiology could be improved. For example, the clinical evidence could be strengthened by including additional studies or by using a larger sample size. The manufacturing and QA system could be improved by implementing additional controls or by using more rigorous testing methods.\n\nOverall, the average SaMD submission for radiology is a well-written and comprehensive submission that demonstrates the safety and effectiveness of the device. However, there are some areas where the submission could be improved. With these improvements, the average SaMD submission for radiology would be more likely to be approved by the FDA."
  //     }, {
  //       name: "Software Description",
  //       content: "Software Description\n\nThis software description document provides information about the software functionality, design, and implementation of a software as a medical device (SaMD) for radiology. The SaMD is a computer-aided detection (CAD) system that is used to identify potential cancer lesions in medical images. The system is intended to be used by radiologists to help them make more accurate diagnoses.\n\nSoftware Functionality\n\nThe SaMD system consists of two main components: a software application and a hardware platform. The software application is used to process medical images and to identify potential cancer lesions. The hardware platform is used to display the images and to provide input and output devices for the user.\n\nThe software application uses a variety of algorithms to identify potential cancer lesions. These algorithms are based on the latest research in medical image analysis. The software application also includes a number of features that help radiologists to evaluate the results of the analysis. These features include:\n\nA user interface that allows radiologists to interact with the software application\nA report generator that creates a report of the analysis results\nA database that stores the results of the analysis\nSoftware Design\n\nThe software application is designed to be easy to use and to provide radiologists with the information they need to make accurate diagnoses. The software application is also designed to be scalable, so that it can be used to process large volumes of medical images.\n\nThe software application is implemented in a modular fashion, so that it can be easily updated and maintained. The software application is also designed to be interoperable with other medical devices and software systems.\n\nSoftware Implementation\n\nThe software application is implemented in Java. The software application is developed using a standard software development process. The software application is tested using a variety of methods, including unit testing, integration testing, and system testing.\n\nConclusion\n\nThe SaMD system is a software as a medical device that is intended to be used by radiologists to help them make more accurate diagnoses. The system is designed to be easy to use and to provide radiologists with the information they need to make accurate diagnoses. The system is also designed to be scalable and interoperable with other medical devices and software systems."
  //     }, {
  //       name: "Risk Management File",
  //       content: "Introduction\nThis risk management file (RMF) describes the risk management activities performed for an average submission for radiology software as regulated by the US Food and Drug Administration (FDA). The RMF is intended to be used by manufacturers of radiology software to support their premarket submissions to the FDA.\n\nRisk Management Process\nThe risk management process for radiology software is a four-step process:\n\nIdentify hazards. The first step is to identify all potential hazards associated with the software. Hazards can be identified through a variety of methods, including brainstorming, hazard analysis, and failure mode and effects analysis (FMEA).\nAssess risks. Once the hazards have been identified, they must be assessed to determine the associated risks. Risk assessment involves identifying the likelihood and severity of each hazard.\nControl risks. Once the risks have been assessed, they must be controlled to an acceptable level. Risk control measures can include engineering controls, administrative controls, and training.\nMonitor and review. The risk management process must be monitored and reviewed on an ongoing basis to ensure that the risks associated with the software are being adequately controlled.\nRisks Associated with Radiology Software\nThe risks associated with radiology software can be divided into two categories:\n\nClinical risks. Clinical risks are risks that could result in harm to a patient. Examples of clinical risks include:\nIncorrect diagnosis\nMissed diagnosis\nIncorrect treatment\nUnnecessary treatment\nNon-clinical risks. Non-clinical risks are risks that do not directly involve harm to a patient. Examples of non-clinical risks include:\nData security breaches\nSoftware malfunctions\nUser errors\nRisk Control Measures\nThe following are some of the risk control measures that can be used to mitigate the risks associated with radiology software:\n\nEngineering controls. Engineering controls are physical or software features that are designed to prevent or mitigate hazards. Examples of engineering controls include:\nUser authentication\nData encryption\nError-checking algorithms\nAdministrative controls. Administrative controls are policies and procedures that are designed to mitigate risks. Examples of administrative controls include:\nTraining programs\nQuality assurance programs\nIncident reporting systems\nTraining. Training is an important risk control measure that can help to mitigate the risks associated with radiology software. Training should be provided to all users of the software, including radiologists, technicians, and administrators.\nConclusion\nThe risk management process is an important part of the development and premarket submission of radiology software. The risk management process helps to ensure that the risks associated with the software are identified, assessed, and controlled to an acceptable level."
  //     }, {
  //       name: "Software Requirements Specification",
  //       content: "Document generation in progress..."
  //     }, {
  //       name: "Software Architecture Design",
  //       content: "Document generation in progress..."
  //     }, {
  //       name: "Software Design Specification",
  //       content: "Document generation in progress..."
  //     }, {
  //       name: "Software Development, Configuration Management, and Management Practices",
  //       content: "Document generation in progress..."
  //     }, {
  //       name: "Software Testing Specification",
  //       content: "Document generation in progress..."
  //     }, {
  //       name: "Software Version History",
  //       content: "Document generation in progress..."
  //     }, {
  //       name: "Unresolved Software Anomalies",
  //       content: "Document generation in progress..."
  //     }
  //   ],
  //   "ema": [
  //     {
  //       name: "Submission Plan S015",
  //       content: "Document generation in progress..."
  //     }
  //   ]
  // });
  const [regulatorySelectedDoc, setRegulatorySelectedDoc] = useState(["fda", 0])

  useEffect(() => {
    if (!exp) setExp(props.getExperiment(props.id));
  })

  return (
    <>
      <Header user={props.user} auth={props.auth} />

      <MainMenu>
        <MainMenuItem item={{ id: "environments", text: "My Environments", icon: box, route: "/home", selected: false }} />
        <MainMenuItem item={{ id: "experiments", text: "My Experiments", icon: flask, route: "/experiments", selected: true }} />
        <MainMenuItem item={{ id: "assistant", text: "AI Assistant", icon: wand, route: "/assistant", selected: false }} />
      </MainMenu>

      <div class="main_experiment_panel">
        <div class="main_experiment_panel_header">
          {exp?.name}
        </div>

        <div class="main_panel_description">
          {exp?.description}
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
            <div onClick={() => setSelectedFeature("regulatory_docs")} className={selectedFeature == "regulatory_docs" ? "experiment_menu_panel_item experiment_menu_panel_item_selected" : "experiment_menu_panel_item"}>
              <img class="experiment_menu_panel_item_icon" src={docs} />
              <span class="experiment_menu_panel_item_text">Regulatory Submission Docs</span>
            </div>
          </div>
          <div class="experiment_detail_panel">
            {selectedFeature == "runs" &&
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

                </tbody>
              </table>
            }
            {selectedFeature == "datasets" &&
              <table class="styled-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Environment</th>
                    <th>Size</th>
                    <th>Last Updated</th>
                  </tr>
                </thead>
                <tbody>

                </tbody>
              </table>
            }
            {selectedFeature == "regulatory_docs" &&
              <div class="regulatory_panel">
                <div class="regulatory_docs_header_panel">
                  {/* @ts-ignore */}
                  {Object.keys(exp?.docs).map((reg) => (
                    <InputButton text={reg} action={() => { setSelectedRegulatory(reg); setRegulatorySelectedDoc([reg, 0]); }} type={selectedRegulatory == reg ? "primary" : "secondary"}></InputButton>
                  ))}
                </div>
                <div class="regulatory_docs_panel">
                  <div class="regulatory_docs_menu_panel">
                    {/* @ts-ignore */}
                    {exp?.docs[selectedRegulatory]?.map((doc: { name: string, content: string }, index: number) => (
                      <div onClick={() => setRegulatorySelectedDoc([selectedRegulatory, index])} className={regulatorySelectedDoc[1] == index ? "regulatory_menu_panel_item experiment_menu_panel_item_selected" : "regulatory_menu_panel_item"}>
                        <img class="experiment_menu_panel_item_icon" src={docs} />
                        <span class="experiment_menu_panel_item_text">{doc.name}</span>
                      </div>
                    ))
                    }
                  </div>
                  <div class="regulatory_docs_editor_panel">

                    {/* @ts-ignore */}
                    <div class="regulatory_docs_editor" dangerouslySetInnerHTML={{ __html: exp?.docs[regulatorySelectedDoc[0]][regulatorySelectedDoc[1]].content }}>

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