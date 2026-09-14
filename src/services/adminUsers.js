const API_URL = "http://127.0.0.1:8000/api/auth";

export async function getAdminUsers() {
  const token = localStorage.getItem("auth_access_token");

  const response = await fetch(`${API_URL}/admin/users/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Failed to load users.");
  }

  return data;
}

export async function createAdminUser(username, email, password) {
  const token = localStorage.getItem("auth_access_token");

  const response = await fetch(`${API_URL}/admin/users/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.username?.[0] ||
      data.email?.[0] ||
      data.password?.[0] ||
      data.detail ||
      "Failed to create user."
    );
  }

  return data;
}