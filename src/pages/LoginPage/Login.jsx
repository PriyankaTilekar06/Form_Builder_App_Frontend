import React, { useState } from "react";
import styles from "./LoginPage.module.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaArrowLeft } from "react-icons/fa6";
import triangle from "../../assets/triangle.png";
import halfCircleSleep from "../../assets/halfCircleSleep.png";
import halfCircleStand from "../../assets/halfCircleStand.png";

export default function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    try {
      const { data } = await axios.post("/login", {
        email,
        password,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className={styles.loginContainer}>
      <div>
        <FaArrowLeft
          className={styles.backArrow}
          onClick={() => navigate(-1)}
        />
      </div>
      <img src={triangle} alt="triangle" className={styles.triangle} />
      <form onSubmit={loginUser} className={styles.loginFormContainer}>
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="**********"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <button type="submit" className={styles.formLogin}>
          Log In
        </button>
        <p className={styles.or}>OR</p>
        <button className={styles.withGoogle}>
          <div className={styles.googleIcon}>
            <FcGoogle />
          </div>
          Sign Up with Google
        </button>
        <p className={styles.acc}>
          Don't have an account ?{" "}
          <span onClick={handleRegister}>Register now</span>
        </p>
      </form>
      <img src={halfCircleSleep} className={styles.circleSleep} />
      <img src={halfCircleStand} className={styles.circleStand} />
    </div>
  );
}
