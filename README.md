# 401 Lab 12 server

# Name of Lab
CAPS lab 12
## Name: Sunny lee 
### Setup
#### ENV Requirements
No .env files used 
#### Running the App
This application was node driven. The server will listen for events from the client using the `on`  while the se4rver emits data using the `emit`. This application as a whole simulates a vendor that will request a payload to be picked up, then a driver will pick up the payload and send out "in-transit" message and then will send out a "delivered" message when delivered to the vendor. The server will act as a hub for all of the processes. 
## UML
![UML](https://user-images.githubusercontent.com/5589323/123898081-8002a980-d919-11eb-8f47-d608195cbd44.jpg)
