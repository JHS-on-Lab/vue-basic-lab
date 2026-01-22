import apiClient from '@/lib/axios'

export const signup = (payload) => {
  return apiClient.post('users', payload)
}

export const getUsers = (payload) => {
   return apiClient.get('users', { params: payload })
}
