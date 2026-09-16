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
    throw new Error(
      data.detail ||
      data.error ||
      "Failed to load users."
    );
  }

  return data;
}

export async function createAdminUser(
  username,
  email,
  password,
  role
) {

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
      role,
    }),
  });


  
  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.username?.[0] ||
      data.email?.[0] ||
      data.password?.[0] ||
      data.role?.[0] ||
      data.detail ||
      data.error ||
      "Failed to create user."
    );
  }

  return data;
}

export async function updateAdminUserStatus(
  userId,
  isActive
) {
  const token = localStorage.getItem("auth_access_token");

  const response = await fetch(
    `${API_URL}/admin/users/${userId}/`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        is_active: isActive,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.detail ||
      data.error ||
      "Failed to update user status."
    );
  }

  return data;
}

export async function deleteAdminUser(userId) {
  const token = localStorage.getItem("auth_access_token");

  const response = await fetch(
    `${API_URL}/admin/users/${userId}/`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data.detail ||
      data.error ||
      "Failed to delete user."
    );
  }

  return data;
}