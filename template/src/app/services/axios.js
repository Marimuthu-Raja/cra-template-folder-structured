import axios from "axios"
import secureLocalStorage from "../utils/secureLocalStorage"
export default function axiosInstance(options = {}) {
  const { params = {} } = options
  const TIME_OUT = 30000
  const baseURL = `${process.env.REACT_APP_API_ENDPOINT}`
  const instance = axios.create({
    baseURL,
    timeout: TIME_OUT,
    headers: {
      Authorization: `Bearer ${secureLocalStorage.getItem("access_token")}`,
    },
    params: {
      ...params,
    },
  })

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      if (error.response.status === 401) {
        let apiResponse = await axios.post(
          `${baseURL}auth/refresh`,
          {},
          {
            headers: {
              accept: "application/json",
              "x-api-key": process.env.REACT_APP_XAPI_KEY,
              Authorization: `Bearer ${secureLocalStorage.getItem(
                "refresh_token"
              )}`,
            },
          }
        )
        secureLocalStorage.setItem(
          "access_token",
          apiResponse.data.access_token
        )
        secureLocalStorage.setItem(
          "refresh_token",
          apiResponse.data.refresh_token
        )
        error.config.headers[
          "Authorization"
        ] = `bearer ${apiResponse.data.access_token}`
        return axios(error.config)
      } else {
        return Promise.reject(error)
      }
    }
  )

  return instance
}
