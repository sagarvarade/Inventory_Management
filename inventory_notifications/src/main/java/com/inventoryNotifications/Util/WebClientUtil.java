package com.inventoryNotifications.Util;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClient.RequestHeadersUriSpec;

@Component
public class WebClientUtil {

	public RequestHeadersUriSpec<?> getWebClient() {
		WebClient client = WebClient.create();
		return client.get();
	}
}
