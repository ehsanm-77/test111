"use client";

import type { AppDispatch, RootState } from "@/lib/store";
import { setTheme } from "@/lib/store/slices/userPersistSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ThemeToggle() {
  const dispatch = useDispatch<AppDispatch>();
  const theme = useSelector((s: RootState) => s.userPersist.theme);
  console.log("hi4");

  return (
    <div>
      <p>Theme: {theme}</p>
      <button
        onClick={() => dispatch(setTheme(theme === "light" ? "dark" : "light"))}
      >
        Toggle theme
      </button>
    </div>
  );
}
