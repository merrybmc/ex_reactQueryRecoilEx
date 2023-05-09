import axios from 'axios';
const BASE_URL = 'http://localhost:3001/todos';

// 기본 url 설정 or 토큰과 함께 서버로 보내기
const api = axios.create({
  baseURL: 'http://54.180.97.182',
  // headers: { Authorization: token },
});

api.interceptors.request.use((config) => {
  const token = sessionStorage.getItem('authorization');
  if (token) {
    config.headers['Authorization'] = token;
  }
  return config;
});

// READ 스프링과 서버통신할 때 이 코드 사용 아래의 get 안에 URL 적으면 됨
export async function ReadMsg() {
  const response = await api.get('/messages');
  return response.data;
}

export async function ReadData() {
  const { data } = await axios.get(`http://localhost:3001/todos`);
  return data;
}

// CREATE
export async function CreateData(myData) {
  const { data } = await axios.post(`${BASE_URL}`, myData);
  return data;
}

// DELETE
export async function DeleteData(myId) {
  const { data } = await axios.delete(`http://localhost:3001/todos/${myId}`);
  return data;
}

// UPDATE
export async function UpdateData({ todoId, editData }) {
  const { data } = await axios.put(`http://localhost:3001/todos/${todoId}`, editData);
  return data;
}
