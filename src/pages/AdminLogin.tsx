import API_URL from "../config"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AdminLogin() {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (
    event: React.FormEvent
  ) => {
    event.preventDefault()

    setError("")
    setLoading(true)

    try {
      const response = await fetch(
        `${API_URL}/api/auth/login`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            username,
            password,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        setError(
          data.message || "Login failed"
        )

        return
      }

      // Save JWT
      localStorage.setItem(
        "adminToken",
        data.token
      )

      // Go to dashboard
      navigate("/admin")
    } catch (error) {
      console.error(error)

      setError(
        "Could not connect to server"
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "350px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          padding: "30px",
          border: "1px solid #ddd",
        }}
      >
        <h1>Admin Login</h1>

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) =>
            setUsername(
              event.target.value
            )
          }
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) =>
            setPassword(
              event.target.value
            )
          }
          required
        />

        {error && (
          <p
            style={{
              color: "red",
            }}
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Logging in..."
            : "Login"}
        </button>
      </form>
    </div>
  )
}

export default AdminLogin