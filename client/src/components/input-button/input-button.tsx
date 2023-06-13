
import "./input-button.css"

export function InputButton(props: { text: string; type: string; action: () => void }) {

  return (
    <>
      {
        props.type == "primary"
          ? <button class="input_button" onClick={() => props.action()}>{props.text}</button>
          : <button class="input_button input_button_secondary" onClick={() => props.action()}>{props.text}</button>
      }
    </>
  )
}