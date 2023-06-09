import { Header } from "../../components/header/header"
import addIcon from "../../assets/add.png"

import "./experiments.css";
import { Auth, User } from "firebase/auth";
import { route } from "preact-router";

export function Experiments(props: { path: string, user: User | undefined, auth: Auth }) {

  return (
    <>
      <Header user={props.user} auth={props.auth} />
      <div class="sidenav">
        <div class="create_button">
          <img class="create_icon" src={addIcon}></img>
          <span class="create_text">Create Experiment</span>
        </div>
        <div class="side_menu">
          <div class="side_menu_item" onClick={() => route("/home")}>
            <svg class="side_menu_item_icon" width="25px" height="25px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <title>container-optimize-solid</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="invisible_box" data-name="invisible box">
                  <rect width="48" height="48" fill="none" />
                </g>
                <g id="icons_Q2" data-name="icons Q2">
                  <path d="M42.9,12.2l-18-9L24,3l-.9.2-18,9a.1.1,0,0,0-.1.1l19,9.6,19-9.6A.1.1,0,0,0,42.9,12.2ZM26,25.4V44.2l16.9-8.6A1.9,1.9,0,0,0,44,33.8V16.3ZM4,16.3V33.8a1.9,1.9,0,0,0,1.1,1.8L22,44.2V25.4Z" />
                </g>
              </g>
            </svg>
            <span class="side_menu_item_text">My Environments</span>
          </div>
          <div class="side_menu_item side_menu_item_selected">
            <svg class="side_menu_item_icon" fill="#000000" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.121,10.7A6.462,6.462,0,0,0,3,16c0,3.859,4.037,7,9,7s9-3.141,9-7a6.58,6.58,0,0,0-3.121-5.3h0A6.721,6.721,0,0,1,15,5.04V3h1a1,1,0,0,0,0-2H8A1,1,0,0,0,8,3H9V5.04A6.724,6.724,0,0,1,6.121,10.7ZM12,21c-3.171,0-6.9-1.8-6.992-4.892a9.692,9.692,0,0,0,6.363-.179,14.315,14.315,0,0,1,7.539-.673l.008.035C19.629,18.547,15.857,21,12,21ZM13,3V5.04a8.713,8.713,0,0,0,3.768,7.318,6.1,6.1,0,0,1,.91.744,15.626,15.626,0,0,0-7.049.969,7.644,7.644,0,0,1-5.122.1,5.388,5.388,0,0,1,1.725-1.808A8.716,8.716,0,0,0,11,5.04V3Zm2,15a1,1,0,1,1-1-1A1,1,0,0,1,15,18Zm-4-7a1,1,0,1,1,1,1A1,1,0,0,1,11,11Z" /></svg>
            <span class="side_menu_item_text">My Experiments</span>
          </div>
          <div class="side_menu_item">
            <svg class="side_menu_item_icon" fill="#000000" width="25px" height="25px" viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 9.625l-0.906 2.906-0.875-2.906-2.906-0.906 2.906-0.875 0.875-2.938 0.906 2.938 2.906 0.875zM14.563 8.031l-0.438 1.469-0.5-1.469-1.438-0.469 1.438-0.438 0.5-1.438 0.438 1.438 1.438 0.438zM0.281 24l17.906-17.375c0.125-0.156 0.313-0.25 0.531-0.25 0.281-0.031 0.563 0.063 0.781 0.281 0.094 0.063 0.219 0.188 0.406 0.344 0.344 0.313 0.719 0.688 1 1.063 0.125 0.188 0.188 0.344 0.188 0.5 0.031 0.313-0.063 0.594-0.25 0.781l-17.906 17.438c-0.156 0.156-0.344 0.219-0.563 0.25-0.281 0.031-0.563-0.063-0.781-0.281-0.094-0.094-0.219-0.188-0.406-0.375-0.344-0.281-0.719-0.656-0.969-1.063-0.125-0.188-0.188-0.375-0.219-0.531-0.031-0.313 0.063-0.563 0.281-0.781zM14.656 11.375l1.313 1.344 4.156-4.031-1.313-1.375zM5.938 13.156l-0.406 1.438-0.438-1.438-1.438-0.469 1.438-0.438 0.438-1.469 0.406 1.469 1.5 0.438zM20.5 12.063l0.469 1.469 1.438 0.438-1.438 0.469-0.469 1.438-0.469-1.438-1.438-0.469 1.438-0.438z"></path>
            </svg>
            <span class="side_menu_item_text">AI Assistant</span>
          </div>
        </div>
      </div>
      <div class="main_panel">
        <div class="main_panel_header">
          Experiments
        </div>
        <div class="main_panel_item">
          <div class="main_panel_item_header1">Liver lesion test 1</div>
          <div class="main_panel_item_header2">Deployed: Team1</div>
          <div class="main_panel_item_header2">Status: Running</div>
          <div class="main_panel_item_header2">Time: 1 hour...</div>
          <div class="main_panel_item_header2">Tests: 4 todo</div>
          <div class="main_panel_item_header2">Notes: promising second attempt..</div>
        </div>
      </div>
    </>
  )
}