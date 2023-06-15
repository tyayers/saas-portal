import { Auth, User } from "firebase/auth";
import { Header } from "../../components/header/header"

import "./signed-out.css"

export function SignedOut(props: { path: string; user: User | undefined; auth: Auth }) {
  return (
    <>
      <Header user={props.user} auth={props.auth} />
      <div class="signed_out_main_panel">
        <div class="signed_out_heading">
          <h1>Helping build the next generation of AI powered SaMD solutions</h1>
        </div>
        <div class="signed_out_heading">
          <div>
            Health.io is committed to helping everyone, everywhere be healthier through products and services that connect and bring meaning to health information. We’re building products to empower people with the information they need to act on their health. We’re developing technology solutions to enable care teams to deliver more connected care. And we’re exploring the use of artificial intelligence to assist in diagnosing cancer, preventing blindness and much more.
          </div>
        </div>
        <div class="signed_out_heading">
          <h1>Every healthcare developer should have access to secure, compliant, state-of-the-art data & AI services.</h1>
        </div>
        <div class="signed_out_heading">
          <div>
            To support meaningful progress across the SaMD development journey, we’re creating tools and resources to help build data & AI driven health applications, faster.          </div>
        </div>
      </div>

    </>
  )
}