from flask import Flask
app = Flask(__name__)

@app.route('/api')
def hello_api():
    return {'message': 'Hello from Flask!'}

if __name__ == '__main__':
    app.run(port=5000)
