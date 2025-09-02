// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
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
// libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default layout */}
        <Route element={<Default />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>

        <Route element={<Auth />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>

        <Route element={<Pomodoro />}>
          <Route path="/timer" element={<Timer />} />
        </Route>

        <Route element={<WithUser />}>
          <Route path="/pomodoro" element={<Pomodoro />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/syllabus" element={<Syllabus />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
