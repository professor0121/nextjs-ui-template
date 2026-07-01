"use client";

import { useState } from "react";

export default function PasswordProtected() {
  const [password, setPassword] = useState("");
  const [failed, setFailed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password) {
      setFailed(true);
    }
  };

  return (
    <div className="utility-page-wrap">
      <div className="utility-page-content w-password-page w-form">
        <form className="utility-page-form w-password-page" onSubmit={handleSubmit}>
          <h1 className="title-401">Protected Page</h1>
          <div className="input-field-wrapper-404">
            <label className="hidden-label w-password-page" htmlFor="pass">
              Password
            </label>
            <input
              autoFocus
              className="input-field-404 w-password-page w-input"
              id="pass"
              maxLength={256}
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <input
            className="submit-button w-password-page w-button"
            type="submit"
            value="Submit"
          />
          {failed && (
            <div className="w-password-page w-form-fail" style={{ display: "block" }}>
              <div>Incorrect password. Please try again.</div>
            </div>
          )}
        </form>
      </div>
      <div className="utility-bg-text">Protected</div>
    </div>
  );
}
