import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signInFailure, signInSuccess } from "../redux/user/userSlice";
const OAuth = () => {
  const dispatch = useDispatch();
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const data = axios.post(
        "/api/auth/google",
        {
          name: result.user.displayName,
          email: result.user.email,
          photo: result.user.photoURL,
        },
        {
          validateStatus: function (status) {
            return status < 500;
          },
        }
      );
      dispatch(signInSuccess(data));
    } catch (error) {
      console.log("couldn't sign in with google " + error);
      dispatch(signInFailure(error));
    }
  };
  return (
    <button
      onClick={handleGoogleClick}
      type="button"
      className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opactiry-95"
    >
      Continue with google
    </button>
  );
};

export default OAuth;
