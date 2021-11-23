var http = require("http");
var server = http.createServer(function (request, responce) {
    responce.writeHead(200, { "Content-Type": "text/plain" });

    
    const options = new URL(request.url, `http://${request.headers.host}`);
    let result = "something wrong";
    switch (options.pathname) {
        case "/plus":
            result = NewParameter(options, "+");
            break;
        case "/minus":
            result = NewParameter(options, "-");
            break;
        case "/multiply":
            result = NewParameter(options, "*");
            break;
        case "/divide":
            result = NewParameter(options, "/");
            break;
        default:
            break;
    }
    responce.end(result);   
});


const correct = (options, NameParameter) => {
    let Data = "";
    try {
        Data = options.searchParams.get(NameParameter);
    } catch (err) {
        Data = "error";
    }
    return Data;
};

const NewParameter = (options, last) => {
    const first = correct(options, "first");
    const second = correct(options, "second");
    if (isNaN(first) || isNaN(second)) {
        return "missing or wrong type";
    }
    const result = finalResult(first, second, last);
    switch (options.pathname) {
        case "/plus":
            return `${first} + ${second} = ${result}`;
            break;
        case "/minus":
            return `${first} - ${second} = ${result}`;
            break;
        case "/multiply":
            return `${first} * ${second} = ${result}`;
            break;
        case "/divide":
            return `${first} / ${second} = ${result}`;
            break;
    }
   
}
    

const finalResult = (first, second, last) =>
    eval(`${first} ${last} ${second}`);

server.listen(8000, "127.0.0.1");
console.log("Server running at http://127.0.0.1:8000/");