import {expect} from 'chai';
import {describe, it} from 'mocha';
import CipherService from '../dist/src/cipher-service.js';

describe('CipherService', () => {
	it('can encrypt and decrypt the same content', () => {
		// Arrange
		const key = 'Password123';
		const message = 'This is a test text message1';
		const service = new CipherService();

		// Act
		const cipherText = service.encrypt(key, message);
		const plainText = service.decrypt(key, cipherText);

		// Assert
		expect(plainText).to.equal(message);
	});
});
