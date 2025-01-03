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



import React, { useState, useEffect } from "react";
import styles from "./SharedForm.module.css";

export default function SharedForm() {
  const [formInputs, setFormInputs] = useState([]);
  const [currentInputIndex, setCurrentInputIndex] = useState(0);

  useEffect(() => {
    const savedModals = JSON.parse(localStorage.getItem("savedModals")) || [];
    setFormInputs(savedModals);
  }, []);

  const handleSend = (inputValue) => {
    if (!inputValue || inputValue.trim() === "") return;

    const updatedInputs = [...formInputs];
    updatedInputs[currentInputIndex].value = inputValue;
    setFormInputs(updatedInputs);

    if (currentInputIndex < formInputs.length - 1) {
      setCurrentInputIndex(currentInputIndex + 1);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {formInputs.map((input, index) => (
          <div key={input.id || index} className={styles.message}>
            <div className={styles.question}>{input.question}</div>
            {index === currentInputIndex && (
              <img
                src="your_image_url_here" // Replace with your actual image URL
                alt="GIF"
                className={styles.gif}
              />
            )}
          </div>
        ))}
      </div>

      <div className={styles.responses}>
        {formInputs.map(
          (input, index) =>
            input.value && (
              <div key={input.id || index} className={styles.response}>
                <div className={styles.text}>{input.value}</div>
              </div>
            )
        )}
      </div>

      <div className={styles.inputContainer}>
        {currentInputIndex < formInputs.length && (
          <>
            <input
              className={styles.shareInput}
              placeholder="Type a message..."
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend(e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <button
              onClick={() =>
                handleSend(document.querySelector("input").value)
              }
              className={styles.shareSend}
            >
              Send
            </button>
          </>
        )}
      </div>
    </div>
  );
}
