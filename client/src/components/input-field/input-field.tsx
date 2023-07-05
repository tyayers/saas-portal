import { useEffect } from "preact/hooks";
import "./input-field.css"
import { JSX } from "preact/jsx-runtime";

export function InputField(props: { id: string, placeholder: string, focus: boolean, type: string, rows: number, value: string, setValue: (value: string) => void }) {

  useEffect(() => {
    // access the associated DOM element:
    if (props.focus)
      document.getElementById(props.id)?.focus();
  }, []);

  function onInput(value: string) {
    props.setValue(value)
  }

  return (
    <div class="input_field_panel">
      {props.type == "multiline"
        ? <textarea class="input_field" id={props.id} required rows={props.rows} value={props.value} onKeyUp={(e: JSX.TargetedKeyboardEvent<HTMLTextAreaElement>) => { onInput(e.currentTarget.value) }}></textarea>
        : <input class="input_field" type={props.type} id={props.id} required value={props.value} onKeyUp={(e: JSX.TargetedKeyboardEvent<HTMLInputElement>) => { onInput(e.currentTarget.value) }}></input>
      }
      <label for={props.id} class='input_field_placeholder'>
        {props.placeholder}
      </label>
    </div>
  )
}