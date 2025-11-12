const projects = [
	{
		title: 'AI-Powered Portfolio Chatbot',
		description:
			'A conversational assistant embedded in my portfolio that responds to visitor questions using OpenRouter + DeepSeek.',
		problem: 'Static portfolios struggle to show real-time knowledge or personality.',
		solution:
			'Designed a context-aware agent that understands my projects, experience, and goals to create interactive conversations.',
		outcome: 'Improved visitor engagement and showcased my ability to ship AI-integrated products.',
		stack: ['React', 'Tailwind CSS', 'OpenRouter', 'DeepSeek'],
		gradient: 'from-[#a855f7] via-[#6366f1] to-[#38bdf8]',
	},
	{
		title: 'Wallpaper Generator',
		description:
			'A playful web app that generates custom wallpapers using Python and CSS-driven design systems.',
		problem: 'Finding unique wallpapers that match a user’s vibe often takes too long.',
		solution:
			'Built an interface that blends AI-generated patterns with curated color palettes and layout presets.',
		outcome: 'Enabled quick exploration of designs with export-ready files across multiple resolutions.',
		stack: ['Python', 'Flask', 'HTML', 'CSS'],
		gradient: 'from-[#34d399] via-[#22d3ee] to-[#818cf8]',
	},
	{
		title: 'NewsHub with API',
		description:
			'Aggregates the latest stories from multiple APIs, categorizes them with AI, and presents a friendly reading experience.',
		problem: 'Tech news is scattered. Staying informed requires hopping across multiple sources.',
		solution:
			'Created a pipeline that unifies sources, tags stories, and surfaces insights in a calm, modern UI.',
		outcome: 'A go-to dashboard for daily reading that highlights how AI streamlines information flows.',
		stack: ['Python', 'FastAPI', 'Vite', 'Tailwind'],
		gradient: 'from-[#f97316] via-[#facc15] to-[#34d399]',
	},
]

export default function Projects() {
	return (
		<section className="section">
			<div className="container space-y-12">
				<div className="text-center">
					<h1 className="section-heading">Case Studies & Experiments</h1>
					<p className="section-subtitle">
						A selection of projects that highlight my approach to building intelligent, delightful experiences.
					</p>
				</div>

				<div className="grid gap-10">
					{projects.map((project) => (
						<div key={project.title} className="card relative overflow-hidden p-10">
							<div className={`absolute -right-20 -top-32 h-56 w-56 rounded-full bg-gradient-to-br ${project.gradient} opacity-40 blur-3xl`} />
							<div className="relative grid gap-6 lg:grid-cols-[1.1fr,0.9fr] lg:items-start">
								<div className="space-y-4">
									<h2 className="text-3xl font-semibold text-neutral-900">{project.title}</h2>
									<p className="text-neutral-600">{project.description}</p>
									<div className="grid gap-4 md:grid-cols-3">
										<div className="rounded-2xl bg-indigo-50/70 p-4">
											<p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Problem</p>
											<p className="mt-2 text-sm text-neutral-700">{project.problem}</p>
										</div>
										<div className="rounded-2xl bg-fuchsia-50/70 p-4">
											<p className="text-xs font-semibold uppercase tracking-widest text-fuchsia-500">Solution</p>
											<p className="mt-2 text-sm text-neutral-700">{project.solution}</p>
										</div>
										<div className="rounded-2xl bg-emerald-50/70 p-4">
											<p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">Outcome</p>
											<p className="mt-2 text-sm text-neutral-700">{project.outcome}</p>
										</div>
									</div>
								</div>
								<div className="space-y-6">
									<div>
										<p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Tech Stack</p>
										<div className="mt-3 flex flex-wrap gap-2">
											{project.stack.map((tag) => (
												<span key={tag} className="rounded-full bg-white px-4 py-1 text-xs font-semibold text-indigo-500 shadow">
													{tag}
												</span>
											))}
										</div>
									</div>
									<div className="flex flex-wrap gap-3">
										<a className="btn btn-primary" href="#">
											View Code
										</a>
										<a className="btn btn-ghost" href="#">
											Live Demo
										</a>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

