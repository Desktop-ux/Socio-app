import { useState } from "react";
import Feed from "./Pages/Feed/Feed";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";

function App() {
  const [page, setPage] = useState("login");
  const [loggedIn, setLoggedIn] = useState(false);

  if (!loggedIn) {
    return page === "login" ? (
      <Login
        onLogin={() => setLoggedIn(true)}
        goSignup={() => setPage("signup")}
      />
    ) : (
      <Signup goLogin={() => setPage("login")} />
    );
  }

  return <Feed />;
}

export default App;
