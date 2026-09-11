import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  LogIn,
  LockKeyhole,
  UserRound,
} from "lucide-react";

import { loginUser } from "@/services/auth";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setMessage("");
    setError("");
    setLoading(true);

    try {
      const data = await loginUser(
        formData.username,
        formData.password
      );

      login(data);
      navigate("/patients");
      
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main id="main-content" className="bg-background">
      <section className="relative overflow-hidden">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto flex min-h-[680px] max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-6xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl lg:grid-cols-2">

            {/* LEFT PANEL */}
            <div className="relative flex min-h-[500px] flex-col justify-between overflow-hidden bg-primary p-8 text-primary-foreground sm:p-12 lg:p-14">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/10" />
              <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full border border-white/10" />

              <div className="relative z-10">
                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                  <LogIn className="h-8 w-8" />
                </div>

                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] opacity-70">
                  Ummat International Hospital
                </p>

                <h1 className="max-w-md text-4xl font-bold leading-tight sm:text-5xl">
                  Welcome back.
                </h1>

                <p className="mt-6 max-w-md text-base leading-7 opacity-80">
                  Sign in to your account to access your healthcare
                  services and manage your hospital experience.
                </p>
              </div>

              <div className="relative z-10">
                <div className="mb-5 h-px w-16 bg-white/30" />

                <p className="text-sm opacity-70">
                  Secure access to your account.
                </p>
              </div>
            </div>

            {/* RIGHT PANEL */}
            <div className="flex min-h-[500px] items-center p-8 sm:p-12 lg:p-14">
              <div className="mx-auto w-full max-w-md">

                <div className="mb-9">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                    Account
                  </p>

                  <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Login
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    Enter your credentials to continue to your account.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Username */}
                  <div>
                    <label
                      htmlFor="username"
                      className="mb-2.5 block text-sm font-semibold text-foreground"
                    >
                      Username
                    </label>

                    <div className="relative">
                      <UserRound className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                      <input
                        id="username"
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="Enter your username"
                        autoComplete="username"
                        required
                        className="h-13 w-full rounded-xl border border-border bg-background pl-12 pr-4 text-sm text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2.5 block text-sm font-semibold text-foreground"
                    >
                      Password
                    </label>

                    <div className="relative">
                      <LockKeyhole className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />

                      <input
                        id="password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        required
                        className="h-13 w-full rounded-xl border border-border bg-background pl-12 pr-4 text-sm text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground/60 focus:border-primary focus:ring-4 focus:ring-primary/10"
                      />
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <div className="rounded-xl border border-destructive/20 bg-destructive/10 px-4 py-3 text-sm leading-6 text-destructive">
                      {error}
                    </div>
                  )}

                  {/* Success */}
                  {message && (
                    <div className="rounded-xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm leading-6 text-primary">
                      {message}
                    </div>
                  )}

                  {/* Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="h-13 w-full rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:pointer-events-none disabled:opacity-60"
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>
                </form>

                <div className="mt-9 border-t border-border pt-6 text-center text-sm text-muted-foreground">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="font-semibold text-primary transition hover:underline"
                  >
                    Create an account
                  </Link>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}