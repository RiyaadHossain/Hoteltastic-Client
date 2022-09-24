import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const RequirAdmin = ({children}) => {
     const {user} = useSelector((state) => state.auth).user;
     const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
     // console.log(user);
     if (user?.role !== "Admin") {
         // Redirect them to the /login page, but save the current location they were
         // trying to go to when they were redirected. This allows us to send them
         // along to that page after they login, which is a nicer user experience
         // than dropping them off on the home page.
        Toast.fire({
          icon: 'error',
          title: 'This is Admin Protected Route!'
        })
         return <Navigate to="/" />;
     }
 
     return children;
};

export default RequirAdmin;