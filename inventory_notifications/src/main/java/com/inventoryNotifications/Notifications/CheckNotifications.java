package com.inventoryNotifications.Notifications;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inventoryNotifications.Util.WebClientUtil;

@RestController
public class CheckNotifications {
	
	@Autowired
	private WebClientUtil webClient;
	
	@GetMapping("/checknotification")
	public String checkNotifications() {
		String response = webClient.getWebClient().uri("http://localhost:8021/helloworld/hello1").retrieve().bodyToMono(String.class).block();
		System.out.println(response);
		return "Hello";
	}
}
