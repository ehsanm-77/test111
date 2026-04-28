"use client";

import type { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../lib/store/slices/userSlices";

export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);
  console.log("hi3");
  return (
    <div>
      <p>User: {user.name ?? "No user"}</p>

      <button
        onClick={() => dispatch(login("Ali"))}
        className="bg-green-500 text-white p-2 rounded"
      >
        Login
      </button>
    </div>
  );
}
