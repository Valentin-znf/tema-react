import axios from "axios";
const Base_Request_URL='http//localhost:3002'

export const fetchOrders=()=>{
    return axios.get( $,{Base_Request_URL}/orders).then((res)=> res.data);