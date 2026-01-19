import apiClient from '@/lib/axios'

export const signup = (payload) => {
  return apiClient.post('http://localhost:8080/api/users', payload)
}