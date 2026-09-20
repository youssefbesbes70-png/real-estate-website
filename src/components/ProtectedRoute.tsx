import API_URL from "../config"
import {
  useEffect,
  useState,
} from "react"

import {
  Navigate,
} from "react-router-dom"

type Props = {
  children: React.ReactNode
}

function ProtectedRoute({
  children,
}: Props) {
  const [checking, setChecking] =
    useState(true)

  const [authenticated, setAuthenticated] =
    useState(false)

  useEffect(() => {
    const verifyToken = async () => {
      const token =
        localStorage.getItem(
          "adminToken"
        )

      // No token at all
      if (!token) {
        setAuthenticated(false)
        setChecking(false)
        return
      }

      try {
        const response = await fetch(
          `${API_URL}/api/auth/verify`,
          {
            headers: {
              Authorization:
                `Bearer ${token}`,
            },
          }
        )

        if (!response.ok) {
          localStorage.removeItem(
            "adminToken"
          )

          setAuthenticated(false)
          setChecking(false)

          return
        }

        setAuthenticated(true)
        setChecking(false)

      } catch (error) {
        console.error(
          "Authentication check failed:",
          error
        )

        setAuthenticated(false)
        setChecking(false)
      }
    }

    verifyToken()
  }, [])

  if (checking) {
    return (
      <div
        style={{
          padding: "40px",
        }}
      >
        Checking authentication...
      </div>
    )
  }

  if (!authenticated) {
    return (
      <Navigate
        to="/admin/login"
        replace
      />
    )
  }

  return children
}

export default ProtectedRoute