import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

const ACCESS_TOKEN_KEY = "auth_access_token";
const REFRESH_TOKEN_KEY = "auth_refresh_token";

const API_URL = "http://127.0.0.1:8000/api/auth";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(
    () => localStorage.getItem(ACCESS_TOKEN_KEY)
  );
  const [refreshToken, setRefreshToken] = useState(
    () => localStorage.getItem(REFRESH_TOKEN_KEY)
  );
  const [loading, setLoading] = useState(true);

  const login = (data) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, data.access);
    localStorage.setItem(REFRESH_TOKEN_KEY, data.refresh);

    setAccessToken(data.access);
    setRefreshToken(data.refresh);
  };

  const logout = async () => {
    try {
      if (refreshToken) {
        await fetch(`${API_URL}/logout/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refresh: refreshToken,
          }),
        });
      }
    } catch (error) {
      console.error("Logout request failed:", error);
    }

    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);

    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
  };

  useEffect(() => {
    const restoreUser = async () => {
      if (!accessToken) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_URL}/me/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Authentication expired.");
        }

        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Could not restore user:", error);

        localStorage.removeItem(ACCESS_TOKEN_KEY);
        localStorage.removeItem(REFRESH_TOKEN_KEY);

        setAccessToken(null);
        setRefreshToken(null);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    restoreUser();
  }, [accessToken]);

  return (
    <AuthContext.Provider
      value={{
        user,
        accessToken,
        refreshToken,
        login,
        logout,
        setUser,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}