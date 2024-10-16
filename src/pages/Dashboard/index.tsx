import Tooltip from "components/common/Tooltip";
import http from "utils/axios.utils";

export default function Dashboard() {
  return (
    <div>
      <Tooltip label="this is testing for backend service">
        <button
          type="submit"
          onClick={() => {
            http.get("/users");
          }}
        >
          API test
        </button>
      </Tooltip>
    </div>
  );
}
