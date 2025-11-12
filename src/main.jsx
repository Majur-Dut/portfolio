import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/projects', element: <Projects /> },
			{ path: '/skills', element: <Skills /> },
			{ path: '/about', element: <About /> },
			{ path: '/contact', element: <Contact /> },
		],
	},
], {
	basename: '/portfolio',
})

const rootElement = document.getElementById('root')
if (!rootElement) {
  console.error('Root element not found!')
} else {
  try {
    createRoot(rootElement).render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>,
    )
  } catch (error) {
    console.error('Error rendering React app:', error)
    rootElement.innerHTML = '<div style="padding: 20px; color: red;">Error loading application. Please check the console.</div>'
  }
}
