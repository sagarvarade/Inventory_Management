package com.inventoryManager.warehouse.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.inventoryManager.warehouse.beans.Warehouse;
import com.inventoryManager.warehouse.service.WarehouseService;

@RestController
public class WarehouseController {

	@Autowired
	private WarehouseService wareService;

	@PostMapping(path = "createwarehouse", 
    consumes = MediaType.APPLICATION_JSON_VALUE, 
    produces = MediaType.APPLICATION_JSON_VALUE)
	public String createWarehouse(@RequestBody Warehouse warehouse) {
		System.out.println(warehouse);
		wareService.createWareHouse(warehouse);
		return "Warehouse Created";
	}
}
