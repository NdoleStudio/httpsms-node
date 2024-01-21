export type MessageSendRequest = {
	/** @example "This is a sample text message" */
	content: string;
	/** @example "+18005550199" */
	from: string;
	/**
	 * RequestID is an optional parameter used to track a request from the client's perspective
	 * @example "153554b5-ae44-44a0-8f4f-7bbac5657ad4"
	 */
	request_id?: string;
	/**
	 * SendAt is an optional parameter used to schedule a message to be sent at a later time
	 * @example "2022-06-05T14:26:09.527976+03:00"
	 */
	send_at?: string;
	/** @example "+18005550100" */
	to: string;
	/** @example false */
	encrypted: boolean;
};

export type MessageResponse = {
	data: Message;
	/** @example "message added to queue" */
	message: string;
	/** @example "success" */
	status: string;
};

export enum Sim {
	SIM1 = 'SIM1',
	SIM2 = 'SIM2',
}

export type Message = {
	/** @example false */
	can_be_polled: boolean;
	/** @example "+18005550100" */
	contact: string;
	/** @example "This is a sample text message" */
	content: string;
	/** @example false */
	encrypted: boolean;
	/** @example "2022-06-05T14:26:02.302718+03:00" */
	created_at: string;
	/** @example "2022-06-05T14:26:09.527976+03:00" */
	delivered_at: string;
	/** @example "2022-06-05T14:26:09.527976+03:00" */
	expired_at: string;
	/** @example "2022-06-05T14:26:09.527976+03:00" */
	failed_at: string;
	/** @example "UNKNOWN" */
	failure_reason: string;
	/** @example "32343a19-da5e-4b1b-a767-3298a73703cb" */
	id: string;
	/** @example "2022-06-05T14:26:09.527976+03:00" */
	last_attempted_at: string;
	/** @example 1 */
	max_send_attempts: number;
	/** @example "2022-06-05T14:26:09.527976+03:00" */
	order_timestamp: string;
	/** @example "+18005550199" */
	owner: string;
	/** @example "2022-06-05T14:26:09.527976+03:00" */
	received_at: string;
	/** @example "153554b5-ae44-44a0-8f4f-7bbac5657ad4" */
	request_id: string;
	/** @example "2022-06-05T14:26:01.520828+03:00" */
	request_received_at: string;
	/** @example "2022-06-05T14:26:09.527976+03:00" */
	scheduled_at: string;
	/** @example "2022-06-05T14:26:09.527976+03:00" */
	scheduled_send_time: string;
	/** @example 0 */
	send_attempt_count: number;
	/**
	 * SendDuration is the number of nanoseconds from when the request was received until when the mobile phone send the message
	 * @example 133414
	 */
	send_time: number;
	/** @example "2022-06-05T14:26:09.527976+03:00" */
	sent_at: string;
	/**
	 * SIM is the SIM card to use to send the message
	 * * SMS1: use the SIM card in slot 1
	 * * SMS2: use the SIM card in slot 2
	 * * DEFAULT: used the default communication SIM card
	 * @example "DEFAULT"
	 */
	sim: Sim;
	/** @example "pending" */
	status: string;
	/** @example "mobile-terminated" */
	type: string;
	/** @example "2022-06-05T14:26:10.303278+03:00" */
	updated_at: string;
	/** @example "WB7DRDWrJZRGbYrv2CKGkqbzvqdC" */
	user_id: string;
};
