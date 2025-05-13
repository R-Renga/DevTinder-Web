import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { Baseurl } from "../utils/constants";
const Login = () => {
const [emailID,setEmail] = useState("vijay@gmail.com");
const [password,setPassword] = useState("vijay@123");
const dispatch = useDispatch();
const navigate = useNavigate();

const handleLogin = async () => {
    try {
        const res = await axios.post(Baseurl + "/login", {
            emailID,
            password
          }, {            withCredentials: true
          });
      console.log("Login success:", res.data);
      dispatch(addUser(res.data))
      navigate("/")
      // You can redirect or store token here
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
    }
  };


  return (
    <div className="flex justify-center">
      <div className="card bg-base-500 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title justify-center">Login</h2>
          <div>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Email Id</legend>
              <input type="text" className="input" value={emailID} placeholder="" onChange={(e)=>setEmail(e.target.value)} />
              <legend className="fieldset-legend">password</legend>
              <input type="text" className="input" value={password} placeholder="" onChange={(e)=>setPassword(e.target.value)} />
            </fieldset>
          </div>
          <div className="card-actions justify-center">
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
