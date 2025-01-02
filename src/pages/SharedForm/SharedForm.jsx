// import React, { useState } from "react";
// import styles from './SharedForm.module.css'

// export default function SharedForm() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const formInputs = JSON.parse(localStorage.getItem("formInputs")) || [];

//   const handleNextQuestion = () => {
//     setCurrentIndex((prevIndex) => prevIndex + 1);
//   };

//   if (formInputs.length === 0) {
//     return <p>No questions available.</p>;
//   }

//   return (
//     // <div>
//     //   <h1>{formInputs[currentIndex]?.title}</h1>
//     //   <div>
//     //     <form>
//     //       <label>
//     //         {formInputs[currentIndex]?.title}:
//     //         <input type="text" placeholder="Your answer" />
//     //       </label>
//     //       <button
//     //         type="button"
//     //         onClick={handleNextQuestion}
//     //         disabled={currentIndex === formInputs.length - 1}
//     //       >
//     //         Next
//     //       </button>
//     //     </form>
//     //   </div>
//     // </div>
//     <div className={styles.shareForm}>
//     <div className={styles.chatContainer}>
//    <div className={styles.message}>
//     <img alt="User avatar" height="40" src="https://storage.googleapis.com/a1aa/image/ecVomdFu19VFVKsxrd2UVUa4nJierUHe6EK0eidXsfnHINJgC.jpg" width="40"/>
//     <div className={styles.text}>
//      hello
//     </div>
//    </div>
//    <div className={styles.message}>
//     <img alt="User avatar" height="40" src="https://storage.googleapis.com/a1aa/image/ecVomdFu19VFVKsxrd2UVUa4nJierUHe6EK0eidXsfnHINJgC.jpg" width="40"/>
//     <div className={styles.text}>
//      It feels like you are new
//     </div>
//    </div>
//    <div className={styles.message}>
//     <img alt="A woman asking 'ARE YOU NEW HERE?'"  height="200" src="https://storage.googleapis.com/a1aa/image/EzA7BZ0GJeSrbaenEkTh8HhvrSwgSG535HfBC44QkFyFSTCoA.jpg" width="400"/>
//    </div>
//    <div className={styles.message}>
//     <img alt="User avatar" height="40" src="https://storage.googleapis.com/a1aa/image/ecVomdFu19VFVKsxrd2UVUa4nJierUHe6EK0eidXsfnHINJgC.jpg" width="40"/>
//     <div className={styles.text}>
//      Can you share some details
//     </div>
//    </div>
//    <div className={styles.message}>
//     <img alt="User avatar" height="40" src="https://storage.googleapis.com/a1aa/image/ecVomdFu19VFVKsxrd2UVUa4nJierUHe6EK0eidXsfnHINJgC.jpg" width="40"/>
//     <div className={styles.text}>
//      Great just one more thing
//     </div>
//    </div>
//    <div className={styles.messageSent}>
//     <div className={styles.text}>
//      Hi
//     </div>
//    </div>
//    <div className={styles.chatInputContainer}>
//     <input placeholder="Type a message..." type="text"/>
//     <button>
//      {/* <i class="fas fa-paper-plane">
//      </i> */}
//      send
//     </button>
//    </div>
//   </div>
// </div>
//   );
// }



// import React, { useState, useEffect } from "react";
// import styles from "./SharedForm.module.css";

// export default function SharedForm() {
//   const [formInputs, setFormInputs] = useState([]);
//   const [currentInputIndex, setCurrentInputIndex] = useState(0);

// useEffect(() => {
//     const savedModals = JSON.parse(localStorage.getItem("savedModals")) || [];
//     setFormInputs(savedModals);
//   }, [])

//   const handleSend = (inputValue) => {
//     // Update the current input value with the user response
//     const updatedInputs = [...formInputs];
//     updatedInputs[currentInputIndex].value = inputValue;
//     setFormInputs(updatedInputs);

//     // Move to the next input if exists
//     if (currentInputIndex < formInputs.length - 1) {
//       setCurrentInputIndex(currentInputIndex + 1);
//     }
//   };

