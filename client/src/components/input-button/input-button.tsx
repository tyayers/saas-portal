
import "./input-button.css"

export function InputButton(props: { text: string; type: string; action: () => void }) {

  return (
    <>
      {
        props.type == "primary"
          ? <button class="input_button" onMouseDown={(e) => e.preventDefault()} onClick={(e) => { e.stopPropagation(); props.action(); }}>{props.text}</button>
          : <button class="input_button input_button_secondary" onMouseDown={(e) => e.preventDefault()} onClick={() => props.action()}>{props.text}</button>
      }
    </>
  )
}