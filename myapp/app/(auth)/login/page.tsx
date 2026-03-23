"use client"
import {useState}  from "react"
import Link from "next/link"
import {useAuth} from "@/features/auth/hooks/useAuth"

export default function LoginPage(){
    const {login, loading, error}= useAuth()
    const [email, setEmail]=useState("")
    const [password, setPassword]= useState("")
    const [showPass,setShowPass]= useState(false)
    const [remember,   setRemember]   = useState(false)
    async function handleSubmit(e:React.SyntheticEvent){
        e.preventDefault()
        // Lưu hoặc xóa email tùy remember
        if (remember) {
          localStorage.setItem("certai_saved_email", email)
          localStorage.setItem("certai_remember",    "true")
        } else {
          localStorage.removeItem("certai_saved_email")
          localStorage.removeItem("certai_remember")
        }
        await login({email,password})
    }
    return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Welcome back</h1>
          <p className="text-gray-500 mt-2">Sign in to continue learning</p>
        </div>

        <div className="bg-white rounded-2xl shadow p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="border border-gray-300 text-gray-900 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-600">Password</label>
                <a href="#" className="text-xs text-blue-500 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full border text-gray-900 border-gray-300 rounded-lg px-4 py-2.5 pr-10 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
                {/* Remember me */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={remember}
                      onChange={e => setRemember(e.target.checked)}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="text-sm text-gray-600">Remember me</span>
                  </label>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPass(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xs"
                >
                  {showPass ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white rounded-lg py-2.5 text-sm font-medium hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? "Signing in…" : "Sign in"}
            </button>

          </form>
        </div>

        <p className="text-center mt-6 text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="text-blue-500 hover:underline">
            Create one
          </Link>
        </p>

        <p className="text-center mt-2 text-xs text-gray-400">
          Demo: demo@certai.dev / password123
        </p>

      </div>
    </div>
  )
}