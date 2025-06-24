import { WorkerEntrypoint } from "cloudflare:workers";

export default class extends WorkerEntrypoint {
	override async fetch(request: Request) {
		console.log("hit fetch request");
		const res = {
			data: "Hello from API",
		};

		return new Response(JSON.stringify(res), {
			headers: {
				"Content-Type": "application/json",
			},
		});
	}

	add(a: number, b: number) {
		console.log("hit rpc request", a, b);
		return a + b;
	}
}
