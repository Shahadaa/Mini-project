import axios from 'axios'
const UserInstance=axios.create({baseURL:"http://localhost:5000"})
const AdminIntance=axios.create({baseURL:"http://localhost:5000/Admin"})

export { UserInstance,AdminIntance}