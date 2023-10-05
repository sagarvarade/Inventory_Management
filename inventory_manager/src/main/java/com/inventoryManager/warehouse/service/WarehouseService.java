package com.inventoryManager.warehouse.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.inventoryManager.warehouse.beans.Warehouse;
import com.inventoryManager.warehouse.repository.WarehouseRepository;

@Service
public class WarehouseService {

	@Autowired
	private WarehouseRepository wareRepo;

	public void createWareHouse(Warehouse warehouse) {
		wareRepo.save(warehouse);
	}
}
