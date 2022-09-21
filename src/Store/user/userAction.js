import client from "../../Helper/axios"
import { userActions } from "./userSlice"

const getUsers = () => {
     return async dispatch => {
          try {

               const { data } = await client.get("/api/user/allUsers")
               if (data) {
                    console.log(data);
                    dispatch(userActions.getUsers(data.users))
               }
          } catch (error) {
               console.log(error)
          }
     }
}


// export const postUser = (userData) => {
//      return async dispatch => {
//           try {
//                const { data } = await client.post("/api/user/createUser", userData)
//                if (data) {
//                     dispatch(userActions.postUser)
//                     dispatch(getUsers())
//                }
//           } catch (error) {
//                console.log(error);
//           }
//      }
// }

// export const updateUser = ({ id, ...rest }) => {
//      console.log(id, rest)
//      return async dispatch => {
//           try {

//                const { data } = await client.patch(`/api/user/updateUser/${id}`, rest)
//                if (data) {
//                     dispatch(userActions.updateUser)
//                     dispatch(getUsers())
//                }
//           } catch (error) {
//                console.log(error)
//           }
//      }
// }

// export const deleteUser = (id) => {
//      return async dispatch => {
//           try {
//                const { data } = await client.delete(`/api/user/deleteUser/${id}`)
//                if (data) {
//                     dispatch(userActions.deleteUser)
//                     dispatch(getUsers())
//                }
//           } catch (error) {
//                console.log(error)
//           }
//      }
// }

export default getUsers;