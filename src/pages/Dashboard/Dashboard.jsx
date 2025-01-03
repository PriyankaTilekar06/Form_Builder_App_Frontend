import React, { useContext, useState } from "react";
import styles from "./Dashboard.module.css";
import { UserContext } from "../../../context/userContext";
import { LuFolderPlus } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { FiTrash } from "react-icons/fi";
import { IoMdArrowDropdown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  // const { user } = useContext(UserContext);
  const userName = localStorage.getItem("name")
  const navigate = useNavigate();
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isFolderPopupOpen, setIsFolderPopupOpen] = useState(false);
  const [isTypebotPopupOpen, setIsTypebotPopupOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [formName, setFormName] = useState("");
  const [folders, setFolders] = useState([]);
  const [files, setFiles] = useState([]);
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSharePopupOpen, setIsSharePopupOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  const handleCreateFolder = () => {
    setIsFolderPopupOpen(true);
  };

  const handleCreateTypebot = () => {
    setIsTypebotPopupOpen(true);
  };

  const handleClosePopups = () => {
    setIsFolderPopupOpen(false);
    setIsTypebotPopupOpen(false);
    setFolderName("");
    setFormName("");
  };

  const handleAddFolder = () => {
    if (folderName.trim()) {
      setFolders([
        ...folders,
        {
          id: Date.now(),
          name: folderName,
          color: isDarkTheme ? "dark" : "light",
        },
      ]);
      setFolderName("");
      setIsFolderPopupOpen(false);
    }
  };

  const handleAddFile = () => {
    if (formName.trim()) {
      setFiles([
        ...files,
        {
          id: Date.now(),
          name: formName,
          color: isDarkTheme ? "dark" : "light",
        },
      ]);
      setFormName("");
      setIsTypebotPopupOpen(false);
    }
  };

  const handleDeleteConfirmation = (type, id) => {
    setDeleteTarget({ type, id });
    setIsDeletePopupOpen(true);
  };

  const handleConfirmDelete = () => {
    if (deleteTarget.type === "folder") {
      setFolders(folders.filter((folder) => folder.id !== deleteTarget.id));
    } else if (deleteTarget.type === "file") {
      setFiles(files.filter((file) => file.id !== deleteTarget.id));
    }
    setDeleteTarget(null);
    setIsDeletePopupOpen(false);
  };

  const handleCancelDelete = () => {
    setDeleteTarget(null);
    setIsDeletePopupOpen(false);
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleSettings = () => {
    navigate("/setting");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  const handleShare = () => {
    setIsSharePopupOpen(true);
  };

  const handleCloseSharePopup = () => {
    setIsSharePopupOpen(false);
  };

  const handleForm = () => {
    navigate('/form')
  }

  return (
    <div
      className={`${styles.dashboardContainer} ${
        isDarkTheme ? styles.dark : styles.light
      }`}
    >
      <nav className={styles.dashboardNav}>
        <div className={styles.dashName}>
          {!!userName && (
            <div className={styles.dashNameWrapper}>
              <p>
                {userName}'s workspace{" "}
                <span
                  className={`${styles.arrowDown} ${
                    isDropdownOpen ? "up" : ""
                  }`}
                  onClick={handleToggleDropdown}
                >
                  <IoIosArrowDown />
                </span>{" "}
              </p>
              {isDropdownOpen && (
                <div className={styles.dropdownMenu}>
                  <div
                    className={styles.dropdownSetting}
                    onClick={handleSettings}
                  >
                    Settings
                  </div>
                  <div className={styles.dropdownLog} onClick={handleLogout}>
                    Logout
                  </div>
                </div>
              )}
            </div>
          )}
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
        <button className={styles.dashShare} onClick={handleShare}>
          Share
        </button>
      </nav>

      <div className={styles.dashFolder}>
        <div className={styles.folder} onClick={handleCreateFolder}>
          <span>
            <LuFolderPlus />
          </span>{" "}
          <p>Create a folder</p>
        </div>
        <div className={styles.folderContainer}>
          {folders.map((folder) => (
            <div
              key={folder.id}
              className={`${styles.folderItem} ${
                folder.color === "dark" ? styles.darkFolder : styles.lightFolder
              }`}
            >
              <p>{folder.name}</p>
              <FiTrash
                className={styles.deleteIcon}
                onClick={() => handleDeleteConfirmation("folder", folder.id)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dashFile}>
        <div className={styles.dashCreate} onClick={handleCreateTypebot}>
          <h1>+</h1>
          <p className={styles.typebot}>Create a typebot</p>
        </div>
        <div className={styles.fileContainer} onClick={handleForm}>
          {files.map((file) => (
            <div
              key={file.id}
              className={`${styles.fileItem} ${
                file.color === "dark" ? styles.darkFile : styles.lightFile
              }`}
            >
              <p>{file.name}</p>
              <FiTrash
                className={styles.deleteIconFile}
                onClick={() => handleDeleteConfirmation("file", file.id)}
              />
            </div>
          ))}
        </div>
      </div>

      {isFolderPopupOpen && (
        <div className={styles.popup}>
          <h2>Create New Folder</h2>
          <input
            type="text"
            placeholder="Enter folder name"
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
          />
          <div className={styles.popupActions}>
            <button
              onClick={() => {
                console.log("Folder Created:", folderName);
                handleAddFolder();
                handleClosePopups();
              }}
            >
              Done
            </button>
            <button onClick={handleClosePopups}>Cancel</button>
          </div>
        </div>
      )}

      {isTypebotPopupOpen && (
        <div className={styles.popup}>
          <h2>Create a Form</h2>
          <input
            type="text"
            placeholder="Enter file name"
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
          />
          <div className={styles.popupActions}>
            <button
              onClick={() => {
                console.log("Form Created:", formName);
                handleClosePopups();
                handleAddFile();
              }}
            >
              Done
            </button>
            <button onClick={handleClosePopups}>Cancel</button>
          </div>
        </div>
      )}

      {isDeletePopupOpen && (
        <div className={styles.popup}>
          <h2>
            Are you sure you want to delete this{" "}
            {deleteTarget.type === "folder" ? "folder" : "form"}?
          </h2>
          <div className={styles.popupActions}>
            <button onClick={handleConfirmDelete}>Confirm</button>
            <button onClick={handleCancelDelete}>Cancel</button>
          </div>
        </div>
      )}

      {isSharePopupOpen && (
        <div className={styles.sharePopupOverlay}>
          <div className={styles.sharePopup}>
            {/* <h2>Invite by Email</h2>
            <input
              type="email"
              placeholder="Enter email"
              className={styles.shareInput}
            />
            <button className={styles.shareButton}>Send Invite</button>
            <h2>Invite by Link</h2>
            <button className={styles.copyLinkButton}>Copy Link</button>
            <button
              className={styles.closePopupButton}
              onClick={handleCloseSharePopup}
            >
              Close
            </button> */}
            <div className={styles.inviteContainer}>
        <span className={styles.closeBtn} onClick={handleCloseSharePopup}>&times;</span>
        <div className={styles.inviteHeader}>
            <h2>Invite by Email</h2>
            <div className={styles.dropdown}>
                <button>Edit <IoMdArrowDropdown /> </button>
                <div className={styles.dropdownContent}>
                    <a href="#">Edit</a>
                    <a href="#">View</a>
                </div>
            </div>
        </div>
        <input type="text" placeholder="Enter email id" />
        <button>Send Invite</button>
        <h2>Invite by link</h2>
        <button>Copy link</button>
    </div>
          </div>
        </div>
      )}

      {/* <h1>Dashboard</h1>
      {!!user && (<h2>Hey {user.name}!</h2>)} */}
    </div>
  );
}
