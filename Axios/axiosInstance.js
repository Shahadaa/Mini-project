import axios from "axios";
const UserInstance = axios.create({ baseURL: "http://localhost:8000" });
const AdminIntance = axios.create({ baseURL: "http://localhost:8000/Admin" });

export { UserInstance, AdminIntance };
