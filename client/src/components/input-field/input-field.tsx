import { useEffect, useState } from "preact/hooks";
import "./input-field.css"
import { JSX } from "preact/jsx-runtime";
import { createRef } from "preact";

export function InputField(props: {
  id: string, placeholder: string, focus: boolean,
  type: string, rows: number, value: string, helpText?: string, setValue: (value: string) => void,
  onSubmit?: () => void, onCancel?: () => void
}) {

  let ref = createRef();
  const [input, setInput] = useState(props.value);
  const [hasFocus, setHasFocus] = useState(false);
  const [displayHelp, setDisplayHelp] = useState(true);
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

  return (
    <div ref={ref} class="input_field_panel" onClick={() => { setDisplayHelp(!displayHelp) }}>
      {props.type == "multiline"
        ? <textarea class="input_field" id={props.id} required
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

      {props.helpText && hasFocus && (displayHelp || !input) &&
        <div class="input_field_help" style={{ top: yCoordinate + 6, left: xCoordinate + 180 }}>
          <div class="input_field_help_panel_arrow" />
          <div class="input_field_help_panel">
            {props.helpText}
          </div>
        </div>
      }

    </div>
  )
}