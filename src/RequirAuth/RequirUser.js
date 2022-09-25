import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const RequirUser = ({children}) => {
     let location = useLocation();
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
     if (!user) {
         // Redirect them to the /login page, but save the current location they were
         // trying to go to when they were redirected. This allows us to send them
         // along to that page after they login, which is a nicer user experience
         // than dropping them off on the home page.
         Toast.fire({
            icon: 'error',
            title: 'Please Signin!'
          })
         return <Navigate to="/signin" state={{ from: location }} replace />;
     }
     if (user.status === "BanUser") {
         // Redirect them to the /login page, but save the current location they were
         // trying to go to when they were redirected. This allows us to send them
         // along to that page after they login, which is a nicer user experience
         // than dropping them off on the home page.
         Toast.fire({
            icon: 'error',
            title: 'You are Banned!'
          })
         return <Navigate to="/" />;
     }
 
     return children;
};

export default RequirUser;