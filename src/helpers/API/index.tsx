import axios from 'axios'
import { useTodoContext } from '../context/todoData'

const url = `https://todoo.5xcamp.us`
const setToken = (authorization: string) => {
  localStorage.setItem('authorization', authorization)
}
const getToken = localStorage.getItem('authorization')
const headerObj = {
  headers: {
    authorization: getToken
  }
}

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

// Todo => GET
export const GetTodoData = async () => {
  try {
    const res = await axios.get(`${url}/todos`, headerObj)
    const { todos } = await res.data
    return todos
  } catch (error: any) {
    const { data } = error.response
    console.log('error', data)
    alert('取得失敗')
  }
}

// Todo => POST
export const AddTodoItem = async () => {
  try {
    const res = await axios.post(
      `${url}/todos`,
      {
        content: '456789'
      },
      headerObj
    )
    // alert('新增成功')
  } catch (error: any) {
    const { data } = error.response
    console.log('error', data)
    alert('新增失敗')
  }
}

// Todo => DELETE ALL
export const DeleteAll = async (data: []) => {
  if (typeof data === 'object') {
    try {
      const idAry = data.map((item: { id: string }) => item.id)

      const res = await Promise.all(
        idAry.map((idAry) => {
          return axios.delete(`${url}/todos/${idAry}`, headerObj)
        })
      )

      // const res = await axios.delete(
      //   `${url}/todos/790eeec3a50b9cd1512c7acf3dcde5af`,
      //   headerObj
      // )

      // console.log('res', res)
      // await GetTodoData()
      // alert('刪除成功')
    } catch (error) {
      console.log(error)
    }
  }
}
