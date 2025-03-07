import { backup } from './backup';

console.log('NodeJS Version: ' + process.version);

const tryBackup = async () => {
	try {
		await backup();
		console.log('Backup completed successfully');
	} catch (error) {
		console.error('Error while running backup: ', error);
	}
};

tryBackup();
