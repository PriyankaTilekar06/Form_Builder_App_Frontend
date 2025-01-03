// import React, { useState, useEffect } from "react";
// import styles from "./SharedForm.module.css";

// export default function SharedForm() {
//   const [formInputs, setFormInputs] = useState([]);
//   const [currentInputIndex, setCurrentInputIndex] = useState(0);

//   useEffect(() => {
//     const savedModals = JSON.parse(localStorage.getItem("savedModals")) || [];
//     setFormInputs(savedModals);
//   }, []);

//   const handleSend = (inputValue) => {
//     if (!inputValue || inputValue.trim() === "") return;

//     const updatedInputs = [...formInputs];
//     updatedInputs[currentInputIndex].value = inputValue;
//     setFormInputs(updatedInputs);

//     if (currentInputIndex < formInputs.length - 1) {
//       setCurrentInputIndex(currentInputIndex + 1);
//     }
//   };

//   return (
//     <div className={styles.chatContainer}>
//       <div className={styles.messages}>
//         {formInputs.map((input, index) => (
//           <div 
//             key={input.id || index} 
//             className={styles.message}
//           >
//             <div className={styles.question}>
//               {input.question}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className={styles.responses}>
//         {formInputs.map((input, index) => (
//           input.value && (
//             <div key={input.id || index} className={styles.response}>
//               <div className={styles.text}>
//                 {input.value}
//               </div>
//             </div>
//           )
//         ))}
//       </div>

//       <div className={styles.inputContainer}>
//         {currentInputIndex < formInputs.length && (
//           <>
//             <input
//             className={styles.shareInput}
//               placeholder="Type a message..."
//               type="text"
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   handleSend(e.target.value);
//                   e.target.value = "";
//                 }
//               }}
//             />
//             <button onClick={() => handleSend(document.querySelector('input').value)} className={styles.shareSend}>Send</button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";
import styles from "./SharedForm.module.css";

export default function SharedForm() {
  const [questions, setQuestions] = useState([
    "What is your name?",
    "What is your favorite color?",
    "Where are you from?",
    "What is your hobby?",
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState([]);

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
