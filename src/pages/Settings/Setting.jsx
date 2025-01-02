import React from 'react'
import styles from './Setting.module.css'
import { useNavigate } from 'react-router-dom';
import { CiUser } from "react-icons/ci";
import { CiLock } from "react-icons/ci";
import { HiOutlineLogout } from "react-icons/hi";

export default function Setting() {
  const navigate = useNavigate()

  const handleLogOut = () =>{
    navigate('/login')
  }

  return (
    <div className={styles.settingContainer}>
      <div className={styles.modal}>
        <h1>Settings</h1>
        <div className={styles.formGroup}>
            <CiUser className={styles.settingIcon}/>
            <input type="text" placeholder="Name" />
        </div>
        <div className={styles.formGroup}>
            <CiLock className={styles.settingIcon}/>
            <input type="email" placeholder="Update Email" />
        </div>
        <div className={styles.formGroup}>
            <CiLock className={styles.settingIcon}/>
            <input type="password" placeholder="Old Password" />
        </div>
        <div className={styles.formGroup}>
            <CiLock className={styles.settingIcon}/>
            <input type="password" placeholder="New Password" />
        </div>
        <button className={styles.btn}>Update</button>
    </div>
    <div className={styles.logout} onClick={handleLogOut}>
        <HiOutlineLogout className={styles.logIcon}/>
        Log out
    </div>
    </div>
  )
}
