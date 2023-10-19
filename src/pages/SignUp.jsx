import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleOnChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    console.log(formData);
  };
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post("/api/auth/signup", formData, {
        validateStatus: function (status) {
          return status < 500;
        },
      });
      if (response.data.status === "error") {
        setLoading(false);
        setError(response.data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in")
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleOnChange}
        />
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
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700">Sign in</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default SignUp;
