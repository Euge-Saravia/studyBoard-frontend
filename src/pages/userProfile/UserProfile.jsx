import { useState } from "react";
import LoadingModal from "../../components/modals/loadingModal/LoadingModal";
import UserHomeProfile from "../../components/userHomeProfile/UserHomeProfile";

const UserProfile = () => {
  const [loading] = useState(false)

  return (
    <>
      <LoadingModal isOpen={loading} />
      <div>
        <UserHomeProfile />
      </div>
    </>

  )
}


export default UserProfile
