// pages
import Home from "./pages/Home";
import About from "./pages/About";
import AuthLogin from "./pages/AuthLogin";
import Settings from "./pages/Settings";
import Analytics from "./pages/Analytics";
import Tasks from "./pages/Tasks";
import Timer from "./pages/Timer";
import Syllabus from "./pages/Syllabus";
import NotFound from "./pages/NotFound";
// layouts
import Default from "./layout/Default";
import Auth from "./layout/Auth";
import Pomodoro from "./layout/Pomodoro";
import WithUser from "./layout/WithUser";
// Protected routes
import ProtectedRoute from "./components/auth/ProtectedRoute";
// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
// context
import { ThemeProvider } from "./components/ui/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Default layout */}
          <Route element={<Default />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Route>
          {/* auth layout */}
          <Route element={<Auth />}>
            <Route path="/login" element={<AuthLogin />} />
          </Route>
          {/* only layout accessible by unlogged in users as well */}
          <Route element={<Pomodoro />}>
            <Route path="/timer" element={<Timer />} />
          </Route>

          <Route element={<WithUser />}>
            <Route
              path="/pomodoro"
              element={
                <ProtectedRoute>
                  <Pomodoro />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tasks"
              element={
                <ProtectedRoute>
                  <Tasks />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />
            <Route
              path="/analytics"
              element={
                <ProtectedRoute>
                  <Analytics />
                </ProtectedRoute>
              }
            />
            <Route
              path="/syllabus"
              element={
                <ProtectedRoute>
                  <Syllabus />
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
