import { signup as signupApi } from '@/api/userApi'

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
