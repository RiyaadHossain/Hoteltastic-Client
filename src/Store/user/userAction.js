import client from "../../Helper/axios"
import { userActions } from "./userSlice"

const getUsers = () => {
     return async dispatch => {
          try {

               const { data } = await client.get("/api/user/allUsers")
               if (data) {
                    dispatch(userActions.getUsers(data.users))
               }
          } catch (error) {
               console.log(error)
          }
     }
}




export const updateUser = ({ id, ...rest }) => {
     return async dispatch => {
          try {
               const { data } = await client.patch(`/api/user/updateUser/${id}`, rest)
               if (data) {
                    dispatch(userActions.updateUser)
                    dispatch(getUsers())
               }
          } catch (error) {
               console.log(error)
          }
     }
}


export default getUsers;