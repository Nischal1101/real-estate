import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import OAuth from "./../components/OAuth";
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/user/userSlice";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());
    // setLoading(true);
    try {
      const response = await axios.post("/api/auth/signin", formData, {
        validateStatus: function (status) {
          return status < 500;
        },
      });
      if (response.data.status === "error") {
        dispatch(signInFailure(response.data.message));
        // setLoading(false);
        // setError(response.data.message);
        return;
      }
      dispatch(signInSuccess(response.data.data.rest));
      // setLoading(false);
      // setError(null);
      navigate("/");
    } catch (error) {
      console.log(error);
      // setLoading(false);
      // setError(error.message);
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleOnChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleOnChange}
        />
        <button
          disabled={loading}
          type="submit"
          className="uppercase bg-slate-700 p-3 text-white rounded-lg hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign In"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont have an account?</p>
        <Link to="/sign-up">
          <span className="text-blue-700">Sign up</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error.message}</p>}
    </div>
  );
};

export default SignIn;
