export default {
	STRIPE_KEY:
		'pk_test_51Gr5bLBacSK1g5eqCH7VYoWAk3Zh5o9SIIQ9E6qyjeXmKtrCsXWcgXJLnudyCSZYViTvvn8OtkrB6dQt7m6bhjDm0023ejJcCh',
	MAX_ATTACHMENT_SIZE: 5000000,
	s3: {
		REGION: 'us-east-1',
		BUCKET: 'notes-app-2-api-dev-attachmentsbucket-16fdsnqh9vofq',
	},
	apiGateway: {
		REGION: 'us-east-1',
		URL: 'https://yw0pcnw4mj.execute-api.us-east-1.amazonaws.com/dev',
	},
	cognito: {
		REGION: 'us-east-1',
		USER_POOL_ID: 'us-east-1_FVI82iBfu',
		APP_CLIENT_ID: '4su09ijn86dmevj0205lkhf9td',
		IDENTITY_POOL_ID: 'us-east-1:186c796b-6510-48d8-9a93-3196737d58a2',
	},
};
