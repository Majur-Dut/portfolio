import { useEffect, useMemo, useRef, useState } from 'react'
import { profile } from '../data/profile.js'

// Simple in-memory portfolio data used as system context
const portfolioProfile = profile

export default function Chatbot() {
	const [messages, setMessages] = useState([
		{
			role: 'assistant',
			content:
				"Hi! I'm your portfolio assistant. Ask me about Borong's skills, projects, or experience.",
		},
	])
	const [input, setInput] = useState('')
	const [loading, setLoading] = useState(false)
	const listRef = useRef(null)

	useEffect(() => {
		listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
	}, [messages, loading])

	const systemPrompt = useMemo(() => {
		return [
			'You are an AI assistant embedded in a personal portfolio website.',
			`Person: ${portfolioProfile.name}.`,
			`Intro: ${portfolioProfile.intro}.`,
			`Stack: ${portfolioProfile.stack.join(', ')}.`,
			`AI Tools: ${portfolioProfile.ai.join(', ')}.`,
			`Highlights: ${portfolioProfile.highlights.join(' ')}`,
			'Keep answers concise, helpful, and relevant to the portfolio.',
		].join('\n')
	}, [])

	async function handleSend(e) {
		e?.preventDefault()
		if (!input.trim() || loading) return
		const userContent = input.trim()
		setInput('')
		setMessages((m) => [...m, { role: 'user', content: userContent }])
		setLoading(true)
		try {
			const apiKey = import.meta.env.VITE_OPENROUTER_API_KEY
			const model =
				import.meta.env.VITE_OPENROUTER_MODEL || 'deepseek/deepseek-v3.2-exp'

			if (!apiKey) {
				setMessages((m) => [
					...m,
					{
						role: 'assistant',
						content:
							'Missing VITE_OPENROUTER_API_KEY. Create ai-portfolio/.env and restart the dev server.',
					},
				])
				return
			}

			const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${apiKey}`,
					// Recommended by OpenRouter for browser-based calls
					'HTTP-Referer':
						typeof window !== 'undefined'
							? encodeURI(window.location.origin)
							: '',
					'X-Title': 'Borong Dut Kou AI Portfolio',
				},
				body: JSON.stringify({
					model,
					messages: [
						{ role: 'system', content: systemPrompt },
						...messages.map(({ role, content }) => ({ role, content })),
						{ role: 'user', content: userContent },
					],
				}),
			})
			if (!res.ok) {
				// Graceful local fallback for credit errors so the site remains useful
				if (res.status === 402) {
					const localSummary = [
						`I'm currently unable to reach the AI model (insufficient credits).`,
						'Here is a quick summary from my portfolio data:',
						`Name: ${portfolioProfile.name}`,
						`Stack: ${portfolioProfile.stack.join(', ')}`,
						`AI Tools: ${portfolioProfile.ai.join(', ')}`,
						`Highlights: ${portfolioProfile.highlights.join(' ')}`,
						portfolioProfile.projects?.length
							? `Projects: ${portfolioProfile.projects
									.map((p) => `${p.name} — ${p.highlights.join(' ')}`)
									.join(' | ')}`
							: '',
					]
						.filter(Boolean)
						.join('\n')
					setMessages((m) => [...m, { role: 'assistant', content: localSummary }])
					return
				}
				const errText = await res.text()
				throw new Error(`HTTP ${res.status}: ${errText}`)
			}
			const data = await res.json()
			const content =
				data?.choices?.[0]?.message?.content ||
				"Sorry, I couldn't generate a response right now."
			setMessages((m) => [...m, { role: 'assistant', content }])
		} catch (err) {
			// eslint-disable-next-line no-console
			console.error('OpenRouter error:', err)
			setMessages((m) => [
				...m,
				{
					role: 'assistant',
					content: `There was an error calling the AI service. ${
						err?.message ? `Details: ${err.message}` : ''
					}`.trim(),
				},
			])
		} finally {
			setLoading(false)
		}
	}

	return (
		<div className="flex h-[28rem] flex-col">
			<div ref={listRef} className="flex-1 overflow-y-auto space-y-3 pr-1">
				{messages.map((m, i) => (
					<div
						key={i}
						className={`max-w-[85%] rounded-lg px-3 py-2 ${
							m.role === 'assistant' ? 'bg-white/10' : 'bg-indigo-600 text-white ml-auto'
						}`}
					>
						<p className="whitespace-pre-wrap text-sm leading-relaxed">{m.content}</p>
					</div>
				))}
				{loading && (
					<div className="w-16 h-8 rounded bg-white/10 animate-pulse" />
				)}
			</div>
			<form onSubmit={handleSend} className="mt-3 flex gap-2">
				<input
					type="text"
					className="flex-1 rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:border-indigo-500"
					placeholder="Ask about skills, projects, experience..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button className="btn btn-primary" type="submit" disabled={loading}>
					Send
				</button>
			</form>
		</div>
	)
}


