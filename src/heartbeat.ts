import fetch from 'node-fetch';

const heartBeatUrl = 'https://uptime.betterstack.com/api/v1/heartbeat/DVFSKEdVRZVvM6K7vnpJHXaQ';

export async function sendHeartbeat() {
	try {
		const response = await fetch(heartBeatUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`Network response was not ok: ${response.statusText}`);
		}

		const result = await response.json();
		return result;
	} catch (error) {
		console.error('Error sending heartbeat:', error);
		return null;
	}
}

export async function sendHeartbeatFailure(error: Error) {
	try {
		const failureUrl = heartBeatUrl + '/fail';
		const response = await fetch(failureUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: error ? JSON.stringify(error) : undefined,
		});

		if (!response.ok) {
			throw new Error(`Network response was not ok: ${response.statusText}`);
		}

		const result = await response.json();
		return result;
	} catch (error) {
		console.error('Error sending heartbeat failure:', error);
		return null;
	}
}
