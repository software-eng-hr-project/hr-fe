import { useEffect } from "react";
import http from "utils/axios.utils";

export default function Reports() {
  useEffect(() => {
    http
      .post("/TokenAuth/Authenticate", {
        userNameOrEmailAddress: "admin",
        password: "123qwe",
        rememberClient: false,
      })
      .then((res) => {
        localStorage.setItem("access-token", res.data.result.accessToken);
      });
  }, []);
  return (
    <div>
      <button type="button" onClick={() => http.get("/users")}>
        Axios Deneme Button{" "}
      </button>
    </div>
  );
}
