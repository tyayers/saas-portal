import { useEffect, useState } from "preact/hooks";
import "./input-field.css"
import { JSX } from "preact/jsx-runtime";
import { createRef } from "preact";
import sparkle_thinking from "../../assets/sparkle_thinking.gif";
import wand from "../../assets/wand.svg";
import { TargetedEvent } from "preact/compat";

export function InputField(props: {
  id: string, placeholder: string, focus: boolean,
  type: string, rows: number, value: string, helpText?: string,
  duetEnabled?: boolean, duetInitialPrompt?: string,
  setValue: (value: string) => void,
  onSubmit?: () => void,
  onCancel?: () => void
}) {

  let ref = createRef();
  const [input, setInput] = useState(props.value);
  const [hasFocus, setHasFocus] = useState(false);
  const [displayHelp, setDisplayHelp] = useState(true);
  const [displayDuet, setDisplayDuet] = useState("OFF");
  const [duetPrompt, setDuetPrompt] = useState("Help me write");
  const [duetText, setDuetText] = useState("");
  const [duetThinking, setDuetThinking] = useState(false);
  const [xCoordinate, setXCoordidate] = useState(-1);
  const [yCoordinate, setYCoordidate] = useState(-1);

  useEffect(() => {
    // access the associated DOM element:
    if (props.focus)
      document.getElementById(props.id)?.focus();

    if (ref) {
      var rect = ref.current.getBoundingClientRect();
      if (rect) {
        setXCoordidate(rect.x);
        setYCoordidate(rect.y);
        //setHeight(rect.height);
      }
    }

  }, []);

  function onInput(e: JSX.TargetedKeyboardEvent<HTMLInputElement>) {
    setInput(e.currentTarget.value);
    props.setValue(e.currentTarget.value);

    if (input.length > 20) setDisplayHelp(false);

    if (e.key == "Enter" && props.onSubmit)
      props.onSubmit();
    else if (e.key == "Escape" && props.onCancel)
      props.onCancel();
  }

  function onAreaInput(e: JSX.TargetedKeyboardEvent<HTMLTextAreaElement>) {
    setInput(e.currentTarget.value);
    props.setValue(e.currentTarget.value);

    if (input.length > 20) setDisplayHelp(false);

    if (e.key == "Enter" && props.onSubmit)
      props.onSubmit();
    else if (e.key == "Escape" && props.onCancel)
      props.onCancel();
  }

  function onDivInput(e: JSX.TargetedEvent<HTMLDivElement>) {
    setDuetText(e.target?.innerHTML);
  }

  function startDuet(startText?: string) {
    setDuetThinking(false);
    setDuetPrompt("Help me write");
    if (startText)
      setDuetText(startText);
    else if (props.duetInitialPrompt)
      setDuetText(props.duetInitialPrompt);
    else
      setDuetText("");

    setDisplayDuet("PHASE_1");
    if (!startText)
      selectText("input_field_duet_input");
    else
      document.getElementById("input_field_duet_input")?.focus();
  }

  function duetCreateClick(promptText: string) {
    setDuetText("");
    setDuetPrompt(promptText);
    setDuetThinking(true);

    fetch(import.meta.env.VITE_SERVICE_URL + "/assistant/prompt", {
      body: JSON.stringify({
        "question": `You are a very smart medical researcher writing documentation for the FDA. 
          You are great at writing concise and easy to understand content.
          You do not reference any specific locations or universities in your content.

          Here is a request: ${promptText}`,
        "model": "text-bison@latest",
        "output": "TEXT"
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
      .then((data: { question: string, answer: string }) => {
        setDuetText(data.answer.replace("\n\n", ""));
        setDuetThinking(false);
        setDisplayDuet("PHASE_2");
        document.getElementById("input_field_duet_input")?.focus();
      });
  }

  function duetInsertClick() {
    setDisplayDuet("OFF");
    setInput(duetText);
    props.setValue(duetText);
  }

  function selectText(id) {
    var sel, range;
    window.setTimeout(function () {
      var el = document.getElementById(id); //get element id
      if (el && window.getSelection && document.createRange) { //Browser compatibility
        sel = window.getSelection();
        if (sel.toString() == '') { //no text selection
          window.setTimeout(function () {
            el?.focus();
            range = document.createRange(); //range object
            range.selectNodeContents(el); //sets Range
            sel.removeAllRanges(); //remove all ranges from selection
            sel.addRange(range);//add Range to a Selection.
          }, 1);
        }
      }
    }, 1);
  }

  return (
    <div ref={ref} class="input_field_panel" >
      {props.type == "multiline"
        ?
        <textarea class="input_field" id={props.id} required
          rows={props.rows} value={props.value}
          onFocus={() => setHasFocus(true)}
          onBlur={() => { setHasFocus(false); setDisplayHelp(false); }}
          onKeyUp={(e: JSX.TargetedKeyboardEvent<HTMLTextAreaElement>) => { onAreaInput(e) }}
          title="">
        </textarea>
        : <input class="input_field" type={props.type} id={props.id} required
          value={props.value}
          onFocus={() => setHasFocus(true)}
          onBlur={() => setHasFocus(false)}
          onKeyUp={(e: JSX.TargetedKeyboardEvent<HTMLInputElement>) => { onInput(e) }}
          autocomplete="none" title="none">
        </input>
      }
      <label for={props.id} class='input_field_placeholder'>
        {props.placeholder}
      </label>

      {props.duetEnabled && hasFocus && (displayHelp || !input) &&
        <div class="input_field_duet" style={{ top: yCoordinate + 14, left: xCoordinate + 74 }}
          onMouseDown={() => { startDuet("") }}>
          <img class="input_field_duet_icon" src={wand}></img>
          <span class="input_field_duet_text">Help me write</span>
        </div>
      }

      {props.helpText && hasFocus && (displayHelp || !input) &&
        <div class="input_field_help" style={{ top: yCoordinate + 6, left: xCoordinate + 180 }}>
          <div class="input_field_help_panel_arrow" />
          <div class="input_field_help_panel">
            {props.helpText}
          </div>
        </div>
      }

      {displayDuet != "OFF" &&
        <div class="input_field_duet_popup" onClick={() => { setDisplayDuet("OFF") }}>
          <div class="input_field_duet_panel" onClick={(e) => { e.stopPropagation(); }}>
            <div>
              {duetThinking
                ?
                <img class="input_field_duet_icon" src={sparkle_thinking}></img>
                :
                <img class="input_field_duet_icon" src={wand}></img>
              }
              <span class="input_field_duet_text">{duetPrompt}</span>
              {displayDuet == "PHASE_2"
                &&
                <span>
                  <span class="input_field_duet_back" onClick={() => { startDuet(duetPrompt); }}>🖉</span>
                  <span class="input_field_duet_back" onClick={() => { duetCreateClick(duetPrompt); }}>🗘</span>
                  <span class="input_field_duet_back" onClick={() => { startDuet(); }}>⌫</span>
                </span>
              }
            </div>
            <div class="">
              <div contentEditable={true} id="input_field_duet_input" class="input_field_duet_input"
                onInput={onDivInput} dangerouslySetInnerHTML={{ __html: duetText }}>
              </div>
              {/* <textarea id="input_field_duet_input" class="input_field_duet_input"
                rows={8}
                title="" autofocus value={duetText} onInput={(e) => setDuetText(e.target?.value)}
                placeholder={"A summary of a new SaMD product that helps detect liver lesions with 96% accuracy."}>
              </textarea> */}
            </div>
            <div style={"text-align: right;"}>
              {displayDuet == "PHASE_1"
                ?
                <button class="input_field_duet_insert_button" onClick={() => { duetCreateClick(duetText) }}>Create</button>
                :
                <button class="input_field_duet_insert_button" onClick={duetInsertClick}>Insert</button>
              }

            </div>
          </div>
        </div>
      }

    </div>
  )
}