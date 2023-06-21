import { useEffect } from "preact/hooks";

import { Auth, User } from "firebase/auth";
import { Header } from "../../components/header/header";
import { MainMenu, MainMenuItem } from "../../components/main-menu/main-menu";

import box from "../../assets/box.svg";
import flask from "../../assets/flask.svg";
import wand from "../../assets/wand.svg";
import sparkle from "../../assets/sparkle.gif"

import "./assistant.css";
import { Assistant } from "../../components/assistant/assistant";
import { AssistantChatHistory, AssistantResult } from "../../types";

export function AssistantView(props: { path: string, user: User | undefined, auth: Auth, chats: AssistantChatHistory | undefined, onChatUpdate: (chatHistory: AssistantChatHistory) => void }) {

  // const [chatHistory, setChatHistory] = useState(props.chats);

  useEffect(() => {
    // scroll message list to bottom
    var chat_panel = document.getElementById("assistant_chat_panel");
    if (chat_panel) chat_panel.scrollTop = chat_panel.scrollHeight;

    // access the associated DOM element:
    var elem = document.getElementById("input_assistant");
    if (elem) elem.focus();
  }, [props.chats]);

  function onAssistantQuestion(question: string) {

    if (props.chats) {
      props.chats.chats.push({
        who: "person",
        text: question,
        date: ""
      });

      props.onChatUpdate(JSON.parse(JSON.stringify(props.chats)));
    }
  }

  function onAssistantAnswer(answer: AssistantResult) {
    if (props.chats) {
      props.chats.chats.push({
        who: "ai",
        text: answer.answer,
        date: ""
      });

      props.onChatUpdate(JSON.parse(JSON.stringify(props.chats)));
    }
  }

  return (
    <>
      <Header user={props.user} auth={props.auth} showSearch={true} />

      <MainMenu>
        <MainMenuItem item={{ id: "environments", text: "My Environments", icon: box, route: "/home", selected: false }} />
        <MainMenuItem item={{ id: "experiments", text: "My Experiments", icon: flask, route: "/experiments", selected: false }} />
        <MainMenuItem item={{ id: "assistant", text: "AI Assistant", icon: wand, route: "/assistant", selected: true }} />
      </MainMenu>

      <div class="assistant_main_panel">
        <div id="assistant_chat_panel" class="assistant_chat_panel">
          {props.chats && props.chats.chats.map((chat) => (
            <div class="assistant_chat_message">
              {chat.who == "person" && props.user && props.user.photoURL &&
                <img class="assistant_profile_pic" src={props.user.photoURL}></img>
              }

              {chat.who == "ai" &&
                <img class="assistant_profile_pic" src={sparkle}></img>
              }

              <div class="assistant_message_text">
                {chat.text}
              </div>

            </div>
          ))}
        </div>
        <div class="assistant_input_panel">
          <Assistant onQuestion={onAssistantQuestion} onAnswer={onAssistantAnswer} />
        </div>

      </div>
    </>
  )
}