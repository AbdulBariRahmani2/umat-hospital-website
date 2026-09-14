import { useEffect, useState } from "react";
import { Users, UserPlus, Loader2 } from "lucide-react";
import {
  getAdminUsers,
  createAdminUser,
} from "@/services/adminUsers";
import { useAuth } from "@/context/AuthContext";

export default function AdminUsers() {
  const { user } = useAuth();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creating, setCreating] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "user",
  });

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const data = await getAdminUsers();
        setUsers(data);
      } catch (err) {
        console.error("Failed to load users:", err);
        setError(err.message || "Failed to load users.");
      } finally {
        setLoading(false);
      }
    };

    loadUsers();
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");
    setSuccess("");
    setCreating(true);

    try {
      const data = await createAdminUser(
        form.username,
        form.email,
        form.password,
        form.role
      );

      setUsers((current) => [...current, data.user]);

      setForm({
        username: "",
        email: "",
        password: "",
        role: "user",
      });

      setSuccess("User created successfully.");
    } catch (err) {
      console.error("Failed to create user:", err);
      setError(err.message || "Failed to create user.");
    } finally {
      setCreating(false);
    }
  };

  if (!user?.is_staff) {
    return (
      <main className="min-h-screen bg-background px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-foreground">
            Access Denied
          </h1>

          <p className="mt-3 text-muted-foreground">
            You do not have permission to access user management.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-6 py-20">
      <div className="mx-auto max-w-6xl space-y-8">

        <div>
          <div className="flex items-center gap-3">
            <Users className="h-7 w-7 text-primary" />

            <p className="text-sm font-medium text-primary">
              Ummat International Hospital
            </p>
          </div>

          <h1 className="mt-3 text-4xl font-bold text-foreground">
            User Management
          </h1>

          <p className="mt-3 text-muted-foreground">
            Manage patient and user accounts from the administration panel.
          </p>
        </div>

        <section className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <UserPlus className="h-6 w-6 text-primary" />

            <h2 className="text-2xl font-bold text-foreground">
              Add New User
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-6 grid gap-5 sm:grid-cols-3"
          >
            <input
              type="text"
              name="username"
              value={form.username}
              onChange={handleChange}
              placeholder="Username"
              required
              minLength={1}
              className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
            />

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Password"
              required
              minLength={8}
              className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
            />

            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              required
              className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
            >
              <option value="user">User</option>
              <option value="staff">Staff</option>
              <option value="superuser">Superuser</option>
            </select>

            <button
              type="submit"
              disabled={creating}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:col-span-3"
            >
              {creating && (
                <Loader2 className="h-4 w-4 animate-spin" />
              )}

              {creating ? "Creating User..." : "Create User"}
            </button>
          </form>

          {success && (
            <p className="mt-4 text-sm font-medium text-green-600">
              {success}
            </p>
          )}

          {error && (
            <p className="mt-4 text-sm font-medium text-destructive">
              {error}
            </p>
          )}
        </section>

        <section className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground">
            Users
          </h2>

          {loading && (
            <div className="mt-6 flex items-center gap-2 text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading users...
            </div>
          )}

          {!loading && users.length === 0 && (
            <p className="mt-6 text-muted-foreground">
              No users found.
            </p>
          )}

          {!loading && users.length > 0 && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[700px] text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-4 py-3 text-sm font-semibold text-foreground">
                      Username
                    </th>

                    <th className="px-4 py-3 text-sm font-semibold text-foreground">
                      Email
                    </th>

                    <th className="px-4 py-3 text-sm font-semibold text-foreground">
                      Status
                    </th>

                    <th className="px-4 py-3 text-sm font-semibold text-foreground">
                      Role
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {users.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b border-border last:border-0"
                    >
                      <td className="px-4 py-4 font-medium text-foreground">
                        {item.username}
                      </td>

                      <td className="px-4 py-4 text-sm text-muted-foreground">
                        {item.email || "Not provided"}
                      </td>

                      <td className="px-4 py-4">
                        <span
                          className={
                            item.is_active
                              ? "rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700"
                              : "rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700"
                          }
                        >
                          {item.is_active ? "Active" : "Inactive"}
                        </span>
                      </td>

                      <td className="px-4 py-4 text-sm text-muted-foreground">
                        {item.is_superuser
                          ? "Superuser"
                          : item.is_staff
                            ? "Staff"
                            : "User"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}