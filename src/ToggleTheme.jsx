import { Helmet } from "react-helmet-async";
import { useState } from "react";

const ToggleTheme = () => {
  if (localStorage.getItem('mode') === null) {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      localStorage.setItem('mode', 'dark');
    } else {
      localStorage.setItem('mode', 'light');
    }
  }
  const [mode, setMode] = useState(localStorage.getItem('mode'));
  return (
    <>
      <Helmet>
        <meta name="color-scheme" content={mode} />
      </Helmet>
      <fieldset style={{ maxWidth: "max-content", margin: "0.4rem 0.4rem" }}>
        <legend>Theme</legend>
        <div>
          <input
            type="radio"
            id="light-mode"
            name="theme"
            value="light"
            checked={mode === "light"}
            onChange={(e) => {
              localStorage.setItem("mode", e.target.value);
              setMode(e.target.value);
            }}
          />
          <label htmlFor="light-mode">Light</label>
          <input
            type="radio"
            id="dark-mode"
            name="theme"
            value="dark"
            checked={mode === "dark"}
            onChange={(e) => {
              localStorage.setItem("mode", e.target.value);
              setMode(e.target.value);
            }}
          />
          <label htmlFor="dark-mode">Dark</label>
        </div>
      </fieldset>
    </>
  )
}

export default ToggleTheme;