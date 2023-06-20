import { route } from 'preact-router';
import { useState } from 'preact/hooks'

import { Auth, User, signOut } from "firebase/auth";

import profile from "../../assets/profile.png";
import "./header.css"
import { JSX } from 'preact/jsx-runtime';
import { InputButton } from '../input-button/input-button';

export function Header(props: { user: User | undefined, auth: Auth, showSearch: boolean }) {

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
      {props.user && props.showSearch &&
        <span class="header_center_panel1">
          {/* <Assistant /> */}
        </span>
      }
      <span class="header_right_panel1">
        {!props.user &&
          <span>
            <InputButton text="Sign In" type="secondary" action={() => signIn()}></InputButton>
            <InputButton text="Register" type="primary" action={() => signIn()}></InputButton>
          </span>
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

                <div class="user_menu_panel">
                  <div class="result">Admin</div>
                  <div class="result" onClick={() => { signUserOut() }}>Sign out</div>
                </div>
                <div class="user_email_panel">{props.user?.email}</div>
              </div>
            </div>
          </div>
        }
      </span>
    </div>
  )
}
