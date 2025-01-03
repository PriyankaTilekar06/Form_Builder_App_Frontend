import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const UserContext = createContext({})

export function UserContextProvider({children}) {
    const [user, setUser] = useState(null)
    // useEffect(() => {
    //     if(!user){
    //         axios.get('/profile', {withCredentials: true}).then(({data}) => {
    //             setUser(data)
    //         })
    //     }
    // }, [])
    useEffect(() => {
        if (!user) {
            // axios.get('/auth/profile', {withCredentials: true} )
            axios.get('https://form-builder-app-backend.vercel.app/profile', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                withCredentials: true,
            })
                .then(({ data }) => {
                    console.log('Fetched User:', data);
                    setUser(data);
                })
                .catch((error) => {
                    console.error('Profile fetch error:', error.message);
                    setUser(null);
                });
            
        }
    }, []);
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}