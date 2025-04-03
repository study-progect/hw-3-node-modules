import http from "http";

const showCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString()
}

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>WELCOME</h1>");
    }
    else if (req.url === "/time") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1>${showCurrentTime()}</h1>`);
    }
    else if (req.url.startsWith("/hello?name=")) {
        // Извлекаем имя из URL
        const name = req.url.split("name=")[1];
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(`<h1>Привет, ${name}</h1>`);
    }
    else {
        res.writeHead(404, {'Content-Type':'text/html'})
        res.end('<h2 style="color: red">404 Page not a found</h2>');
    }
})

try {
    server.listen(3005, () => {
        console.log("Server listen http://localhost:3005");
    });
} catch (e) {
    console.error(e.message);
}

