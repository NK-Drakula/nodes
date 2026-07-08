import http from "http";

const PORT = 5000;

const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html")
    response.statusCode = 404;
    response.write("<h1>HELLO WORLD 1</h1>");
    response.end();
});

server.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
})