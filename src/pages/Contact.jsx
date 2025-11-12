const contactLinks = [
	{
		label: 'Email',
		value: 'warunimanike8@gmail.com',
		href: 'mailto:warunimanike8@gmail.com',
		icon: '✉️',
		gradient: 'from-[#a855f7] to-[#c084fc]',
	},
	{
		label: 'GitHub',
		value: 'JithunMethusahan',
		href: 'https://github.com/JithunMethusahan',
		icon: '🐙',
		gradient: 'from-[#22d3ee] to-[#34d399]',
	},
	{
		label: 'Location',
		value: 'Sri Lanka',
		href: null,
		icon: '📍',
		gradient: 'from-[#f97316] to-[#facc15]',
	},
]

const quickActions = [
	{ label: 'Email Me', href: 'mailto:warunimanike8@gmail.com', icon: '✉️' },
	{ label: 'GitHub', href: 'https://github.com/JithunMethusahan', icon: '🐙' },
]

export default function Contact() {
	return (
		<section className="section">
			<div className="container max-w-5xl space-y-12">
				<div className="text-center">
					<h1 className="section-heading">Let’s Collaborate</h1>
					<p className="section-subtitle">
						Whether you have a project in mind or just want to say hello, I’d love to hear from you.
					</p>
				</div>

				<div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
					<div className="card space-y-6 p-10">
						<h2 className="text-2xl font-semibold text-neutral-900">Send a Message</h2>
						<form className="space-y-5">
							<div>
								<label className="text-sm font-semibold text-neutral-500" htmlFor="name">
									Name
								</label>
								<input
									id="name"
									name="name"
									type="text"
									placeholder="Your name"
									className="mt-2 w-full rounded-2xl border border-indigo-100 bg-white px-4 py-3 text-sm outline-none ring-indigo-200 focus:ring-2"
								/>
							</div>
							<div>
								<label className="text-sm font-semibold text-neutral-500" htmlFor="email">
									Email
								</label>
								<input
									id="email"
									name="email"
									type="email"
									placeholder="you@example.com"
									className="mt-2 w-full rounded-2xl border border-indigo-100 bg-white px-4 py-3 text-sm outline-none ring-indigo-200 focus:ring-2"
								/>
							</div>
							<div>
								<label className="text-sm font-semibold text-neutral-500" htmlFor="subject">
									Subject
								</label>
								<input
									id="subject"
									name="subject"
									type="text"
									placeholder="Project inquiry, collaboration, etc."
									className="mt-2 w-full rounded-2xl border border-indigo-100 bg-white px-4 py-3 text-sm outline-none ring-indigo-200 focus:ring-2"
								/>
							</div>
							<div>
								<label className="text-sm font-semibold text-neutral-500" htmlFor="message">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={4}
									placeholder="How can I help?"
									className="mt-2 w-full rounded-2xl border border-indigo-100 bg-white px-4 py-3 text-sm outline-none ring-indigo-200 focus:ring-2"
								/>
							</div>
							<button
								type="submit"
								className="btn btn-primary w-full justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#a855f7] via-[#6366f1] to-[#38bdf8] py-3 text-base sm:w-auto"
							>
								<span role="img" aria-hidden="true">
									✈️
								</span>
								Send Message
							</button>
						</form>
					</div>
					<div className="space-y-8">
						<div className="card space-y-6 p-8">
							<h2 className="text-xl font-semibold text-neutral-900">Let’s Connect</h2>
							<ul className="space-y-4">
								{contactLinks.map((item) => (
									<li
										key={item.label}
										className="flex items-center justify-between rounded-3xl border border-indigo-100 bg-white/90 p-5 text-sm text-neutral-700 shadow-[0_18px_40px_rgba(99,102,241,0.08)]"
									>
										<div className="flex items-center gap-4">
											<div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${item.gradient} text-xl text-white`}>
												<span role="img" aria-hidden="true">
													{item.icon}
												</span>
											</div>
											<div>
												<p className="font-semibold text-neutral-900">{item.label}</p>
												<p className="text-neutral-600">{item.value}</p>
											</div>
										</div>
										{item.href ? (
											<a className="text-indigo-500 hover:underline" href={item.href}>
												Visit
											</a>
										) : null}
									</li>
								))}
							</ul>
							<div className="pt-2">
								<p className="text-xs font-semibold uppercase tracking-wide text-neutral-500">Quick Actions</p>
								<div className="mt-3 flex flex-wrap gap-3">
									{quickActions.map((action) => (
										<a
											key={action.label}
											href={action.href}
											className="flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 text-sm font-semibold text-indigo-500 shadow-sm hover:border-indigo-200"
										>
											<span role="img" aria-hidden="true">
												{action.icon}
											</span>
											{action.label}
										</a>
									))}
								</div>
							</div>
						</div>
						<div className="card space-y-4 p-8">
							<h2 className="text-xl font-semibold text-neutral-900">Availability</h2>
							<p className="text-sm text-neutral-600">
								I&apos;m available for freelance collaborations, student-led initiatives, and mentorship conversations
								with peers exploring AI.
							</p>
							<div className="rounded-2xl bg-gradient-to-br from-indigo-100 via-purple-100 to-fuchsia-100 p-6 text-sm text-neutral-700">
								<p className="font-semibold text-indigo-600">Weekly Schedule</p>
								<p className="mt-2">Weekdays: 5.00 PM – 8.00 PM (GMT+5:30)</p>
								<p>Weekends: Flexible (by appointment)</p>
							</div>
						</div>
						<div className="card space-y-3 p-8 text-center">
							<h2 className="text-xl font-semibold text-neutral-900">Response Time</h2>
							<p className="text-sm text-neutral-600">
								I typically respond within 24 hours. For urgent projects, mention it in your message and I’ll get back
								to you sooner.
							</p>
						</div>
					</div>
				</div>

				<div className="card items-center justify-between gap-6 rounded-3xl border border-indigo-100 bg-white/90 p-8 text-center sm:flex sm:text-left">
					<div>
						<h3 className="text-2xl font-semibold text-indigo-500">Jithun Methusahan</h3>
						<p className="text-sm text-neutral-500">AI Developer & UI/UX Designer</p>
					</div>
					<div className="flex gap-3">
						<a
							href="mailto:warunimanike8@gmail.com"
							className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-xl text-indigo-500 shadow-inner"
						>
							✉️
						</a>
						<a
							href="https://github.com/JithunMethusahan"
							className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-xl text-indigo-500 shadow-inner"
						>
							🐙
						</a>
					</div>
				</div>

				<p className="text-center text-sm italic text-neutral-400">
					"The future belongs to those who combine creativity with technology to solve tomorrow’s challenges today."
				</p>
			</div>
		</section>
	)
}

