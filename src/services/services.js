const API_URL = "http://127.0.0.1:8000/api/services";

export async function getServices() {
  const response = await fetch(`${API_URL}/`);

  if (!response.ok) {
    throw new Error("Failed to load services.");
  }

  return response.json();
}