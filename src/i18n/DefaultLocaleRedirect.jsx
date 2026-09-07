import { Navigate, useLocation } from "react-router-dom";
import { stripLocalePrefix } from "@/i18n/path";

export default function DefaultLocaleRedirect() {
  const location = useLocation();
  const path = stripLocalePrefix(location.pathname);
  return <Navigate to={`${path}${location.search}${location.hash}`} replace />;
}
