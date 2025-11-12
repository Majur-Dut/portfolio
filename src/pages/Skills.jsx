const coreSkills = [
	{ name: 'Python & Automation', level: 90, description: 'Building intelligent scripts, APIs, and AI-powered assistants.' },
	{ name: 'React & Frontend Engineering', level: 85, description: 'Crafting responsive, modern interfaces with Tailwind.' },
	{ name: 'UI/UX Design', level: 80, description: 'Creating prototypes, design systems, and polished interactions in Figma.' },
]

const capabilities = [
	'AI Integrations',
	'Agent Workflows',
	'REST APIs',
	'Prompt Engineering',
	'OpenRouter',
	'DeepSeek',
	'TypeScript',
	'CSS Animations',
	'Responsive Design',
	'Design Systems',
]

const tools = ['VS Code', 'Git', 'Figma', 'Notion', 'Framer', 'Canva']

export default function Skills() {
	return (
		<section className="section">
			<div className="container space-y-12">
				<div className="text-center">
					<h1 className="section-heading">Skills & Capabilities</h1>
					<p className="section-subtitle">
						A toolkit shaped by curiosity, experimentation, and a love for designing smart, human-centered products.
					</p>
				</div>

				<div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
					<div className="card space-y-6 p-10">
						<h2 className="text-xl font-semibold text-neutral-900">Core Focus Areas</h2>
						<div className="space-y-6">
							{coreSkills.map((skill) => (
								<div key={skill.name} className="space-y-3">
									<div className="flex items-center justify-between">
										<h3 className="text-lg font-semibold text-indigo-500">{skill.name}</h3>
										<span className="text-sm font-semibold text-neutral-500">{skill.level}%</span>
									</div>
									<div className="h-3 rounded-full bg-indigo-100">
										<div
											className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500"
											style={{ width: `${skill.level}%` }}
										/>
									</div>
									<p className="text-sm text-neutral-600">{skill.description}</p>
								</div>
							))}
						</div>
					</div>
					<div className="space-y-8">
						<div className="card space-y-4 p-8">
							<h2 className="text-lg font-semibold text-neutral-900">Capabilities</h2>
							<div className="flex flex-wrap gap-2">
								{capabilities.map((item) => (
									<span key={item} className="rounded-full bg-purple-100 px-4 py-1.5 text-sm font-medium text-purple-700">
										{item}
									</span>
								))}
							</div>
						</div>
						<div className="card space-y-4 p-8">
							<h2 className="text-lg font-semibold text-neutral-900">Tools & Platforms</h2>
							<div className="flex flex-wrap gap-2">
								{tools.map((tool) => (
									<span key={tool} className="rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-medium text-emerald-700">
										{tool}
									</span>
								))}
							</div>
						</div>
						<div className="card space-y-3 p-8">
							<h2 className="text-lg font-semibold text-neutral-900">Currently Learning</h2>
							<ul className="space-y-2 text-sm text-neutral-600">
								<li>• Building full-stack AI agents that connect to real-world APIs.</li>
								<li>• Motion design with Framer and micro-interaction prototyping.</li>
								<li>• Advanced prompt engineering patterns for multi-agent systems.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

