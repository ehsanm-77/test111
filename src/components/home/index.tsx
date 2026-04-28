import Login from "./login";
import ThemeToggle from "./theme";

function HomeComponent() {
  console.log("hi2");

  return (
    <div>
      <Login />
      <ThemeToggle />
    </div>
  );
}

export default HomeComponent;
