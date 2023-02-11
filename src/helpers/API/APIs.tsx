import axios from 'axios'

const url = 'https://todoo.5xcamp.us'
const setToken = (authorization: string): void => {
  localStorage.setItem('authorization', authorization)
}
const getToken = () => {
  const getToken = localStorage.getItem('authorization')
  const headerObj = {
    headers: {
      authorization: getToken
    }
  }
  return headerObj
}

// Login => POST => getToken => setToken
export const LoginPost = async (
  email: string | null,
  password: string
): Promise<number | undefined> => {
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
    return res.status
  } catch (error: any) {
    const { message } = error.response.data
    alert(message)
  }
}

// SignUp => POST => getToken => setToken
export const SignUpPost = async (
  email: string | null,
  nickname: string | null,
  password: string
): Promise<number | undefined> => {
  try {
    const res = await axios.post(`${url}/users`, {
      user: {
        email,
        nickname,
        password
      }
    })
    console.log('執行註冊函式')
    const { message } = await res.data
    const { authorization } = await res.headers
    setToken(authorization)
    alert(message)
    console.log(res)
    return res.status
  } catch (error: any) {
    const errorStr = error.response.data.error
    alert(errorStr)
  }
}

// Todo => GET
export const GetTodoData = async () => {
  try {
    const res = await axios.get(`${url}/todos`, getToken())
    const { todos } = await res.data
    // alert("取得資料中")
    return todos
  } catch (error: any) {
    const { data } = error.response
    console.log('error', data)
    alert('取得失敗')
  }
}

// Todo => POST
export const AddTodoItem = async (text: string) => {
  try {
    const res = await axios.post(
      `${url}/todos`,
      {
        content: text
      },
      getToken()
    )
    alert('新增成功')
  } catch (error: any) {
    const { data } = error.response
    console.log('error', data)
    alert('新增失敗')
  }
}

// Todo => PATCH
export const ChangeStatus = async (id: string) => {
  try {
    const res = await axios.patch(`${url}/todos/${id}/toggle`, null, getToken())
    alert('狀態更改成功')
  } catch (error) {
    console.log(error)
  }
}

// Todo => DELETE
export const DeleteItem = async (id: string) => {
  try {
    const res = await axios.delete(`${url}/todos/${id}`, getToken())
    alert('已刪除')
  } catch (error) {
    console.log(error)
    console.log('刪除失敗')
  }
}

// Todo => DELETE ALL COMPLETED
export const DeleteAll = async (data: any[]) => {
  const idAry = data.filter(
    (item: { completed_at: null }) => item.completed_at !== null
  )
  return Promise.all(
    idAry.map((idAry: any) => {
      return axios.delete(`${url}/todos/${idAry.id}`, getToken())
    })
  )
}
