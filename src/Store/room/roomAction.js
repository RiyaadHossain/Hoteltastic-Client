import client from "../../Helper/axios"
import { roomActions } from "./roomSlice"

const getRooms = () => {
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


export const postRoom = (roomData) => {
    return async dispatch => {
        try {
            const { data } = await client.post("/api/room/createRoom", roomData)
            if (data) {
                dispatch(roomActions.postRoom)
                dispatch(getRooms())
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const updateRoom = ({ id, roomData }) => {
    return async dispatch => {
        try {

            const { data } = await client.patch(`/api/room/updateRoom/${id}`, roomData)
            if (data) {
                dispatch(roomActions.updateRoom)
                dispatch(getRooms())
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteRoom = (id) => {
    return async dispatch => {
        try {
            const { data } = await client.delete(`/api/room/deleteRoom/${id}`)
            if (data) {
                dispatch(roomActions.deleteRoom)
                dispatch(getRooms())
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export default getRooms