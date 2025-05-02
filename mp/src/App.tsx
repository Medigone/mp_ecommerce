import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { FrappeProvider } from 'frappe-react-sdk'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

function App() {
  const [count, setCount] = useState(0)

	const getSiteName = () => {
		// @ts-ignore
		if (window.frappe?.boot?.versions?.frappe && (window.frappe.boot.versions.frappe.startsWith('15') || window.frappe.boot.versions.frappe.startsWith('16'))) {
			// @ts-ignore
			return window.frappe?.boot?.sitename ?? import.meta.env.VITE_SITE_NAME
		}
		return import.meta.env.VITE_SITE_NAME

	}

  return (
	<div className="App">
		<Theme 
			appearance='dark'
			accentColor='gray'
			panelBackground='translucent'
		
		>
	  <FrappeProvider
	  		siteName={getSiteName()}
	  >
		<div>
	  <div>

		<a href="https://reactjs.org" target="_blank">
		  <img src={reactLogo} className="logo react" alt="React logo" />
		</a>
	  </div>
	  <h1>MP + React + Frappe</h1>
	  <div className="card">
		<button onClick={() => setCount((count) => count + 1)}>
		  count is {count}
		</button>
		
	  </div>
	  
	  </div>
	  </FrappeProvider>
	  </Theme>	
	</div>
  )
}

export default App
