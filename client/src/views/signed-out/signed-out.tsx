import { Auth, User } from "firebase/auth";
import { Header } from "../../components/header/header"

import "./signed-out.css"

export function SignedOut(props: { path: string; user: User | undefined; auth: Auth }) {
  return (
    <>
      <Header user={props.user} auth={props.auth} />
    </>
  )
}