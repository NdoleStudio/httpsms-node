import type {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import type {Message, MessageResponse, MessageSendRequest} from './models.js';

class MessageService {
	constructor(readonly client: AxiosInstance) {}

	public async postSend(request: MessageSendRequest): Promise<Message> {
		return new Promise<Message>((resolve, reject) => {
			this.client
				.post('/v1/messages/send', request)
				.then((response: AxiosResponse<MessageResponse>) => {
					resolve(response.data.data);
				})
				.catch(async (error: AxiosError) => {
					reject(error);
				});
		});
	}
}

export default MessageService;
