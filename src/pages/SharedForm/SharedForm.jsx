import React, { useState, useEffect } from "react";
import styles from "./SharedForm.module.css";

export default function SharedForm() {
  const [questions, setQuestions] = useState([
    "hi",
    "What is your name?",
    "What is your favorite color?",
    "Where are you from?",
    "What is your hobby?",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState([]);

  const handleSend = (response) => {
    if (!response || response.trim() === "") return;
    setResponses([...responses, { question: questions[currentIndex], response }]);
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    }, 1000);
  };

  useEffect(() => {
    if (currentIndex === questions.length) {
      // Stop handling responses when all questions are answered
    }
  }, [currentIndex, questions.length]);

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {responses.map((entry, index) => (
          <div key={index}>
            <div className={styles.questionBubble}>{entry.question}</div>
            <div className={styles.responseBubble}>{entry.response}</div>
          </div>
        ))}

        {currentIndex < questions.length && (
          <div className={styles.questionBubble}>{questions[currentIndex]}</div>
        )}
      </div>

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
