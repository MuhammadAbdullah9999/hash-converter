# import nmap

# nm = nmap.PortScanner()
# nm.scan('127.0.0.1', '21-443')
# print(nm.command_line())

import socket

def get_ip_address(domain):
    try:
        ip_address = socket.gethostbyname(domain)
        return ip_address
    except socket.gaierror:
        return None

# Example usage:
domain_name = "example.com"
ip_address = get_ip_address(domain_name)
if ip_address:
    print(f"The IP address of {domain_name} is: {ip_address}")
else:
    print(f"Could not resolve the IP address for {domain_name}")
