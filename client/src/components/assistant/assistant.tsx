import { useState } from 'preact/hooks'
import { JSX } from 'preact/jsx-runtime';

import "./assistant.css"
import { AssistantResult } from '../../types';

export function Assistant(props: { onQuestion: (question: string) => void, onAnswer: (answer: AssistantResult) => void }) {
  const [input, setInput] = useState("");

  document.addEventListener("dialogCancel", () => {
    setInput("");
  });

  function askAssistant(e: JSX.TargetedKeyboardEvent<HTMLInputElement>) {
    console.log(e.keyCode);
    if (e.keyCode === 27) {
      // Escape
      setInput("");
    }
    else if (e.keyCode === 13) {
      // Enter
      setInput("");

      props.onQuestion(input);

      fetch(import.meta.env.VITE_SERVICE_URL + "/assistant/chat", {
        body: JSON.stringify({
          "question": input
        }),
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data: AssistantResult) => {
          props.onAnswer(data);
          // setThinking(false);
          // setAnswers([data.answer.replace(/\n/g, "<br />")])
        });
    }
    else {
      setInput(e.currentTarget.value);
    }
  }

  // function getAnswers(): string {
  //   var result: string = "";

  //   for (var i = 0; i < answers.length; i++) {
  //     result += answers[i] + "\n"
  //   }

  //   return result;
  // }

  // function getSuggestions(): { name: string, link: string }[] {
  //   let results: { name: string, link: string }[] = [];

  //   for (var i = 0; i < answers.length; i++) {
  //     if (answers[i].toLowerCase().includes("convolutional neural network")) {
  //       results.push({
  //         name: "Explore a CNN sample project",
  //         link: ""
  //       }, {
  //         name: "Create a CNN workbook",
  //         link: ""
  //       });
  //     }
  //     else if (answers[i].toLowerCase().includes("u-net")) {
  //       results.push({
  //         name: "Explore a U-Net sample project",
  //         link: ""
  //       }, {
  //         name: "Create a U-Net workbook",
  //         link: ""
  //       });
  //     }
  //   }

  //   return results;
  // }

  return (
    <div class="assistant_panel">

      <div class="assistant_search">
        <svg class="input_assistant_icon" fill="#646464" width="28px" height="28px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 9.625l-0.906 2.906-0.875-2.906-2.906-0.906 2.906-0.875 0.875-2.938 0.906 2.938 2.906 0.875zM14.563 8.031l-0.438 1.469-0.5-1.469-1.438-0.469 1.438-0.438 0.5-1.438 0.438 1.438 1.438 0.438zM0.281 24l17.906-17.375c0.125-0.156 0.313-0.25 0.531-0.25 0.281-0.031 0.563 0.063 0.781 0.281 0.094 0.063 0.219 0.188 0.406 0.344 0.344 0.313 0.719 0.688 1 1.063 0.125 0.188 0.188 0.344 0.188 0.5 0.031 0.313-0.063 0.594-0.25 0.781l-17.906 17.438c-0.156 0.156-0.344 0.219-0.563 0.25-0.281 0.031-0.563-0.063-0.781-0.281-0.094-0.094-0.219-0.188-0.406-0.375-0.344-0.281-0.719-0.656-0.969-1.063-0.125-0.188-0.188-0.375-0.219-0.531-0.031-0.313 0.063-0.563 0.281-0.781zM14.656 11.375l1.313 1.344 4.156-4.031-1.313-1.375zM5.938 13.156l-0.406 1.438-0.438-1.438-1.438-0.469 1.438-0.438 0.438-1.469 0.406 1.469 1.5 0.438zM20.5 12.063l0.469 1.469 1.438 0.438-1.438 0.469-0.469 1.438-0.469-1.438-1.438-0.469 1.438-0.438z"></path>
        </svg>
        <input id="input_assistant" class="input_assistant" value={input} onKeyUp={(e) => askAssistant(e)} onClick={(e) => e.stopPropagation()}></input>
      </div>

      {/* {thinking &&
        <div class="answers_panel" onClick={(e) => e.stopPropagation()} >
          <img class="answers_panel_thinking" src={wand} />
        </div>
      }

      {answers.length > 0 && answers[0] != "" &&
        <div class="answers_panel" onClick={(e) => e.stopPropagation()} >
          <div class="answers_content" dangerouslySetInnerHTML={{ __html: getAnswers() }}></div>
          {getSuggestions().length > 0 &&
            <div class="answers_content_suggested">
              <div>Here are some possible next steps to get started:</div>
              <div class="answers_content_suggested_buttons">
                {getSuggestions().map((suggestion) => (
                  <InputButton text={suggestion.name} type="primary" action={() => console.log("suggestion clicked")}></InputButton>
                ))
                }
              </div>
            </div>
          }


        </div>
      } */}

    </div>
  )
}