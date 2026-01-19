import apiClient from '@/lib/axios'

export const signin = (payload) => {
  return apiClient.post('http://localhost:8080/api/auth/sign-in', payload)
}
