import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cloudflareLogo from "./assets/Cloudflare_Logo.svg";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);
	const [name, setName] = useState("unknown");
	const [rpc, setRpc] = useState("unknown");
	const [resWithHeader, setResWithHeader] = useState("unknown");

	return (
		<>
			<div>
				<a href="https://vite.dev" target="_blank">
					<img src={viteLogo} className="logo" alt="Vite logo" />
				</a>
				<a href="https://react.dev" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
				<a href="https://workers.cloudflare.com/" target="_blank">
					<img
						src={cloudflareLogo}
						className="logo cloudflare"
						alt="Cloudflare logo"
					/>
				</a>
			</div>
			<h1>Vite + React + Cloudflare</h1>
			<div className="card">
				<button
					onClick={() => {
						fetch("/api/")
							.then((res) => res.json() as Promise<{ data: string }>)
							.then((data) => setName(data.data));
					}}
					aria-label="fetch"
				>
					TEST FETCH RESPONSE: {name}
				</button>
				<button
					onClick={() => {
						fetch("/api-header/")
							.then((res) => res.json() as Promise<{ data: string }>)
							.then((data) => setResWithHeader(data.data));
					}}
					aria-label="fetch"
				>
					TEST FETCH RESPONSE WITH HOST HEADER: {resWithHeader}
				</button>
				<button
					onClick={() => {
						fetch("/rpc/")
							.then((res) => res.json() as Promise<{ data: string }>)
							.then((data) => setRpc(data.data));
					}}
					aria-label="rpc"
				>
					TEST RPC RESPONSE: {rpc}
				</button>
			</div>
		</>
	);
}

export default App;
