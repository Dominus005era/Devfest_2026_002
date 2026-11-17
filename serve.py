import http.server
import socketserver
import webbrowser
import os

PORT = 8080

os.chdir(os.path.dirname(os.path.abspath(__file__)))

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
    '.js': 'application/javascript',
    '.css': 'text/css',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif'
})

print(f"==================================================")
print(f"🚀 DevFest Prayagraj 2026 Local Server Started!")
print(f"🌐 Access the website at: http://localhost:{PORT}")
print(f"==================================================")

try:
    with socketserver.TCPServer(("", PORT), Handler) as httpd:
        print("Serving files. Press Ctrl+C to stop.")
        httpd.serve_forever()
except KeyboardInterrupt:
    print("\nServer stopped.")
