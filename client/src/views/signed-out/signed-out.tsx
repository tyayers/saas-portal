import { Auth, User } from "firebase/auth";
import { Header } from "../../components/header/header"

import "./signed-out.css"
import { InputButton } from "../../components/input-button/input-button";
import { route } from "preact-router";

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
            Health.io is committed to helping developers and data scientists to learn,
            build and publish innovative AI powered Software as a Medical Device (SaMD) solutions.
            We’re developing technology platforms to enable faster, more secure and compliant medical software solutions.
            And we’re exploring the use of artificial intelligence to assist in recognizing diseases earlier for better health outcomes, for everyone.
          </div>
        </div>
        <div class="signed_out_heading_small">
          <InputButton text="Register" type="primary" action={() => route("/sign-in")}></InputButton>
        </div>
      </div>

    </>
  )
}