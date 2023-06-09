import { route } from 'preact-router';
import { useState } from 'preact/hooks'

import { Auth, User, signOut } from "firebase/auth";

import { Assistant } from "../assistant/assistant"

import profile from "../../assets/profile.png";
import "./header.css"
import { JSX } from 'preact/jsx-runtime';

export function Header(props: { user: User | undefined, auth: Auth }) {

  const [userMenuVisible, setUserMenuVisible] = useState(false);
  const [userPhotoUrl, setUserPhotoUrl] = useState(profile);
  const saasName = import.meta.env.VITE_SAAS_NAME;

  if (props.user && props.user.photoURL) setUserPhotoUrl(props.user.photoURL);

  document.addEventListener("dialogCancel", () => {
    setUserMenuVisible(false);
  });

  function signIn() {
    route("/sign-in")
  }

  function signUserOut() {
    signOut(props.auth).then(() => {
      route("/");
    });
  }

  function toggleUserMenu(e: JSX.TargetedMouseEvent<HTMLImageElement>) {
    e.stopPropagation();
    setUserMenuVisible(!userMenuVisible);
  }

  return (
    <div class="header">
      <span class="header_left_panel1">
        {saasName}
      </span>
      <span class="header_center_panel1">
        <Assistant />
        {/* <svg class="input_assistant_icon" fill="#646464" width="28px" height="28px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 9.625l-0.906 2.906-0.875-2.906-2.906-0.906 2.906-0.875 0.875-2.938 0.906 2.938 2.906 0.875zM14.563 8.031l-0.438 1.469-0.5-1.469-1.438-0.469 1.438-0.438 0.5-1.438 0.438 1.438 1.438 0.438zM0.281 24l17.906-17.375c0.125-0.156 0.313-0.25 0.531-0.25 0.281-0.031 0.563 0.063 0.781 0.281 0.094 0.063 0.219 0.188 0.406 0.344 0.344 0.313 0.719 0.688 1 1.063 0.125 0.188 0.188 0.344 0.188 0.5 0.031 0.313-0.063 0.594-0.25 0.781l-17.906 17.438c-0.156 0.156-0.344 0.219-0.563 0.25-0.281 0.031-0.563-0.063-0.781-0.281-0.094-0.094-0.219-0.188-0.406-0.375-0.344-0.281-0.719-0.656-0.969-1.063-0.125-0.188-0.188-0.375-0.219-0.531-0.031-0.313 0.063-0.563 0.281-0.781zM14.656 11.375l1.313 1.344 4.156-4.031-1.313-1.375zM5.938 13.156l-0.406 1.438-0.438-1.438-1.438-0.469 1.438-0.438 0.438-1.469 0.406 1.469 1.5 0.438zM20.5 12.063l0.469 1.469 1.438 0.438-1.438 0.469-0.469 1.438-0.469-1.438-1.438-0.469 1.438-0.438z"></path>
        </svg>
        <input class="input_assistant"></input> */}
      </span>
      <span class="header_right_panel1">
        {!props.user &&
          <button onClick={() => signIn()}>Sign In</button>
        }
        {props.user &&
          <img
            onClick={(e) => toggleUserMenu(e)}
            src={userPhotoUrl}
            alt="The user."
            class="profile_button"
            referrerpolicy="no-referrer"
          />
        }

        {userMenuVisible &&
          <div class="user_menu">
            <div class="arrow" />
            <div class="menu">
              <div class="panel">
                {/* <div class="user_email_panel" dangerouslySetInnerHTML={{ __html: props.user?.email?.replace("@", "@<br/>") }}></div> */}
                <div class="user_email_panel">{props.user?.email}</div>
                <div class="result">Admin</div>
                <div class="result" onClick={() => { signUserOut() }}>Sign out</div>
              </div>
            </div>
          </div>
        }
      </span>
    </div>
  )
}
