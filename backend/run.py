from flask import Flask, request, jsonify
from flask_cors import CORS
import hashlib
import passlib.hash
import json
import logging
import nmap_module  # Import the newly created nmap module

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(message)s')

RAINBOW_TABLE_FILE = 'rainbow_table.json'

# Load rainbow table from file
def load_rainbow_table():
    try:
        with open(RAINBOW_TABLE_FILE, 'r') as file:
            return json.load(file)
    except FileNotFoundError:
        return {}

# Save rainbow table to file
def save_rainbow_table(rainbow_table):
    with open(RAINBOW_TABLE_FILE, 'w') as file:
        json.dump(rainbow_table, file)

rainbow_table = load_rainbow_table()

def hash_text(text, algorithm):
    if algorithm == 'MD5':
        hashed = hashlib.md5(text.encode()).hexdigest()
    elif algorithm == 'SHA1':
        hashed = hashlib.sha1(text.encode()).hexdigest()
    elif algorithm == 'SHA256':
        hashed = hashlib.sha256(text.encode()).hexdigest()
    elif algorithm == 'SHA512':
        hashed = hashlib.sha512(text.encode()).hexdigest()
    elif algorithm == 'MySQL':
        hashed = hashlib.sha1(hashlib.sha1(text.encode()).digest()).hexdigest()
    elif algorithm == 'MD5 Wordpress':
        hashed = passlib.hash.md5_crypt.hash(text)
    elif algorithm == 'MD5 phpBB':
        hashed = passlib.hash.md5_crypt.hash(text)
    elif algorithm == 'BCRYPT':
        hashed = passlib.hash.bcrypt.hash(text)
    elif algorithm == 'MD5-Crypt':
        hashed = passlib.hash.md5_crypt.hash(text)
    elif algorithm == 'Oracle':
        hashed = hashlib.sha1(text.encode()).hexdigest()
    elif algorithm == 'SHA-Crypt':
        hashed = passlib.hash.sha256_crypt.hash(text)
    elif algorithm == 'PHPS':
        hashed = passlib.hash.phpass.hash(text)  # Use php pass hashing from passlib
    else:
        return None
    
    # Store the hashed value in the rainbow table with its algorithm
    rainbow_table[hashed] = {'plaintext': text, 'algorithm': algorithm}
    save_rainbow_table(rainbow_table)
    return hashed

def unhash_text(text, algorithm):
    for key, value in rainbow_table.items():
        if key == text and value['algorithm'] == algorithm:
            return value['plaintext']
    return 'Not found in rainbow table'

def analyze_hash(hash_str):
    hash_lengths = {
        'MD5': 32,
        'SHA1': 40,
        'SHA256': 64,
        'SHA512': 128,
        'BCRYPT': 60
    }
    
    potential_algorithms = [algo for algo, length in hash_lengths.items() if len(hash_str) == length]
    
    if potential_algorithms:
        return potential_algorithms
    else:
        return ['Unknown']

@app.before_request
def log_request_info():
    app.logger.info('Headers: %s', request.headers)
    app.logger.info('Body: %s', request.get_data())

@app.route('/')
def home():
    print("working")
    return jsonify({'message': 'Server is working'})

@app.route('/hash', methods=['POST'])
def hash_endpoint():
    data = request.json
    input_text = data['inputText']
    hash_type = data['hashType']
    hashed_text = hash_text(input_text, hash_type)
    if hashed_text:
        return jsonify({'outputText': hashed_text})
    else:
        return jsonify({'error': 'Unsupported hash type'}), 400

@app.route('/unhash', methods=['POST'])
def unhash_endpoint():
    data = request.json
    input_text = data['inputText']
    hash_type = data['hashType']
    unhashed_text = unhash_text(input_text, hash_type)
    return jsonify({'outputText': unhashed_text})

@app.route('/analyze', methods=['POST'])
def analyze_endpoint():
    data = request.json
    input_text = data['inputText']
    potential_algorithms = analyze_hash(input_text)
    return jsonify({'outputText': potential_algorithms})

@app.route('/scan', methods=['POST'])
def scan_endpoint():
    data = request.json
    target = data['target']
    
    # Convert domain to IP address
    target_ip = nmap_module.domain_to_ip(target)
    
    if not target_ip:
        return jsonify({'error': 'Invalid domain name'}), 400
    
    # Perform nmap scan
    scan_data = nmap_module.scan_target(target_ip)
    
    if 'error' in scan_data:
        return jsonify(scan_data), 500
    else:
        return jsonify({'ip': target_ip, 'scanData': scan_data})

if __name__ == '__main__':
    app.run(debug=True)
