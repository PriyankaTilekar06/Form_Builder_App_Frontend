import React, { useEffect, useState } from "react";
import styles from "./SharedForm.module.css";

export default function SharedForm({ questions = [] }) {
  const [questions, setQuestions] = useState([
    "What is your name?",
    "What is your favorite color?",
    "Where are you from?",
    "What is your hobby?",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState([]);

  // useEffect(() => {
  //   // Simulate fetching data or set it dynamically
  //   if (!questions.length) {
  //     setQuestions(modals.map((modal) => modal.title)); // Example of dynamic data
  //   }
  // }, [modals]);
  useEffect(() => {
    const savedQuestions = JSON.parse(localStorage.getItem("formInputs")) || [];
    setQuestions(savedQuestions.map((input) => input.title));
  }, []);
  

  const handleSend = (response) => {
    if (!response || response.trim() === "") return;

    // Add the response to the list
    setResponses([...responses, { question: questions[currentIndex], response }]);

    // Move to the next question
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {/* Display all responses */}
        {responses.map((entry, index) => (
          <div key={index}>
            <div className={styles.questionBubble}>{entry.question}</div>
            <div className={styles.responseBubble}>{entry.response}</div>
          </div>
        ))}

        {/* Display the current question */}
        {currentIndex < questions.length && (
          <div className={styles.questionBubble}>{questions[currentIndex]}</div>
        )}
      </div>

      {/* Input box for the user's response */}
      {currentIndex < questions.length && (
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Type your response..."
            className={styles.inputField}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend(e.target.value);
                e.target.value = "";
              }
            }}
          />
          <button
            onClick={() => {
              const input = document.querySelector(`.${styles.inputField}`);
              handleSend(input.value);
              input.value = "";
            }}
            className={styles.sendButton}
          >
            Send
          </button>
        </div>
      )}
    </div>
  );
}



