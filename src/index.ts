import { backup } from './backup';
import { sendHeartbeat, sendHeartbeatFailure } from './heartbeat';

console.log('NodeJS Version: ' + process.version);

const tryBackup = async () => {
	try {
		sendHeartbeat();
		await backup();
		console.log('Backup completed successfully');
	} catch (error) {
		sendHeartbeatFailure(error as Error);
		console.error('Error while running backup: ', error);
	}
};

tryBackup();
