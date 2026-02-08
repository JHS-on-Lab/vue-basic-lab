import apiClient from '@/lib/axios'

export const signin = async (payload) => {
  const response = await apiClient.post('http://localhost:8080/api/auth/sign-in', payload)
  return response.data.data
}
