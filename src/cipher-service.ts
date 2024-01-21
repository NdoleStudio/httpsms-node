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
		const cipher = createCipheriv(
			'aes-256-cfb',
			this.hash(key),
			iv,
		).setAutoPadding(false);
		return Buffer.concat([
			iv,
			cipher.update(message, 'utf8'),
			cipher.final(),
		]).toString('base64');
	}

	public decrypt(key: string, message: string): string {
		const cipherBytes = Buffer.from(message, 'base64');
		const iv = cipherBytes.subarray(0, 16);
		const decipher = createDecipheriv(
			'aes-256-cfb',
			this.hash(key),
			iv,
		).setAutoPadding(false);

		return Buffer.concat([
			decipher.update(cipherBytes.subarray(16, cipherBytes.length)),
			decipher.final(),
		]).toString();
	}

	private hash(value: string): Buffer {
		return createHash('sha256').update(value).digest();
	}
}

export default CipherService;
