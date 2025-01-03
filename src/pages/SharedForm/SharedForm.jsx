// import React, { useEffect, useState } from "react";
// import styles from "./SharedForm.module.css";

// export default function SharedForm({ questions = [] }) {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [responses, setResponses] = useState([]);
//   const [questions, setQuestions] = useState([]);
// // const [modals, setModals] = useState([]);


//   // useEffect(() => {
//   //   // Simulate fetching data or set it dynamically
//   //   if (!questions.length) {
//   //     setQuestions(modals.map((modal) => modal.title)); // Example of dynamic data
//   //   }
//   // }, [modals]);
//   useEffect(() => {
//     const savedQuestions = JSON.parse(localStorage.getItem("formInputs")) || [];
//     setQuestions(savedQuestions.map((input) => input.title));
//   }, []);
  

//   const handleSend = (response) => {
//     if (!response || response.trim() === "") return;

//     // Add the response to the list
//     setResponses([...responses, { question: questions[currentIndex], response }]);

//     // Move to the next question
//     if (currentIndex < questions.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   if (!questions || questions.length === 0) {
//     return <div>Loading questions...</div>;
//   }
  

//   return (
//     <div className={styles.chatContainer}>
//       <div className={styles.messages}>
//         {/* Display all responses */}
//         {responses.map((entry, index) => (
//           <div key={index}>
//             <div className={styles.questionBubble}>{entry.question}</div>
//             <div className={styles.responseBubble}>{entry.response}</div>
//           </div>
//         ))}

//         {/* Display the current question */}
//         {currentIndex < questions.length && (
//           <div className={styles.questionBubble}>{questions[currentIndex]}</div>
//         )}
//       </div>

//       {/* Input box for the user's response */}
//       {currentIndex < questions.length && (
//         <div className={styles.inputContainer}>
//           <input
//             type="text"
//             placeholder="Type your response..."
//             className={styles.inputField}
//             onKeyDown={(e) => {
//               if (e.key === "Enter") {
//                 handleSend(e.target.value);
//                 e.target.value = "";
//               }
//             }}
//           />
//           <button
//             onClick={() => {
//               const input = document.querySelector(`.${styles.inputField}`);
//               handleSend(input.value);
//               input.value = "";
//             }}
//             className={styles.sendButton}
//           >
//             Send
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }





import React, { useEffect, useState } from "react";
import styles from "./SharedForm.module.css";

export default function SharedForm({ questions: propQuestions = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState([]);
  const [questions, setQuestions] = useState([]);

  // Load questions from props or local storage
  useEffect(() => {
    if (propQuestions.length > 0) {
      setQuestions(propQuestions);
    } else {
      const savedQuestions = JSON.parse(localStorage.getItem("formInputs")) || [];
      setQuestions(savedQuestions.map((input) => input.title));
    }
  }, [propQuestions]);

  const handleSend = (response) => {
    if (!response || response.trim() === "") return;

    // Add the response to the list
    setResponses((prevResponses) => [
      ...prevResponses,
      { question: questions[currentIndex], response },
    ]);

    // Move to the next question
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

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
            onClick={(e) => {
              const input = e.target.previousSibling;
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



