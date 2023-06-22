
import { useState } from "preact/hooks"
import "./input-select.css"

export function InputSelect(props: { label: string, defaultValue: string, children: any, onValueChanged: (value: string) => void }) {

  const [value, setValue] = useState(props.defaultValue);
  const [hasFocus, setHasFocus] = useState(false);

  function onChange(input: string) {
    setValue(input);
    props.onValueChanged(input);
  }

  return (
    <div class="input_select_panel">

      <div class={(hasFocus || value) ? "input_select input_select_valid" : "input_select"}>
        <select value={value} class="input_select_text" onFocus={() => setHasFocus(true)} onBlur={() => setHasFocus(false)} onChange={(e) => onChange((e.target as HTMLInputElement).value)} required>
          {props.children}
        </select>
        <span class="input_select_highlight"></span>
        <span class="input_select_bar"></span>
        <label class="input_select_label">{props.label}</label>
      </div>

    </div >
  )
}