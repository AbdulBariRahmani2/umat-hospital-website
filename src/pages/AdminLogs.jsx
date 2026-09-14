import { useEffect, useState } from "react";
import { Activity, Loader2, RefreshCw } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const API_URL = "http://127.0.0.1:8000/api/auth";

const ACTION_LABELS = {
  login: "Login",
  logout: "Logout",
  create_user: "Create User",
  update_user: "Update User",
  delete_user: "Delete User",
  activate_user: "Activate User",
  deactivate_user: "Deactivate User",
};

export default function AdminLogs() {
  const { user } = useAuth();

  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [actionFilter, setActionFilter] = useState("all");

  const loadLogs = async (isRefresh = false) => {
    try {
      setError("");

      if (isRefresh) {
        setRefreshing(true);
      } else {
        setLoading(true);
      }

      const token = localStorage.getItem("auth_access_token");

      const response = await fetch(`${API_URL}/admin/logs/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.detail || "Failed to load activity logs."
        );
      }

      setLogs(data);
    } catch (err) {
      console.error("Failed to load activity logs:", err);
      setError(
        err.message || "Failed to load activity logs."
      );
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    loadLogs();
  }, []);

  const filteredLogs =
    actionFilter === "all"
      ? logs
      : logs.filter((log) => log.action === actionFilter);

  if (!user?.is_staff) {
    return (
      <main className="min-h-screen bg-background px-6 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-sm">
          <h1 className="text-3xl font-bold text-foreground">
            Access Denied
          </h1>

          <p className="mt-3 text-muted-foreground">
            You do not have permission to view activity logs.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background px-6 py-20">
      <div className="mx-auto max-w-7xl space-y-8">

        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <Activity className="h-7 w-7 text-primary" />

              <p className="text-sm font-medium text-primary">
                Ummat International Hospital
              </p>
            </div>

            <h1 className="mt-3 text-4xl font-bold text-foreground">
              Activity Logs
            </h1>

            <p className="mt-3 text-muted-foreground">
              View administrative activity and account actions.
            </p>
          </div>

          <button
            type="button"
            onClick={() => loadLogs(true)}
            disabled={refreshing}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <RefreshCw
              className={`h-4 w-4 ${
                refreshing ? "animate-spin" : ""
              }`}
            />

            {refreshing ? "Refreshing..." : "Refresh Logs"}
          </button>
        </div>

        <section className="rounded-3xl border border-border bg-card p-8 shadow-sm">

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                Administrative Activity
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                {filteredLogs.length} log
                {filteredLogs.length === 1 ? "" : "s"} found
              </p>
            </div>

            <select
              value={actionFilter}
              onChange={(event) =>
                setActionFilter(event.target.value)
              }
              className="h-11 rounded-xl border border-border bg-background px-4 text-sm text-foreground outline-none focus:border-primary"
            >
              <option value="all">All Actions</option>
              <option value="login">Login</option>
              <option value="logout">Logout</option>
              <option value="create_user">Create User</option>
              <option value="update_user">Update User</option>
              <option value="delete_user">Delete User</option>
              <option value="activate_user">
                Activate User
              </option>
              <option value="deactivate_user">
                Deactivate User
              </option>
            </select>
          </div>

          {loading && (
            <div className="mt-8 flex items-center gap-2 text-muted-foreground">
              <Loader2 className="h-4 w-4 animate-spin" />
              Loading activity logs...
            </div>
          )}

          {error && !loading && (
            <p className="mt-8 text-sm font-medium text-destructive">
              {error}
            </p>
          )}

          {!loading && !error && filteredLogs.length === 0 && (
            <div className="mt-8 rounded-2xl border border-dashed border-border p-8 text-center">
              <Activity className="mx-auto h-8 w-8 text-muted-foreground" />

              <p className="mt-3 font-medium text-foreground">
                No activity logs found
              </p>

              <p className="mt-1 text-sm text-muted-foreground">
                Try selecting a different action filter.
              </p>
            </div>
          )}

          {!loading && !error && filteredLogs.length > 0 && (
            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[950px] text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th className="px-4 py-3 text-sm font-semibold text-foreground">
                      Date & Time
                    </th>

                    <th className="px-4 py-3 text-sm font-semibold text-foreground">
                      Admin
                    </th>

                    <th className="px-4 py-3 text-sm font-semibold text-foreground">
                      Action
                    </th>

                    <th className="px-4 py-3 text-sm font-semibold text-foreground">
                      Target User
                    </th>

                    <th className="px-4 py-3 text-sm font-semibold text-foreground">
                      Description
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredLogs.map((log) => (
                    <tr
                      key={log.id}
                      className="border-b border-border last:border-0"
                    >
                      <td className="px-4 py-4 text-sm text-muted-foreground">
                        {new Date(
                          log.created_at
                        ).toLocaleString()}
                      </td>

                      <td className="px-4 py-4 font-medium text-foreground">
                        {log.admin || "System"}
                      </td>

                      <td className="px-4 py-4">
                        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                          {ACTION_LABELS[log.action] ||
                            log.action}
                        </span>
                      </td>

                      <td className="px-4 py-4 text-sm text-muted-foreground">
                        {log.target_user || "—"}
                      </td>

                      <td className="px-4 py-4 text-sm text-muted-foreground">
                        {log.description}
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