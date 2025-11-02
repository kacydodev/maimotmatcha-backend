export default {
	routes: [
		{
			method: 'POST',
			path: '/webhookhandler',
			handler: 'webhookhandler.webhookAction',
			config: {
				policies: [],
				middleweares: [],
			},
		},
	],
};
