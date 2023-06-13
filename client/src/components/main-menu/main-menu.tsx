import addIcon from "../../assets/add.png"

import { route } from "preact-router";

import "./main-menu.css"
import { VNode, ComponentChild } from "preact";

export function MainMenu(props: { children: string | number | bigint | boolean | object | VNode<any> | ComponentChild[] | null | undefined; }) {

  return (
    <div class="main_menu">
      <div class="main_menu_create_button">
        <img class="main_menu_create_icon" src={addIcon}></img>
        <span class="main_menu_create_text">Create Environment</span>
      </div>
      <div class="main_menu_panel">
        {props.children}
      </div>
    </div>
  );
}

export function MainMenuItem(props: { item: { id: string; selected: boolean; icon: string; text: string; route: string; }; }) {

  return (
    <>
      {props.item.selected
        ?
        <div class="main_menu_panel_item main_menu_panel_item_selected" onClick={() => route(props.item.route)}>
          <img class="main_menu_panel_item_icon" src={props.item.icon} />
          <span class="main_menu_panel_item_text">{props.item.text}</span>
        </div>
        :
        <div class="main_menu_panel_item" onClick={() => route(props.item.route)}>
          <img class="main_menu_panel_item_icon" src={props.item.icon} />
          <span class="main_menu_panel_item_text">{props.item.text}</span>
        </div>
      }
    </>
  );
}
