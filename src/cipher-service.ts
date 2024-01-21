import {
	randomBytes,
	createCipheriv,
	createHash,
	createDecipheriv,
} from 'node:crypto';
import {Buffer} from 'node:buffer';

class CipherService {
	public encrypt(key: string, message: string): string {
		const iv = randomBytes(16);
		const cipher = createCipheriv('aes-256-cfb', this.hash(key), iv);
		return Buffer.from(
			Buffer.concat([iv, cipher.update(message, 'utf8'), cipher.final()]),
		).toString('base64');
	}

	public decrypt(key: string, message: string): string {
		const iv = randomBytes(16);
		const decipher = createDecipheriv('aes-256-cfb', this.hash(key), iv);
		return Buffer.from(
			Buffer.concat([
				iv,
				decipher.update(message, 'utf8'),
				decipher.final(),
			]),
		).toString('utf8');
	}

	private hash(value: string): Buffer {
		return createHash('sha256').update(value).digest();
	}
}

export default CipherService;
