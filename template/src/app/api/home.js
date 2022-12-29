import axiosInstance from "../services/axios"
import useStore from "../store"
export const getApiData = () => {
  axiosInstance()
    .get("/todos")
    .then((response) => {
      const { data } = response
      useStore.setState((state) => ({
        ...state,
        apiData: data,
      }))
    })
    .catch((error) => {
      useStore.setState((state) => ({
        ...state,
        apiData: [],
      }))
    })
}
