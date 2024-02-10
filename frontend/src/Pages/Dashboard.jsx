import { Balance } from "../Components/Balance";
import { Appbar } from "../Components/Appbar";
import { Users } from "../Components/Users";
import { useEffect, useState } from "react";
import axios from "axios"

function Dashboard() {
  const [balance, setBalance] = useState(0)

  useEffect(() => {
    axios.get("https://paytm-server.onrender.com/api/v1/account/balance", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(res => {
        setBalance(res.data.balance)
      })
  })

  return (
    <div className="flex justify-self-center flex-col p-6">
      <Appbar />
      <Balance value={balance} />
      <Users />
    </div>
  )
}

export default Dashboard;
