import client from "../../Helper/axios"
import { roomActions } from "./roomSlice"

export const getRooms = () => {
    return async dispatch => {
        try {

            const { data } = await client.get("/api/room/allRooms")
            if (data) {
                dispatch(roomActions.getRooms(data.rooms))
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const postRoom = () => {
    return async dispatch => {

    }
}