//   return (
//     <div className={styles.shareForm}>
//       <div className={styles.chatContainer}>
//         {formInputs.map((input, index) => (
//         //   <div key={input.id || index} className={styles.message}>
//         <div key={input.id || index} className={`${styles.message} ${index === currentInputIndex ? styles.userResponse : ''}`}>
//             <img
//               alt="User avatar"
//               height="40"
//               src="https://storage.googleapis.com/a1aa/image/ecVomdFu19VFVKsxrd2UVUa4nJierUHe6EK0eidXsfnHINJgC.jpg"
//               width="40"
//             />
//             {/* <div className={styles.text}>
//               {`   ${input.value || "N/A"}`}
//             </div> */}
//             <div className={styles.text}>
//               {index === currentInputIndex ? input.value || "N/A" : ""}
//             </div>
//           </div>
//         ))}
//         <div className={styles.chatInputContainer}>
//           {/* <input placeholder="Type a message..." type="text" />
//           <button>Send</button> */}
//           {currentInputIndex < formInputs.length && (
//             <input
//               placeholder="Type a message..."
//               type="text"
//               onKeyDown={(e) => {
//                 if (e.key === "Enter") {
//                   handleSend(e.target.value);
//                   e.target.value = ""; 
//                 }
//               }}
//             />
//           )}
//           {currentInputIndex < formInputs.length && <button onClick={() => handleSend()}>Send</button>}
//         </div>
//       </div>
//     </div>
//   );
// }





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
//     // Prevent empty or undefined input submissions
//     if (!inputValue || inputValue.trim() === "") return;

//     // Update the current input value with the user response
//     const updatedInputs = [...formInputs];
//     updatedInputs[currentInputIndex].value = inputValue;
//     setFormInputs(updatedInputs);

//     // Move to the next input if exists
//     if (currentInputIndex < formInputs.length - 1) {
//       setCurrentInputIndex(currentInputIndex + 1);
//     }
//   };

//   return (
//     <div className={styles.shareForm}>
//       <div className={styles.chatContainer}>
//         {formInputs.map((input, index) => (
//           <div 
//             key={input.id || index} 
//             className={`${styles.message} ${index <= currentInputIndex ? styles.userResponse : ''}`}
//           >
//             {index % 2 === 0 ? (
//               <img
//                 alt="User avatar"
//                 height="40"
//                 src="https://storage.googleapis.com/a1aa/image/ecVomdFu19VFVKsxrd2UVUa4nJierUHe6EK0eidXsfnHINJgC.jpg"
//                 width="40"
//               />
//             ) : null}
//             <div className={styles.text}>
//               {input.value || "N/A"}
//             </div>
//           </div>
//         ))}
//         <div className={styles.chatInputContainer}>
//           {currentInputIndex < formInputs.length && (
//             <>
//               <div className={styles.question}>
//                 {formInputs[currentInputIndex].question}
//               </div>
//               <input
//                 placeholder="Type a message..."
//                 type="text"
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     handleSend(e.target.value);
//                     e.target.value = "";
//                   }
//                 }}
//               />
//               <button onClick={() => handleSend(document.querySelector('input').value)}>Send</button>
//             </>
//           )}
//         </div>
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
          <div 
            key={input.id || index} 
            className={styles.message}
          >
            <div className={styles.question}>
              {input.question}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.responses}>
        {formInputs.map((input, index) => (
          input.value && (
            <div key={input.id || index} className={styles.response}>
              <div className={styles.text}>
                {input.value}
              </div>
            </div>
          )
        ))}
      </div>

      <div className={styles.inputContainer}>
        {currentInputIndex < formInputs.length && (
          <>
            <input
              placeholder="Type a message..."
              type="text"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSend(e.target.value);
                  e.target.value = "";
                }
              }}
            />
            <button onClick={() => handleSend(document.querySelector('input').value)} className={styles.shareSend}>Send</button>
          </>
        )}
      </div>
    </div>
  );
}
