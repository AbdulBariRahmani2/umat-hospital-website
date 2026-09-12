import { LogOut, UserRound, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "@/context/AuthContext";

export default function PatientPortal() {
  
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <main className="min-h-screen bg-background px-6 py-20">
      <div className="mx-auto max-w-4xl space-y-6">

        {/* Header */}
        <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card p-8 shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-primary">
              Ummat International Hospital
            </p>

            <h1 className="mt-2 text-4xl font-bold text-foreground">
              Patient Portal
            </h1>

            <p className="mt-4 text-muted-foreground">
              Welcome, {user?.username}.
            </p>
          </div>

          <button
            type="button"
            onClick={handleLogout}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>

        {/* Account Information */}
        <section className="rounded-3xl border border-border bg-card p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-foreground">
            Account Information
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">

            {/* Username */}
            <div className="rounded-2xl border border-border bg-background p-5">
              <div className="flex items-center gap-3">
                <UserRound className="h-5 w-5 text-primary" />

                <div>
                  <p className="text-sm text-muted-foreground">
                    Username
                  </p>

                  <p className="mt-1 font-semibold text-foreground">
                    {user?.username}
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="rounded-2xl border border-border bg-background p-5">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />

                <div>
                  <p className="text-sm text-muted-foreground">
                    Email
                  </p>

                  <p className="mt-1 font-semibold text-foreground">
                    {user?.email || "Not provided"}
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}