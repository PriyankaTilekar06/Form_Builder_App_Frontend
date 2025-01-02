import React, { useState } from "react";
import styles from "./Register.module.css";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaArrowLeft } from "react-icons/fa6";
import triangle from '../../assets/triangle.png'
import halfCircleSleep from '../../assets/halfCircleSleep.png'
import halfCircleStand from '../../assets/halfCircleStand.png'

export default function Register() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = data;

    if (!name || !email || !password || !confirmPassword) {
      return toast.error("Please fill in all fields");
    }

    try {
      setLoading(true);
      const { data } = await axios.post("/register", {
        name,
        email,
        password,
        confirmPassword,
      });
      if (data.error) {
        toast.error(data.error);
      } else {
        setData({});
        toast.success("Registered Successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <div className={styles.registerContainer}>
      <div>
        <FaArrowLeft className={styles.backArrow} onClick={() => navigate(-1)}/>
      </div>
      <img src={triangle} alt="triangle" className={styles.triangle}/>
      <form onSubmit={registerUser} className={styles.registerFormContainer}>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter a username"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          disabled={loading}
        />
        <label>Email</label>
        <input
          type="text"
          placeholder="Enter your email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          disabled={loading}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="**********"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          disabled={loading}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          placeholder="**********"
          value={data.confirmPassword}
          onChange={(e) =>
            setData({ ...data, confirmPassword: e.target.value })
          }
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading}
          className={styles.registerSign}
        >
          {loading ? "Signing Up..." : "Sign Up"}
        </button>
        <p className={styles.or}>OR</p>
        <button className={styles.withGoogle}>
          <div className={styles.googleIcon}>
            <FcGoogle />
          </div>
          Sign Up with Google
        </button>
        <p className={styles.acc}>
          Already have an account ? <span onClick={handleLogin}>Login</span>
        </p>
      </form>
      <img src={halfCircleSleep} className={styles.circleSleep}/>
      <img src={halfCircleStand} className={styles.circleStand}/>
    </div>
  );
}
