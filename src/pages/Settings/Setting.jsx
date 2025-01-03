import React, { useState } from "react";
import styles from "./Setting.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { HiOutlineLogout } from "react-icons/hi";

export default function Setting() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    new_password: "",
  });

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  const updateUser = async () => {
    // try {
      const _id = localStorage.getItem("userId");
      if (!_id) {
        toast.error("User ID is missing!");
        return;
      }

    //   const response = await axios.put(
    //     "https://form-builder-app-backend.vercel.app/api/v1/auth/update",
    //     { ...formData, _id },
    //     { withCredentials: true }
    //   );

    //   if (response.data.error) {
    //     toast.error(response.data.error);
    //   } else {
    //     toast.success("User updated successfully!");
    //     localStorage.setItem("name", response.data.user.name);
    //     localStorage.setItem("email", response.data.user.email);
    //     setFormData({
    //       name: "",
    //       email: "",
    //       password: "",
    //       new_password: "",
    //     });
    //   }
    // } catch (error) {
    //   console.error(error);
    //   toast.error("An error occurred. Please try again.");
    // }
    try {
      const response = await axios.put(
        "https://form-builder-app-backend.vercel.app/api/v1/auth/update",
        { ...formData, _id },
        { withCredentials: true }
      );
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success("User updated successfully!");
      }
    } catch (error) {
      console.error("Error updating user:", error);
      toast.error("Failed to update user. Please check your input or try again later.");
    }
    
  };

  return (
    <div className={styles.settingContainer}>
      <div className={styles.modal}>
        <h1>Settings</h1>
        <div className={styles.formGroup}>
          <CiUser className={styles.settingIcon} />
          <input type="text" placeholder="Name" />
        </div>
        <div className={styles.formGroup}>
          <CiLock className={styles.settingIcon} />
          <input type="email" placeholder="Update Email" />
        </div>
        <div className={styles.formGroup}>
          <CiLock className={styles.settingIcon} />
          <input type="password" placeholder="Old Password" />
        </div>
        <div className={styles.formGroup}>
          <CiLock className={styles.settingIcon} />
          <input type="password" placeholder="New Password" />
        </div>
        <button className={styles.btn} onClick={updateUser}>
          Update
        </button>
      </div>
      <div className={styles.logout} onClick={handleLogOut}>
        <HiOutlineLogout className={styles.logIcon} />
        Log out
      </div>
    </div>
  );
}
