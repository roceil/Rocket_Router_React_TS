import axios from 'axios'

const url = `https://todoo.5xcamp.us`
const setToken = (authorization: string) => {
  localStorage.setItem('authorization', authorization)
}
const getToken = localStorage.getItem('authorization')

// Login => POST => getToken => setToken
export const LoginPost = async (email: string, password: string) => {
  try {
    const res = await axios.post(`${url}/users/sign_in`, {
      user: {
        email,
        password
      }
    })
    const { message } = await res.data
    const { authorization } = await res.headers
    setToken(authorization)
    alert(message)
  } catch (error) {
    console.log(error)
  }
}

// SignUp => POST => getToken => setToken
export const SignUpPost = async (
  email: string,
  nickname: string,
  password: string
) => {
  try {
    const res = await axios.post(`${url}/users`, {
      user: {
        email,
        nickname,
        password
      }
    })
    const { message } = await res.data
    const { authorization } = await res.headers
    setToken(authorization)
    alert(message)
  } catch (error: any) {
    const { message } = await error.response.data
    alert(message)
  }
}
