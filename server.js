const http=require ('http');
const port=4000;

const server=http.createServer((req,res)=>{

    res.end("Harshit Srivastava\n");
});

server.listen(port,(error=>{

    if(error)
    {
        console.log("Error");
    }

    console.log("Server is running on port", port);
}))