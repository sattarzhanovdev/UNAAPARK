// import React from 'react'
// import { onAuthStateChanged } from 'firebase/auth'
// import { useNavigate } from 'react-router-dom'
// import { auth } from '../../firebase/firebase'

// const AuthChecking = () => {  
  
//   const navigate = useNavigate()

//   React.useEffect(() => {
//     onAuthStateChanged(auth, user => {
//       if(user){
//         navigate('/send_ads')
//       }else{
//         navigate('/login')
//       }
//     })
//   }, [])
  
// }

// export default AuthChecking