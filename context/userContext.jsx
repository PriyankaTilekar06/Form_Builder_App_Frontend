// import axios from 'axios'
// import { createContext, useEffect, useState } from 'react'

// export const UserContext = createContext({})

// export function UserContextProvider({children}) {
//     const [user, setUser] = useState(null)
//     const token = localStorage.getItem('token') || null
//     // useEffect(() => {
//     //     if(!user){
//     //         axios.get('/profile', {withCredentials: true}).then(({data}) => {
//     //             setUser(data)
//     //         })
//     //     }
//     // }, [])
//     useEffect(() => {
//         if (!user) {
//             // Use try-catch for better error handling
//             const fetchUser = async () => {
//                 try {
//                     const { data } = await axios.get('/profile', {
//                         headers: {
//                             Authorization: `Bearer ${token}`,
//                         },
//                         withCredentials: true,
//                     });
//                     setUser(data);
//                 } catch (error) {
//                     console.error('Profile fetch error:', error.message);
//                     setUser(null); // Set user to null if error occurs
//                 }
//             };

//             fetchUser();
//         }
//     }, []);
//     return(
//         <UserContext.Provider value={{user, setUser}}>
//             {children}
//         </UserContext.Provider>
//     )
// }