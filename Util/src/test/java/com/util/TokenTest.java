package com.util;

import org.junit.jupiter.api.Test;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;

class TokenTest {

	@Test
	void testGetDecompressToken() throws JsonMappingException, JsonProcessingException {
		String token="eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJyb2xlcyI6IlJPTEVfQURNSU4iLCJlbWFpbCI6ImFAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzYWdhciIsInN1YiI6InNhZ2FyIiwiaWF0IjoxNjk1Mjc3MTU3LCJleHAiOjE2OTUyNzg5NTd9.KPQtPGn64Atw55RHnfLuOfUtMS5LRA5I8aKYZhsSujI";
		Token tk=new Token();
		tk.getDecompressToken(token);
	}

}
