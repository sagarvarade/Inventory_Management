package com.inventoryNotifications.Notifications;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

@RestController
public class CheckNotifications {
	
	@GetMapping("/checknotification")
	public String checkNotifications() {
		WebClient client = WebClient.create();
		String response = client.get().uri("http://localhost:8021/helloworld/hello1").retrieve().bodyToMono(String.class).block();
		System.out.println(response);
		
		return "Hello";
	}
}
