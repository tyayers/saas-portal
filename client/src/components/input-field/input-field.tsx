import { useEffect } from "preact/hooks";
import "./input-field.css"
import { JSX } from "preact/jsx-runtime";

export function InputField(props: {
  id: string, placeholder: string, focus: boolean,
  type: string, rows: number, value: string, setValue: (value: string) => void,
  onSubmit?: () => void, onCancel?: () => void
}) {

  useEffect(() => {
    // access the associated DOM element:
    if (props.focus)
      document.getElementById(props.id)?.focus();
  }, []);

  function onInput(e: JSX.TargetedKeyboardEvent<HTMLInputElement>) {
    props.setValue(e.currentTarget.value);

    if (e.key == "Enter" && props.onSubmit)
      props.onSubmit();
    else if (e.key == "Escape" && props.onCancel)
      props.onCancel();
  }

  function onAreaInput(e: JSX.TargetedKeyboardEvent<HTMLTextAreaElement>) {
    props.setValue(e.currentTarget.value);

    if (e.key == "Enter" && props.onSubmit)
      props.onSubmit();
    else if (e.key == "Escape" && props.onCancel)
      props.onCancel();
  }

  return (
    <div class="input_field_panel">
      {props.type == "multiline"
        ? <textarea class="input_field" id={props.id} required rows={props.rows} value={props.value} onKeyUp={(e: JSX.TargetedKeyboardEvent<HTMLTextAreaElement>) => { onAreaInput(e) }}></textarea>
        : <input class="input_field" type={props.type} id={props.id} required value={props.value} onKeyUp={(e: JSX.TargetedKeyboardEvent<HTMLInputElement>) => { onInput(e) }} autocomplete="none"></input>
      }
      <label for={props.id} class='input_field_placeholder'>
        {props.placeholder}
      </label>
    </div>
  )
}