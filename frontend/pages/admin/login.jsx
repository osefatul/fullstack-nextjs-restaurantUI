import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    try {
      await axios.post("http://localhost:3000/api/login", {
        username,
        password,
      });
      router.push("/admin");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="h-almost flex items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-2xl 2xl:text-3xl font-bold mb-8">
          Admin Dashboard
        </h1>
        <input
          className="border-2 h-10 mb-6 px-3 "
          type="text"
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="border-2 h-10 mb-8 px-3 "
          type="text"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className=" h-10 rounded-lg mb-6 bg-[teal] text-white text-lg cursor-pointer"
          onClick={handleClick}
        >
          Sign In
        </button>

        {error && <span className="text-red-800">Wrong Credentials</span>}
      </div>{" "}
    </div>
  );
}

export default Login;
