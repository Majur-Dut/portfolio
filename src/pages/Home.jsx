import Chatbot from '../components/Chatbot.jsx'
import portrait from '../BORONG.png'

const skillTags = [
	'Python',
	'HTML',
	'CSS',
	'JavaScript',
	'NumPy',
	'AI Development',
	'Machine Learning',
	'UI/UX Design',
	'Figma',
	'Git',
	'API Integration',
]

const journey = [
	{ year: '2023', text: 'Started AI & Python Journey' },
	{ year: '2024', text: 'Built First AI Projects' },
	{ year: '2025', text: 'Expanding Web Development Skills' },
]

const services = [
	{
		title: 'AI Solutions',
		description: 'Custom AI apps, machine learning models, and intelligent automations tailored to your goals.',
		icon: '🧠',
		gradient: 'from-[#9a6bff] to-[#c084fc]',
		included: [
			'Machine Learning Models',
			'AI Agent Development',
			'Data Analysis & Processing',
			'Intelligent Automation',
		],
	},
	{
		title: 'Web Development',
		description: 'Modern, responsive websites built with the latest technologies and best practices.',
		icon: '💻',
		gradient: 'from-[#34d399] to-[#22d3ee]',
		included: ['Responsive Design', 'Modern Frameworks', 'API Integration', 'Performance Optimization'],
	},
	{
		title: 'UI/UX Design',
		description: 'Intuitive interfaces designed in Figma with a focus on user experience and visual storytelling.',
		icon: '🎨',
		gradient: 'from-[#f97316] to-[#facc15]',
		included: ['User Interface Design', 'User Experience Research', 'Figma Prototyping', 'Design Systems'],
	},
]

const capabilitiesExtended = [
	{
		title: 'API Development',
		description: 'RESTful APIs and reliable integrations that connect your product stack.',
		icon: '🗄️',
	},
	{
		title: 'Automation',
		description: 'Workflow optimization and process automation that save hours every week.',
		icon: '⚡',
	},
	{
		title: 'Consultation',
		description: 'Technical guidance, discovery sessions, and project planning support.',
		icon: '🌐',
	},
]

const featuredProjects = [
	{
		title: 'NEWSHUB-WITH-API',
		description:
			'A Python-based AI project that fetches news from multiple sources using APIs and presents it in a friendly interface.',
		features: [
			'Multi-source news aggregation',
			'AI-powered categorization',
			'Real-time updates',
			'Clean UI experience',
		],
		tags: ['Python', 'APIs', 'AI', 'Data Processing'],
		gradient: 'from-[#a855f7] to-[#6366f1]',
	},
	{
		title: 'Wallpaper Generator',
		description:
			'A web application combining Python, HTML, and CSS to generate custom AI-assisted wallpapers.',
		features: [
			'AI-generated patterns',
			'Custom color schemes',
			'Multiple resolutions',
			'Download functionality',
		],
		tags: ['Python', 'HTML', 'CSS', 'Web Design'],
		gradient: 'from-[#34d399] to-[#38bdf8]',
	},
]

