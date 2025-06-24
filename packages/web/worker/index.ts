// export default {
//   fetch(request) {
//     const url = new URL(request.url);
//
//     if (url.pathname.startsWith("/api/")) {
//       return Response.json({
//         name: "Cloudflare",
//       });
//     }
// 		return new Response(null, { status: 404 });
//   },
// } satisfies ExportedHandler<Env>;
export default {
	async fetch(request, env) {
		try {
			const url = new URL(request.url);
			if (url.pathname.startsWith("/api/")) {
				const fetchRes = await env.WORKER_API.fetch(
					new URL("http://internal-no-host-header"),
				);
				console.log("Fetch response status", fetchRes);
				return fetchRes;
			} else if (url.pathname.startsWith("/api-header/")) {
				const requestWithHeader = new Request(
					new URL("http://internal-no-host-header"),
				);
				requestWithHeader.headers.set("host", "test");
				const fetchRes = await env.WORKER_API.fetch(requestWithHeader);
				console.log("Fetch response status", fetchRes);
				return fetchRes;
			} else {
				const rpcRes = await env.WORKER_API.add(2, 4);
				console.log("RPC response", rpcRes);
				return new Response(JSON.stringify({ data: rpcRes }), {
					headers: {
						"Content-Type": "application/json",
					},
				});
			}
		} catch (err) {
			console.error(err);
		}

		return new Response(null, { status: 404 });
	},
} satisfies ExportedHandler<Env>;
