import { useState } from 'preact/hooks'
import { JSX } from 'preact/jsx-runtime';

import "./search.css"

export function Search() {
  const [input, setInput] = useState("");

  document.addEventListener("dialogCancel", () => {
    setInput("");
  });

  function search(e: JSX.TargetedKeyboardEvent<HTMLInputElement>) {
    console.log(e.keyCode);
    if (e.keyCode === 27) {
      // Escape
      setInput("");
    }
    else if (e.keyCode === 13) {
      // Enter
      setInput("");
    }
    else {
      setInput(e.currentTarget.value);
    }
  }

  return (
    <div class="search_panel">

      <div class="search_input_panel">
        <svg class="search_input_icon" fill="none" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g id="Interface / Search_Magnifying_Glass">
            <path id="Vector" d="M15 15L21 21M10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 13.866 13.866 17 10 17Z" stroke="#646464" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </g>
        </svg>
        <input id="search_input_field" class="search_input_field" value={input} onKeyUp={(e) => search(e)} onClick={(e) => e.stopPropagation()}></input>
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