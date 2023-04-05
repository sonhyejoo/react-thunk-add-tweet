import { useState } from "react";
import { useDispatch } from "react-redux";
import { writeTweet } from "./store/tweet";

export default function CreateTweet() {
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (msg) {
      console.log("is this on");
      const tweet = {
        message: msg,
      };

      dispatch(writeTweet(tweet));
      setMsg("");
    }
  };
  return (
    <div>
      What's happening?
      <form htmlFor="create-tweet" onSubmit={handleSubmit}>
        <textarea
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}
