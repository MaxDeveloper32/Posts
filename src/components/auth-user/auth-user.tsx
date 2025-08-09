"use client";
import { useLogin } from "@/app/features/auth/auth";
import { useState } from "react";
import "./auth-user.css";

const AuthUser = () => {
  const { mutate: auth } = useLogin();
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    auth({
      username,
      password,
      expiresInMins: 1,
    });
  };

  return (
    <section className="form-data">
      <form className="form-data__form" onSubmit={handleSubmit}>
        <h3 className="form-data__title">Форма входа</h3>

        <div className="form-data__group">
          <input
            onChange={(e) => setUsername(e.target.value)}
            className="form-data__control-item"
            type="text"
            name="name"
            placeholder="Email"
          />
        </div>

        <div className="form-data__group">
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="form-data__control-item"
            type="password"
            name="Пароль"
            placeholder="Пароль"
          />
          <div></div>
        </div>

        <div className="form-data__group">
          <button className="form-data__button-entrance" type="submit">
            Вход в аккаунт
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthUser;
