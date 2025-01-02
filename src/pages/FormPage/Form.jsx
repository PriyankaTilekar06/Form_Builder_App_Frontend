import React, { useState } from "react";
import styles from "./Form.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineTextsms } from "react-icons/md";
import { GoImage } from "react-icons/go";
import { IoVideocamOutline } from "react-icons/io5";
import { MdGif } from "react-icons/md";
import { RxText } from "react-icons/rx";
import { MdOutlineNumbers } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { MdDateRange } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { IoMdCheckboxOutline } from "react-icons/io";
import { BiSolidFlagAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Form() {
  const navigate = useNavigate();
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [modals, setModals] = useState([]);
  const [isShareActive, setIsShareActive] = useState(false);

  const handleButtonClick = (title, Icon) => {
    setModals((prevModals) => [...prevModals, { id: Date.now(), title, Icon }]);
  };

  const handleDeleteModal = (id) => {
    setModals((prevModals) => prevModals.filter((modal) => modal.id !== id));
  };

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const handleResponse = () => {
    navigate("/response");
  };

  const handleInputChange = (id, value) => {
    setModals((prevModals) =>
      prevModals.map((modal) => (modal.id === id ? { ...modal, value } : modal))
    );
  };

  const handleShare = () => {
    if (modals.length > 0) {
      const formInputs = modals.map((modal) => ({
        id: modal.id,
        title: modal.title,
        type: modal.title.toLowerCase(),
        placeholder: `Enter your ${modal.title.toLowerCase()}`,
      }));
      localStorage.setItem("formInputs", JSON.stringify(formInputs));
      window.open("/sharedform", "_blank");
    }
  };

  const handleSave = () => {
    if (modals.length > 0) {
      const hasEmptyInput = modals.some((modal) => !modal.value?.trim());
      if (hasEmptyInput) {
        toast.error("Please fill in all fields.");
        return;
      }
      localStorage.setItem("savedModals", JSON.stringify(modals));
      setIsShareActive(true);
      toast.success("Form saved successfully!");
      console.log("Saved Data:", modals); 
    } else {
      toast.error("No inputs to save.");
    }
  };

  return (
    <div
      className={`${styles.formContainer} ${
        isDarkTheme ? styles.dark : styles.light
      }`}
    >
      <nav className={styles.formNav}>
        <div className={styles.formNavInput}>
          <input placeholder="Enter Form Name" />
        </div>
        <div className={styles.formBtn}>
          <button className={styles.formFlow}>Flow</button>
          <button className={styles.formResponse} onClick={handleResponse}>
            Response
          </button>
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
          <button
            className={`${styles.formShare} ${
              isShareActive ? styles.activeShare : ""
            }`}
            onClick={handleShare}
          >
            Share
          </button>
          <button className={styles.formSave} onClick={handleSave}>
            Save
          </button>
          <button className={styles.formClose}>X</button>
        </div>
      </nav>

      <div className={styles.mainFormCon}>
        <div className={styles.formLeft}>
          <div className={styles.formBubbles}>
            <p className={styles.formHeading}>Bubbles</p>
            <button onClick={() => handleButtonClick("Text", MdOutlineTextsms)}>
              <MdOutlineTextsms className={styles.btnIcon} /> Text
            </button>
            <button onClick={() => handleButtonClick("Image", GoImage)}>
              <GoImage className={styles.btnIcon} /> Image
            </button>
            <button
              onClick={() => handleButtonClick("Video", IoVideocamOutline)}
            >
              <IoVideocamOutline className={styles.btnIcon} /> Video
            </button>
            <button onClick={() => handleButtonClick("GIF", MdGif)}>
              <MdGif className={styles.btnIcon} /> GIF
            </button>
          </div>
          <div className={styles.formInput}>
            <p className={styles.formHeading}>Inputs</p>
            <button onClick={() => handleButtonClick("Text", RxText)}>
              <RxText className={styles.inputIcon} /> Text
            </button>
            <button
              onClick={() => handleButtonClick("Number", MdOutlineNumbers)}
            >
              <MdOutlineNumbers className={styles.inputIcon} />
              Number
            </button>
            <button
              onClick={() =>
                handleButtonClick("Email", MdOutlineAlternateEmail)
              }
            >
              <MdOutlineAlternateEmail className={styles.inputIcon} />
              Email
            </button>
            <button onClick={() => handleButtonClick("Phone", FiPhone)}>
              <FiPhone className={styles.inputIcon} />
              Phone
            </button>
            <button onClick={() => handleButtonClick("Date", MdDateRange)}>
              <MdDateRange className={styles.inputIcon} />
              Date
            </button>
            <button onClick={() => handleButtonClick("Rating", FaRegStar)}>
              <FaRegStar className={styles.inputIcon} />
              Rating
            </button>
            <button
              onClick={() => handleButtonClick("Buttons", IoMdCheckboxOutline)}
            >
              <IoMdCheckboxOutline className={styles.inputIcon} />
              Buttons
            </button>
          </div>
        </div>
        <div className={styles.formRight}>
          <div className={styles.formStart}>
            <BiSolidFlagAlt className={styles.startIcon} />
            Start
          </div>

          {modals.map((modal) => (
            <div key={modal.id} className={styles.modalContainer}>
              <div className={styles.formRightCon}>
                <h1>{modal.title}</h1>
                <div className={styles.formInputContainer}>
                  {modal.Icon && (
                    <modal.Icon className={styles.formRightText} />
                  )}
                  <input
                    type="text"
                    value={modal.value || ""}
                    onChange={(e) =>
                      handleInputChange(modal.id, e.target.value)
                    }
                    placeholder={`Enter ${modal.title}`}
                    style={{
                      borderColor: !modal.value?.trim() ? "red" : "initial",
                    }}
                  />
                </div>
                <div
                  className={styles.formDeleteIcon}
                  onClick={() => handleDeleteModal(modal.id)}
                >
                  <RiDeleteBin6Line className={styles.formDel} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
