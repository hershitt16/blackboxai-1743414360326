from http.server import SimpleHTTPRequestHandler
from socketserver import TCPServer
import webbrowser
import threading

PORT = 8000

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=".", **kwargs)

def open_browser():
    webbrowser.open_new(f"http://localhost:{PORT}")

def run_server():
    with TCPServer(("", PORT), Handler) as httpd:
        print(f"\nServer running at http://localhost:{PORT}")
        print("Press Ctrl+C to stop the server\n")
        threading.Thread(target=open_browser).start()
        httpd.serve_forever()

if __name__ == "__main__":
    run_server()