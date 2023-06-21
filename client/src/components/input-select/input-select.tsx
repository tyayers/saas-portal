
import { useState } from "preact/hooks"
import "./input-select.css"

export function InputSelect() {

  const [value, setValue] = useState("");
  const [hasFocus, setHasFocus] = useState(false);

  function onChange(input: string) {
    setValue(input);
  }

  return (
    <div class="input_select_panel">

      <div class={(hasFocus || value) ? "input_select input_select_valid" : "input_select"}>
        <select value={value} class="input_select_text" onFocus={() => setHasFocus(true)} onBlur={() => setHasFocus(false)} onChange={(e) => onChange((e.target as HTMLInputElement).value)} required>
          <option value="" disabled selected></option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <span class="input_select_highlight"></span>
        <span class="input_select_bar"></span>
        <label class="input_select_label">Select</label>
      </div>

    </div >
  )
}