import { signup as signupApi, getUsers as getUsersApi } from '@/api/userApi'

/**
 * 회원가입
 * 
 * @param {{
 *  username: string,
 *  password: string,
 *  email: string,
 *  role: 'ROLE_USER' | 'ROLE_ADMIN'
 * }}
 */
export const signup = async (payload) => {
    // 유효성 검사
    if (!payload.username || !payload.password || !payload.email) {
        throw new Error('Required fields are missing')
    }

    // HTTP 요청
    await signupApi(payload)
}

/**
 * 회원 목록 조회
 * 
 * @param {{
 *  username: string,
 *  role: 'ROLE_USER' | 'ROLE_ADMIN'
 *  email: string,
 *  page: number,
 *  size: number
 * }}
 */
export const getUsers = async (payload) => {
    return await getUsersApi(payload)
}
