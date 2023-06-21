import { Header } from "../../components/header/header"
import { MainMenu, MainMenuItem } from '../../components/main-menu/main-menu';

import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import wand from "../../assets/wand.svg";

import "./home.css";

import { Auth, User } from "firebase/auth";
import { route } from "preact-router";

export function Home(props: { path: string, user: User | undefined, auth: Auth }) {

  return (
    <>
      <Header user={props.user} auth={props.auth} showSearch={true} />

      <MainMenu>
        <MainMenuItem item={{ id: "environments", text: "My Environments", icon: box, route: "/home", selected: true }} />
        <MainMenuItem item={{ id: "experiments", text: "My Experiments", icon: flask, route: "/experiments", selected: false }} />
        <MainMenuItem item={{ id: "assistant", text: "AI Assistant", icon: wand, route: "/assistant", selected: false }} />
      </MainMenu>

      <div class="main_panel">
        <div class="main_panel_header">
          Environments <span class="main_panel_header_top_button" onClick={() => route("/new-environment")}>+ Create</span>
        </div>
        <div class="main_panel_item">
          <div class="main_panel_item_header1">Google Cloud Public - Belgium (low CO2)</div>
          <div class="main_panel_item_header2">Location: GCP Public | eu-west3</div>
          <div class="main_panel_item_header2">CPU Cores: 120</div>
          <div class="main_panel_item_header2">RAM: 148 GB</div>
          <div class="main_panel_item_header2">GPUs: 4 A100</div>
          <div class="main_panel_item_header2">TPUs: 2 v3, 8 v2</div>
          <div class="main_panel_item_header2">Users: 84</div>
        </div>
        <div class="main_panel_item">
          <div class="main_panel_item_header1">Google Cloud Sovereign - Germany</div>
          <div class="main_panel_item_header2">Location: GCP Sovereign | Germany</div>
          <div class="main_panel_item_header2">CPU Cores: 120</div>
          <div class="main_panel_item_header2">RAM: 148 GB</div>
          <div class="main_panel_item_header2">GPUs: 5 A100</div>
          <div class="main_panel_item_header2">TPUs: 7 v3, 8 v2</div>
          <div class="main_panel_item_header2">Users: 121</div>
        </div>
      </div>
    </>
  )
}