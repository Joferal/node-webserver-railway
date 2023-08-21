import http from 'http';

http.createServer((req, res)=>{

    /*
    console.log(req);
    res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    res.writeHead(200,{'Content-Type':'application/csv'});
    */
    //res.writeHead(200,{'Content-Type':'text/plain'});

    /*
    const persona = {
        id:1,
        nombre: 'Fernando'
    };
    */

    /*
    res.write('id; nombre\n');
    res.write('1;  Fernando\n');
    res.write('2;  Monica\n');
    res.write('3;  Mariana\n');
    res.write('4;  Bianca\n');
    */


    //res.write(JSON.stringify(persona) );

    res.write('Hola Mundo');
    res.end();

}).listen(8080);


console.log('Escuchando el puerto', 8080);