const http = require("http");
 const products = [
            {
                id: 1,
                type: "cars",
                price: 25000000
            },
            {
                id: 2,
                type: "cars",
                price: 80000
            },
            {
                id: 3,
                type: "cars",
                price: 50000
            }
        ];


const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {

        res.setHeader("Content-Type", "text/plain");
        res.end("Welcome to Home Page");

    } else if (req.url === "/users" && req.method === "GET") {

        res.setHeader("Content-Type", "text/plain");
        res.end("Users Page");

    } else if (req.url === "/product" && req.method === "GET") {

       

        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(products));

   } else if (req.url === "/product" && req.method === "POST") {

    let body = "";

    req.on("data", (chunk) => {
        body += chunk;
    });

    req.on("end", () => {

        const product = JSON.parse(body);
        //add the new product to the products array
        products.push(product);

        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify({
            message: "Product added successfully",
            product: product
        }));
    });

    } else {

        res.setHeader("Content-Type", "text/plain");
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
