import {http, HttpResponse} from 'msw';
import {setupServer} from 'msw/node';
import {describe, it} from 'mocha';
import {expect} from 'chai';
import HttpSms from '../dist/index.js';

const successMessageResponse = '{ "data":  { "id": "32b0774a-5094-4b58-9efa-57bc4bb08204", "request_id": "7d56fcd2-1908-4f28-adcb-a42953fd9f81", "owner": "+18005550199", "user_id": "hT5V2CmN5bbG81glMLmosxPV9Np2", "contact": "+18005550199", "content": "This is a test", "type": "mobile-terminated", "status": "delivered", "sim": "SIM2", "send_time": 7703079000, "request_received_at": "2024-01-21T01:50:20.121921Z", "created_at": "2024-01-21T01:50:20.126443Z", "updated_at": "2024-01-21T01:50:27.002531Z", "order_timestamp": "2024-01-21T01:50:28.757Z", "last_attempted_at": "2024-01-21T01:50:23.378948Z", "scheduled_at": "2024-01-21T01:50:20.23984Z", "sent_at": "2024-01-21T01:50:27.825Z", "delivered_at": "2024-01-21T01:50:28.757Z", "expired_at": null, "failed_at": null, "can_be_polled": false, "send_attempt_count": 1, "max_send_attempts": 2, "received_at": null, "failure_reason": null }, "message": "message added to queue", "status": "success" }';

describe('MessageService', () => {
	it('should respond with a valid message', async () => {
		// Arrange
		const server = setupServer(
			// Describe network behavior with request handlers.
			// Tip: move the handlers into their own module and
			// import it across your browser and Node.js setups!
			http.post('https://api.httpsms.com/v1/messages/send', () =>
				HttpResponse.json(JSON.parse(successMessageResponse)),
			),
		);
		server.listen();

		const client = new HttpSms('test key');

		// Act
		const message = await client.messages.postSend({
			content: 'This is a sample text message',
			from: '+18005550199',
			to: '+18005550100',
		});

		// Assert
		expect(message.id).to.equal('32b0774a-5094-4b58-9efa-57bc4bb08204');

		server.close();
	});
	it('should respond with an error when there is a network error', async () => {
		// Arrange
		const server = setupServer(
			// Describe network behavior with request handlers.
			// Tip: move the handlers into their own module and
			// import it across your browser and Node.js setups!
			http.post('https://api.httpsms.com/v1/messages/send', () =>
				HttpResponse.error(),
			),
		);
		server.listen();

		const client = new HttpSms('test key');

		// Act
		try {
			await client.messages.postSend({
				content: 'This is a sample text message',
				from: '+18005550199',
				to: '+18005550100',
			});
		} catch (error) {
			// Assert
			expect(error.message).to.equal('Network error');
		}

		server.close();
	});
});
