import { NavLink, Outlet } from "react-router-dom";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "font-semibold text-black dark:text-white"
    : "text-slate-700 dark:text-slate-300";

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <header className="border-b bg-white dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto flex max-w-7xl items-center justify-between p-6">
          <h1 className="text-2xl font-bold">Oumaima Portfolio</h1>

          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              <NavLink to="/" className={navLinkClass}>
                Home
              </NavLink>
              <NavLink to="/projects" className={navLinkClass}>
                Projects
              </NavLink>
              <NavLink to="/experience" className={navLinkClass}>
                Experience
              </NavLink>
              <NavLink to="/education" className={navLinkClass}>
                Education
              </NavLink>
              <NavLink to="/certifications" className={navLinkClass}>
                Certifications
              </NavLink>
              <NavLink to="/contact" className={navLinkClass}>
                Contact
              </NavLink>
            </nav>

            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl p-8">
        <Outlet />
      </main>
    </div>
  );
}
