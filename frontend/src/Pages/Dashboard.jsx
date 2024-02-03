import { Balance } from "../Components/Balance";
import { Appbar } from "../Components/Appbar";
import { Users } from "../Components/Users";
import { SendMoney } from "../Components/SendMoney";

function Dashboard() {
  return (
    <div className="flex justify-self-center flex-col p-6">
      <Appbar />
      <Balance value={"10,000"} />
      <Users />
    </div>
  )
}

export default Dashboard;
