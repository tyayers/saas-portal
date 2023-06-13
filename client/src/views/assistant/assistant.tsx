import { Auth, User } from "firebase/auth";
import { Header } from "../../components/header/header";
import { MainMenu, MainMenuItem } from "../../components/main-menu/main-menu";

import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import wand from "../../assets/wand.svg";
import { useEffect } from "preact/hooks";

export function Assistant(props: { path: string, user: User | undefined, auth: Auth }) {

  useEffect(() => {
    // access the associated DOM element:
    var elem = document.getElementById("input_assistant");
    if (elem) elem.focus();
  }, []);

  return (
    <>
      <Header user={props.user} auth={props.auth} />

      <MainMenu>
        <MainMenuItem item={{ id: "environments", text: "My Environments", icon: box, route: "/home", selected: false }} />
        <MainMenuItem item={{ id: "experiments", text: "My Experiments", icon: flask, route: "/experiments", selected: false }} />
        <MainMenuItem item={{ id: "assistant", text: "AI Assistant", icon: wand, route: "/assistant", selected: true }} />
      </MainMenu>

      <div class="main_panel">

      </div>
    </>
  )
}