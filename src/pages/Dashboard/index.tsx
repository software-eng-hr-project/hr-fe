import http from "utils/axios.utils";

export default function Dashboard() {
  return (
    <div>
      <button
        type="submit"
        onClick={() => {
          http.get("services/app/User/GetAll");
        }}
      >
        API test
      </button>
    </div>
  );
}
