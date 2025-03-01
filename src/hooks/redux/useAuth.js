import { login } from "@/store/auth/slice"
import { useAppDispatch } from "./useStore"

export const useAuth = () => {
    const dispath = useAppDispatch()

    const handleLogin = () => {
        dispath(login())
    }

    return {handleLogin}
} 