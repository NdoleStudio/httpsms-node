# httpsms-node

[![Version](https://img.shields.io/npm/v/httpsms.svg)](https://www.npmjs.org/package/httpsms)
[![Build](https://github.com/NdoleStudio/httpsms-node/actions/workflows/main.yml/badge.svg)](https://github.com/NdoleStudio/httpsms-node/actions/workflows/main.yml)
[![GitHub contributors](https://img.shields.io/github/contributors/NdoleStudio/httpsms-node)](https://github.com/NdoleStudio/httpsms-node/graphs/contributors)
[![GitHub license](https://img.shields.io/github/license/NdoleStudio/httpsms-node?color=brightgreen)](https://github.com/NdoleStudio/httpsms-node/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/httpsms.svg)](https://www.npmjs.com/package/httpsms)

This httpSMS library provides a server side javascript and typescript client for the [httpSMS](https://httpsms.com/) API.

## Install

```sh
pnpm install httpsms-node
# or
yarn install httpsms-node
```

## Implemented

- [x] **[Messages](#messages)**
  - [x] `POST /v1/messages/send`: Send a new SMS
- [x] **Cipher**
  - [x] `Encrypt`: Encrypt the content of a message to cipher text
  - [x] `Decrypt`: Decrypt an encrypted message content to plain text

## Usage

### Initializing the Client

An instance of the client can be created using `httpsms.New()`.

```js
import HttpSms from "httpsms"

const client = new HttpSms(""/* Get API Key from https://httpsms.com/settings */);
```

### Error handling

All API calls return a `Promise<T>` as the return object. You can handle the response in the `then` and `catch` methods.

### Messages

#### `POST /v1/messages/send`: Send an SMS Message

```js
await client.messages.postSend({
	content: 'This is a sample text message',
	from: '+18005550199',
	to: '+18005550100',
})
.then((message) => {
	console.log(message.id);
})
.catch((err) => {
	console.error(err);
});
```

### Encrypt an SMS message before sending

```js
const encryptionKey = "Password123";
const encryptedContent = await client.cipher.encrypt("This is a sample text message", encryptionKey);

await client.messages.postSend({
	content: encryptedContent,
	from: '+18005550199',
	encrypted: true,
	to: '+18005550100',
})
.then((message) => {
	console.log(message.id);
})
.catch((err) => {
	console.error(err);
});
```

## Testing

You can run the unit tests for this client from the root directory using the command below:

```bash
pnpm run test
```

## License

This project is licensed under the MIT License - see the [LICENSE](license) file for details
