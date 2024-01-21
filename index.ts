import axios, {type AxiosInstance} from 'axios';
import MessageService from './src/message-service.js';
import CipherService from './src/cipher-service.js';

class HttpSms {
	public messages: MessageService;
	public cipher: CipherService;

	private readonly client: AxiosInstance;

	constructor(apiKey: string, baseUrl = 'https://api.httpsms.com') {
		this.client = axios.create({
			// eslint-disable-next-line  @typescript-eslint/naming-convention
			baseURL: baseUrl,
			headers: {
				'x-api-key': apiKey,
			},
		});
		this.messages = new MessageService(this.client);
		this.cipher = new CipherService();
	}
}

export default HttpSms;
