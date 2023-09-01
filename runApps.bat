@echo off
start /b "1" java -jar deployDirectory/apigateway-1.1.1.jar
timeout 5 > NUL 
pause
