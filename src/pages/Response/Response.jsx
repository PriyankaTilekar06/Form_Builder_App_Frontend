import React, { useState } from "react";
import styles from "./Response.module.css";
import { useNavigate } from "react-router-dom";
import PieChart from "../../components/PieChart";
import SharedForm from "./SharedForm"; // Import SharedForm component

export default function Response() {
  const navigate = useNavigate();
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isSharedFormOpen, setIsSharedFormOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const handleFlow = () => {
    navigate("/response");
  };

  const openSharedForm = () => {
    setIsSharedFormOpen(true); // Set to true when SharedForm is opened
  };

  return (
    <div
      className={`${styles.formContainer} ${
        isDarkTheme ? styles.dark : styles.light
      }`}
    >
      <nav className={styles.formNav}>
        <div className={styles.formBtn}>
          <button className={styles.formFlow} onClick={handleFlow}>
            Flow
          </button>
          <button className={styles.formResponse}>Response</button>
        </div>
        <div className={styles.navTheme}>
          <p>Light</p>
          <label className={styles.switch}>
            <input
              type="checkbox"
              checked={isDarkTheme}
              onChange={toggleTheme}
            />
            <span className={styles.sliderRound}></span>
          </label>
          <p>Dark</p>
        </div>
        <div className={styles.formBtns}>
          <button className={styles.formShare} onClick={openSharedForm}>
            Share
          </button>
          <button className={styles.formSave}>Save</button>
          <button className={styles.formClose}>X</button>
        </div>
      </nav>

      <div className={styles.resMainCon}>
        <div className={styles.resView}>
          <p>Views</p>
          <p>6</p>
        </div>
        <div className={styles.resStart}>
          <p>Starts</p>
          <p>100</p>
        </div>
      </div>

      <div className={styles.resTable}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Submitted at</th>
              <th>Button 1</th>
              <th>Email 1</th>
              <th>Text 1</th>
              <th>Button 2</th>
              <th>Rating 1</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="#">1</td>
              <td data-label="Submitted at">Jul 17, 03:23 PM</td>
              <td data-label="Button 1">Hi!</td>
              <td data-label="Email 1">abc@g.com</td>
              <td data-label="Text 1">alpha</td>
              <td data-label="Button 2">
                Studio App to Manage Clients, Tracking App for Clients
              </td>
              <td data-label="Rating 1">5</td>
            </tr>
            <tr>
              <td data-label="#">2</td>
              <td data-label="Submitted at">Jul 17, 02:48 PM</td>
              <td data-label="Button 1">Hi!</td>
              <td data-label="Email 1"></td>
              <td data-label="Text 1">fsdfasd</td>
              <td data-label="Button 2"></td>
              <td data-label="Rating 1">3</td>
            </tr>
            <tr>
              <td data-label="#">3</td>
              <td data-label="Submitted at">Jul 14, 04:25 PM</td>
              <td data-label="Button 1">Hi!</td>
              <td data-label="Email 1"></td>
              <td data-label="Text 1"></td>
              <td data-label="Button 2"></td>
              <td data-label="Rating 1">4</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <PieChart />
      </div>

      {isSharedFormOpen && <SharedForm />} {/* Conditionally render SharedForm */}
    </div>
  );
}