export default function Home() {
	return (
		<div className="space-y-32">
			<section className="section pb-16 pt-20">
				<div className="container grid gap-16 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
					<div className="space-y-8">
						<span className="badge">Passionate AI Student</span>
						<h1 className="text-4xl font-bold leading-tight text-neutral-900 sm:text-5xl lg:text-6xl">
							AI Solutions{' '}
							<span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500 bg-clip-text text-transparent">
								Web Development
							</span>{' '}
							&{' '}
							<span className="bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text text-transparent">
								UI/UX Design
							</span>
						</h1>
						<p className="max-w-2xl text-lg text-neutral-600">
							Hi, I&apos;m <span className="font-semibold text-indigo-500">Borong Dut Kou</span>, a 14-year-old
							student from South Sudan passionate about AI, Python, and creating digital experiences that feel fresh,
							curious, and human. I blend intelligent automation with beautiful interfaces to build products that
							people remember.
						</p>
						<div className="flex flex-wrap gap-4">
							<a href="/projects" className="btn btn-primary">
								Explore My Work
							</a>
							<a href="/contact" className="btn btn-ghost">
								Get In Touch
							</a>
						</div>
						<div className="grid gap-4 pt-6 sm:grid-cols-3">
							<div className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm">
								<p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Experience</p>
								<p className="mt-2 text-3xl font-bold text-neutral-900">3 Years</p>
								<p className="mt-1 text-sm text-neutral-500">Hands-on learning & building since 2023</p>
							</div>
							<div className="rounded-2xl border border-emerald-100 bg-white p-5 shadow-sm">
								<p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">Focus Areas</p>
								<p className="mt-2 text-lg font-semibold text-neutral-900">AI, Web Apps, Design Systems</p>
							</div>
							<div className="rounded-2xl border border-fuchsia-100 bg-white p-5 shadow-sm">
								<p className="text-xs font-semibold uppercase tracking-widest text-fuchsia-500">Tools I Love</p>
								<p className="mt-2 text-lg font-semibold text-neutral-900">Python • React • Figma</p>
							</div>
						</div>
					</div>
					<div className="relative flex items-center justify-center">
						<div className="absolute inset-0 scale-110 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,#a855f7,#34d399,#6366f1)] opacity-20 blur-3xl" />
						<div className="relative flex h-full w-full max-w-sm flex-col gap-6">
							<div className="card overflow-hidden">
								<div className="relative flex flex-col items-center bg-gradient-to-br from-indigo-400 via-purple-400 to-fuchsia-400 p-10 text-white">
									<div className="relative mt-4 h-48 w-48 rounded-full border-4 border-white/80 bg-white/90 shadow-2xl">
										<div className="absolute -inset-3 -z-10 rounded-full bg-gradient-to-br from-sky-400/50 via-fuchsia-400/60 to-emerald-400/50 blur-2xl" />
										<img
											src={portrait}
											alt="Jithun Methusahan"
											className="h-full w-full rounded-full object-cover"
										/>
									</div>
									<div className="relative mt-6 rounded-2xl bg-white/90 px-6 py-5 text-center text-neutral-700 shadow-lg">
										<p className="text-lg font-semibold text-neutral-900">Driven by curiosity</p>
										<p className="mt-2 text-sm">
											Blending machine intelligence with playful, human-centered interfaces to craft memorable products.
										</p>
									</div>
									<div className="absolute -top-16 inset-x-0 flex justify-center">
										<div className="h-32 w-32 rounded-full bg-white/10 blur-3xl" />
									</div>
								</div>
							</div>
							<div className="card p-6 shadow-xl">
								<h3 className="text-lg font-semibold text-neutral-900">Ask My Portfolio Assistant</h3>
								<p className="mt-2 text-sm text-neutral-500">
									A built-in AI chatbot that answers questions about my skills, experience, and projects.
								</p>
								<div className="divider my-5" />
								<Chatbot />
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="about" className="section pt-0">
				<div className="container space-y-10">
					<div className="text-center">
						<h2 className="section-heading">About Me</h2>
						<p className="section-subtitle">
							Passionate about AI and technology, constantly learning and building innovative solutions.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
						<div className="card space-y-6 p-8">
							<h3 className="text-2xl font-semibold text-emerald-500">My Story</h3>
							<p className="text-neutral-600">
							Passionate about AI, software development, and technology, I’m a self-taught developer who believes that curiosity and consistency can turn any dream into a skill. After completing my high school in 2023, I faced financial challenges that prevented me from continuing to college. However, that didn’t stop me. I decided to take control of my learning path — diving deep into AI, web development, and coding using online resources, documentation, and hands-on experimentation.

							</p>
							<p className="text-neutral-600">
							Today, I’m building meaningful projects that combine intelligence, creativity, and real-world problem-solving — from AI-powered tools to full-stack web applications.
							</p>
							<div className="flex flex-wrap gap-4 pt-2 text-sm text-neutral-500">
								<span className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-indigo-600">
									<span role="img" aria-hidden="true">
										📅
									</span>
									Since 2023
								</span>
								<span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-emerald-600">
									<span role="img" aria-hidden="true">
										💻
									</span>
									3 Years Experience
								</span>
							</div>
						</div>
						<div className="space-y-8">
							<div className="card space-y-4 p-6">
								<h3 className="text-xl font-semibold text-purple-500">Technical Skills</h3>
								<div className="flex flex-wrap gap-2">
									{skillTags.map((tag) => (
										<span key={tag} className="chip">
											{tag}
										</span>
									))}
								</div>
							</div>
							<div className="card space-y-4 p-6">
								<h3 className="text-xl font-semibold text-neutral-900">Learning Journey</h3>
								<ul className="space-y-3">
									{journey.map((item) => (
										<li key={item.year} className="flex items-center gap-3">
											<span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-600">
												{item.year}
											</span>
											<span className="text-neutral-600">{item.text}</span>
										</li>
									))}
								</ul>
							</div>
							<div className="card space-y-3 p-6">
								<h3 className="text-xl font-semibold text-neutral-900">Education</h3>
								<div className="rounded-2xl bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-5">
									<p className="text-sm font-semibold text-purple-500">Grade 9</p>
									<p className="mt-1 text-lg font-semibold text-neutral-900">Prince of Wales College</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="projects" className="section pt-0">
				<div className="container space-y-10">
					<div className="text-center">
						<h2 className="section-heading">Featured Projects</h2>
						<p className="section-subtitle">
							Showcasing applications that highlight my skills in AI, web development, and creative design.
						</p>
					</div>
					<div className="grid gap-8 lg:grid-cols-2">
						{featuredProjects.map((project) => (
							<div key={project.title} className="relative overflow-hidden rounded-3xl bg-white shadow-[0_28px_70px_rgba(99,102,241,0.12)]">
								<div className={`absolute -top-24 -right-20 h-56 w-56 rounded-full bg-gradient-to-br ${project.gradient} opacity-40 blur-3xl`} />
								<div className="relative space-y-5 p-8">
									<h3 className="text-2xl font-semibold text-neutral-900">{project.title}</h3>
									<p className="text-neutral-600">{project.description}</p>
									<div className="space-y-2">
										<p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Key Features</p>
										<ul className="space-y-2">
											{project.features.map((feature) => (
												<li key={feature} className="flex items-start gap-3 text-sm text-neutral-600">
													<span className="mt-1 h-2.5 w-2.5 rounded-full bg-indigo-400" />
													{feature}
												</li>
											))}
										</ul>
									</div>
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-indigo-500"
											>
												{tag}
											</span>
										))}
									</div>
									<div className="flex flex-wrap gap-3 pt-2">
										<button className="btn btn-primary">View Code</button>
										<button className="btn btn-ghost">Live Demo</button>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="card flex flex-col items-center gap-4 p-10 text-center lg:flex-row lg:justify-between lg:text-left">
						<div>
							<h3 className="text-2xl font-semibold text-neutral-900">More Projects Coming Soon</h3>
							<p className="mt-2 text-neutral-600">
								I&apos;m always experimenting with new ideas. Follow my GitHub to catch the latest releases and
								behind-the-scenes builds.
							</p>
						</div>
						<a href="https://github.com" className="btn btn-primary">
							Follow on GitHub
						</a>
					</div>
				</div>
			</section>

			<section id="services" className="section pt-0">
				<div className="container space-y-10">
					<div className="text-center">
						<h2 className="section-heading">Services I Offer</h2>
						<p className="section-subtitle">
							Combining AI expertise with modern development practices to deliver innovative solutions.
						</p>
					</div>
					<div className="grid gap-6 md:grid-cols-3">
						{services.map((service) => (
							<div
								key={service.title}
								className={`relative overflow-hidden rounded-3xl bg-white p-8 shadow-[0_24px_60px_rgba(99,102,241,0.12)]`}
							>
								<div className={`absolute -top-14 -left-14 h-36 w-36 rounded-full bg-gradient-to-br ${service.gradient} opacity-50 blur-2xl`} />
								<div className="relative space-y-4">
									<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/70 text-2xl shadow-inner">
										<span role="img" aria-hidden="true">
											{service.icon}
										</span>
									</div>
									<h3 className="text-xl font-semibold text-neutral-900">{service.title}</h3>
									<p className="text-sm text-neutral-600">{service.description}</p>
									<div className="space-y-2">
										<p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">What's Included</p>
										<ul className="space-y-1.5 text-sm text-neutral-600">
											{service.included.map((item) => (
												<li key={item} className="flex items-center gap-2">
													<span className="h-2 w-2 rounded-full bg-purple-400" />
													{item}
												</li>
											))}
										</ul>
									</div>
								</div>
							</div>
						))}
					</div>
					<div className="card space-y-6 p-10">
						<h3 className="text-2xl font-semibold text-emerald-500 text-center md:text-left">Additional Capabilities</h3>
						<div className="grid gap-6 md:grid-cols-3">
							{capabilitiesExtended.map((capability) => (
								<div key={capability.title} className="flex flex-col items-center rounded-3xl border border-indigo-100 bg-indigo-50/40 p-6 text-center">
									<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl text-indigo-500 shadow-inner">
										<span role="img" aria-hidden="true">
											{capability.icon}
										</span>
									</div>
									<h4 className="mt-4 text-base font-semibold text-neutral-900">{capability.title}</h4>
									<p className="mt-2 text-sm text-neutral-600">{capability.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section className="section pt-0">
				<div className="container">
					<div className="card relative overflow-hidden p-10 text-center md:text-left">
						<div className="absolute -top-24 right-0 h-56 w-56 rounded-full bg-gradient-to-br from-indigo-300 to-fuchsia-400 opacity-30 blur-3xl" />
						<div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
							<div>
								<h3 className="text-3xl font-semibold text-neutral-900">Let’s build something intelligent</h3>
								<p className="mt-2 max-w-xl text-neutral-600">
									Whether it’s a playful interface, an AI-powered assistant, or a product that needs both, I’d
									love to collaborate.
								</p>
							</div>
							<div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
								<a href="/contact" className="btn btn-primary">
									Contact Me
								</a>
								<a href="mailto:you@example.com" className="btn btn-ghost">
									Email Directly
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

