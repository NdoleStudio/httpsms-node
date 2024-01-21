# httpsms-node

[![Version](https://img.shields.io/npm/v/httpsms.svg)](https://www.npmjs.org/package/httpsms)
[![Build](https://github.com/NdoleStudio/httpsms-node/actions/workflows/main.yml/badge.svg)](https://github.com/NdoleStudio/httpsms-node/actions/workflows/main.yml)
[![codecov](https://codecov.io/gh/NdoleStudio/httpsms-node/branch/main/graph/badge.svg)](https://codecov.io/gh/NdoleStudio/httpsms-node)
[![GitHub contributors](https://img.shields.io/github/contributors/NdoleStudio/httpsms-node)](https://github.com/NdoleStudio/httpsms-node/graphs/contributors)
[![GitHub license](https://img.shields.io/github/license/NdoleStudio/httpsms-node?color=brightgreen)](https://github.com/NdoleStudio/httpsms-node/blob/master/LICENSE)
[![Downloads](https://img.shields.io/npm/dm/httpsms.svg)](https://www.npmjs.com/package/httpsms)

This httpSMS library provides a server side javascript and typescript client for the [httpSMS](https://httpsms.com/) API.

## Install

```sh
pnpm install httpsms-node
# or
npm install httpsms-node
# or
yarn install httpsms-node
```

## Implemented

-   [x] **[MessageService](#messages)**
    -   [x] `POST /v1/messages/send`: Send a new SMS
-   [x] **Cipher**
    -   [x] `Encrypt`: Encrypt the content of a message to cipher text
    -   [x] `Decrypt`: Decrypt an encrypted message content to plain text

## Usage

### Initializing the Client

An instance of the client can be created using `httpsms.New()`.

```go
package main

import (
    "github.com/NdoleStudio/httpsms-go"
)

func main()  {
    client := htpsms.New(htpsms.WithDelay(200))
}
```

### Error handling

All API calls return an `error` as the last return object. All successful calls will return a `nil` error.

```go
_, response, err := client.MessageService.Send(context.Background())
if err != nil {
    //handle error
}
```

### MessageService

#### `POST /v1/messages/send`: Send a new SMS Message

```go
message, response, err := client.MessageService.Send(context.Background(), &MessageSendParams{
    Content: "This is a sample text message",
    From:    "+18005550199",
    To:      "+18005550100",
})

if err != nil {
    log.Fatal(err)
}

log.Println(message.Code) // 202
```

## Testing

You can run the unit tests for this client from the root directory using the command below:

```bash
go test -v
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
