import { useState } from 'preact/hooks'
import { JSX } from 'preact/jsx-runtime';

import "./assistant.css"
import wand from "../../assets/cool-fairy.gif"

export function Assistant() {
  const [answers, setAnswers] = useState([""]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);

  document.addEventListener("dialogCancel", () => {
    setAnswers([]);
    setInput("");
    setThinking(false);
  });

  function askAssistant(e: JSX.TargetedKeyboardEvent<HTMLInputElement>) {
    console.log(e.keyCode);
    if (e.keyCode === 27) {
      // Escape
      setAnswers([]);
      setInput("");
      setThinking(false);
    }
    else if (e.keyCode === 13) {
      // Enter
      setInput("");
      setThinking(true);

      fetch(import.meta.env.VITE_ASSISTANT_URL, {
        body: JSON.stringify({
          "question": input
        }),
        method: "POST",
        headers: {
          Accept: "application/json"
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data: { question: string, answer: string }) => {
          setThinking(false);
          setAnswers([data.answer.replace(/\n/g, "<br />")])
        });
    }
    else {
      setInput(e.currentTarget.value);
      setAnswers([]);
    }
  }

  function getAnswers(): string {
    var result: string = "";

    for (var i = 0; i < answers.length; i++) {
      result += answers[i] + "\n"
    }
    return result;
  }

  return (
    <div class="assistant_panel">

      <div class="assistant_search">
        <svg class="input_assistant_icon" fill="#646464" width="28px" height="28px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 9.625l-0.906 2.906-0.875-2.906-2.906-0.906 2.906-0.875 0.875-2.938 0.906 2.938 2.906 0.875zM14.563 8.031l-0.438 1.469-0.5-1.469-1.438-0.469 1.438-0.438 0.5-1.438 0.438 1.438 1.438 0.438zM0.281 24l17.906-17.375c0.125-0.156 0.313-0.25 0.531-0.25 0.281-0.031 0.563 0.063 0.781 0.281 0.094 0.063 0.219 0.188 0.406 0.344 0.344 0.313 0.719 0.688 1 1.063 0.125 0.188 0.188 0.344 0.188 0.5 0.031 0.313-0.063 0.594-0.25 0.781l-17.906 17.438c-0.156 0.156-0.344 0.219-0.563 0.25-0.281 0.031-0.563-0.063-0.781-0.281-0.094-0.094-0.219-0.188-0.406-0.375-0.344-0.281-0.719-0.656-0.969-1.063-0.125-0.188-0.188-0.375-0.219-0.531-0.031-0.313 0.063-0.563 0.281-0.781zM14.656 11.375l1.313 1.344 4.156-4.031-1.313-1.375zM5.938 13.156l-0.406 1.438-0.438-1.438-1.438-0.469 1.438-0.438 0.438-1.469 0.406 1.469 1.5 0.438zM20.5 12.063l0.469 1.469 1.438 0.438-1.438 0.469-0.469 1.438-0.469-1.438-1.438-0.469 1.438-0.438z"></path>
        </svg>

        <input id="input_assistant" class="input_assistant" value={input} onKeyUp={(e) => askAssistant(e)} onClick={(e) => e.stopPropagation()}></input>
      </div>

      {thinking &&
        <div class="answers_panel" onClick={(e) => e.stopPropagation()} >
          <img class="answers_panel_thinking" src={wand} />
        </div>
      }

      {answers.length > 0 && answers[0] != "" &&
        <div class="answers_panel" onClick={(e) => e.stopPropagation()} dangerouslySetInnerHTML={{ __html: getAnswers() }} >

        </div>
      }

    </div>
  )
}