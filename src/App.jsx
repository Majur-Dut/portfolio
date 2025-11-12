import { NavLink, Outlet } from 'react-router-dom'
import './index.css'
import portrait from './BORONG.png'

function App() {
	return (
		<div className="relative flex min-h-full flex-col">
			<div className="pointer-events-none absolute inset-x-0 top-[-12rem] -z-10 h-[32rem] bg-[radial-gradient(ellipse_at_top,rgba(196,181,253,0.45),transparent_55%)]" />
			<header className="sticky top-0 z-40 border-b border-white/70 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
				<nav className="container flex h-20 items-center justify-between">
					<NavLink to="/" className="flex items-center gap-3 text-xl font-semibold">
						<span className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500 shadow-lg">
							<img src={portrait} alt="Borong Dut Kou" className="h-full w-full rounded-full object-cover" />
						</span>
						<span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500 bg-clip-text text-transparent">
							Borong Dut Kou
						</span>
					</NavLink>
					<div className="flex items-center gap-1 sm:gap-2">
						<NavLink
							to="/"
							className={({ isActive }) =>
								`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
									isActive
										? 'bg-indigo-100 text-indigo-600'
										: 'text-neutral-600 hover:text-indigo-600'
								}`
							}
						>
							Home
						</NavLink>
						<NavLink
							to="/projects"
							className={({ isActive }) =>
								`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
									isActive
										? 'bg-indigo-100 text-indigo-600'
										: 'text-neutral-600 hover:text-indigo-600'
								}`
							}
						>
							Projects
						</NavLink>
						<NavLink
							to="/skills"
							className={({ isActive }) =>
								`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
									isActive
										? 'bg-indigo-100 text-indigo-600'
										: 'text-neutral-600 hover:text-indigo-600'
								}`
							}
						>
							Skills
						</NavLink>
						<NavLink
							to="/about"
							className={({ isActive }) =>
								`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
									isActive
										? 'bg-indigo-100 text-indigo-600'
										: 'text-neutral-600 hover:text-indigo-600'
								}`
							}
						>
							About
						</NavLink>
						<NavLink
							to="/contact"
							className={({ isActive }) =>
								`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
									isActive
										? 'bg-indigo-100 text-indigo-600'
										: 'text-neutral-600 hover:text-indigo-600'
								}`
							}
						>
							Contact
						</NavLink>
						<a
							href="/resume.pdf"
							className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-fuchsia-100 transition-transform hover:-translate-y-0.5"
						>
							Download Resume
						</a>
					</div>
				</nav>
			</header>

			<main className="flex-1">
				<Outlet />
			</main>

			<footer className="border-t border-white/70 bg-white/80">
				<div className="container flex flex-col gap-3 py-8 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
					<p>© {new Date().getFullYear()} Borong Dut kou. Crafted with passion for AI and design.</p>
					<div className="flex items-center gap-3">
						<a href="https://github.com" className="text-neutral-500 hover:text-indigo-600">
							GitHub
						</a>
						<a href="https://www.linkedin.com" className="text-neutral-500 hover:text-indigo-600">
							LinkedIn
						</a>
						<a href="mailto:you@example.com" className="text-neutral-500 hover:text-indigo-600">
							Email
						</a>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default App
