export default {
	async fetch(request, env, ctx): Promise<Response> {
		const rpcRes = await env.WORKER_API.add(2, 4);
		const result = await env.WORKER_API.fetch("http://internal");
		const data = await result.json();
		console.log("fetch response", data, rpcRes);
		return new Response("Hello World! " + JSON.stringify(data));
	},
} satisfies ExportedHandler<Env>;
