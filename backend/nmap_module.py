import nmap
import socket

def domain_to_ip(domain):
    try:
        ip = socket.gethostbyname(domain)
        return ip
    except socket.gaierror:
        return None

def scan_target(target):
    try:
        nm = nmap.PortScanner()
        # Scan common ports with a faster timing template
        nm.scan(target, arguments='-T4 -F')
        scan_data = []
        for host in nm.all_hosts():
            host_info = {
                'ip': host,
                'hostname': nm[host].hostname(),
                'state': nm[host].state(),
                'open_ports': []
            }
            for proto in nm[host].all_protocols():
                lport = nm[host][proto].keys()
                for port in lport:
                    if nm[host][proto][port]['state'] == 'open':
                        port_info = {
                            'port': port,
                            'name': nm[host][proto][port]['name'],
                            'state': nm[host][proto][port]['state'],
                            'product': nm[host][proto][port].get('product', ''),
                            'version': nm[host][proto][port].get('version', '')
                        }
                        host_info['open_ports'].append(port_info)
            scan_data.append(host_info)
        return scan_data
    except nmap.PortScannerError as e:
        return {'error': str(e)}

if __name__ == '__main__':
    result = domain_to_ip('github.com')
    print(result)
    data = scan_target(result)
    print(data)
