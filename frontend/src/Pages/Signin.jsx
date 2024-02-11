import { BottomWarning } from "../Components/BottomWarning"
import { Button } from "../Components/Button"
import { Header } from "../Components/Header"
import { InputBox } from "../Components/InputBox"
import { Subheading } from "../Components/Subheading"

export const Signin = () => {

  return <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
        <Header label={"Sign in"} />
        <Subheading label={"Enter your credentials to access your account"} />
        <InputBox placeholder="jhondoe@gmail.com" label={"Email"} />
        <InputBox placeholder="123456" label={"Password"} />
        <div className="pt-4">
          <Button label={"Sign in"} />
        </div>
        <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"} />
      </div>
    </div>
  </div>
}
