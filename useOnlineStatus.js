import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [status, setStatus] = useState(null);

  useEffect(() => {
    window.addEventListener("offline", () => {
      setStatus(false);
    });
    window.addEventListener("online", () => {
      setStatus(true);
    });
  }, []);
  return status;
};
export default useOnlineStatus;
