const highlights = [
	{
		title: 'AI-first Mindset',
		description:
			'I design experiences where AI feels like a friendly collaborator. From custom agents to playful assistants, I focus on delivering value while keeping the experience human.',
	},
	{
		title: 'Design-led Development',
		description:
			'Beautiful interfaces matter. I use tools like Figma to prototype and iterate quickly, ensuring that what I build feels intuitive and modern.',
	},
	{
		title: 'Learning in Public',
		description:
			'Sharing experiments, prototypes, and lessons is part of my process. It helps me grow faster, collaborate better, and inspire others to explore AI.',
	},
]

const timeline = [
	{ year: '2023', title: 'Sparked by Curiosity', description: 'Started diving into Python and machine learning fundamentals.' },
	{ year: '2024', title: 'First AI Experiences', description: 'Built and shipped AI projects that solved real-world problems.' },
	{ year: '2025', title: 'Design + AI Fusion', description: 'Combining UI/UX design with AI to create thoughtful digital products.' },
]

export default function About() {
	return (
		<section className="section">
			<div className="container space-y-16">
				<div className="text-center">
					<h1 className="section-heading">A Little More About Me</h1>
					<p className="section-subtitle">
						I’m Jithun Methusahan — an AI enthusiast who loves translating ambitious ideas into products that feel
						alive, friendly, and functional.
					</p>
				</div>

				<div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
					<div className="card space-y-6 p-10">
						<h2 className="text-2xl font-semibold text-indigo-500">The Journey So Far</h2>
						<p className="text-neutral-600">
							My fascination with technology began with curiosity — how can we teach machines to think and create? Since
							2023, I&apos;ve immersed myself in Python, AI agents, and modern web development to answer that question
							through projects.
						</p>
						<p className="text-neutral-600">
							Every build is backed by a design-first approach. I sketch interfaces in Figma, validate the user flow, and
							then bring it to life with React and CSS animations. The result: experiences that make complex systems feel
							accessible and inspiring.
						</p>
						<div className="grid gap-4 md:grid-cols-3">
							<div className="rounded-2xl border border-indigo-100 bg-indigo-50/60 p-5">
								<p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">Primary Stack</p>
								<p className="mt-2 text-sm font-semibold text-neutral-800">Python, React, Tailwind</p>
							</div>
							<div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
								<p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">AI Toolkit</p>
								<p className="mt-2 text-sm font-semibold text-neutral-800">OpenRouter, DeepSeek, APIs</p>
							</div>
							<div className="rounded-2xl border border-fuchsia-100 bg-fuchsia-50/60 p-5">
								<p className="text-xs font-semibold uppercase tracking-widest text-fuchsia-500">Design Tools</p>
								<p className="mt-2 text-sm font-semibold text-neutral-800">Figma, Framer, Whimsical</p>
							</div>
						</div>
					</div>
					<div className="card space-y-6 p-8">
						<h2 className="text-xl font-semibold text-neutral-900">What Drives Me</h2>
						<ul className="space-y-5">
							{highlights.map((item) => (
								<li key={item.title}>
									<h3 className="text-lg font-semibold text-indigo-500">{item.title}</h3>
									<p className="mt-1 text-sm text-neutral-600">{item.description}</p>
								</li>
							))}
						</ul>
						<div className="divider" />
						<div>
							<p className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Currently</p>
							<p className="mt-2 text-neutral-600">
								Building AI-driven interfaces, experimenting with conversational design, and planning my next community
								project to help other students learn AI creatively.
							</p>
						</div>
					</div>
				</div>

				<div className="card overflow-hidden border-white bg-white/95 p-10">
					<div className="grid gap-8 md:grid-cols-3">
						{timeline.map((item) => (
							<div key={item.year} className="space-y-3">
								<div className="inline-flex items-center rounded-full bg-indigo-100 px-4 py-1 text-sm font-semibold text-indigo-600">
									{item.year}
								</div>
								<h3 className="text-lg font-semibold text-neutral-900">{item.title}</h3>
								<p className="text-sm text-neutral-600">{item.description}</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

