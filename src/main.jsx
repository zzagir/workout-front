import React from 'react'
import ReactDOM from 'react-dom/client'

// import Home from './components/screens/home/Home'
import '../src/assets/styles/index.scss'

import Router from './routes/Routes'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <Home /> */}
		<Router />
	</React.StrictMode>
)
