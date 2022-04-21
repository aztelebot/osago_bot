var tr = require( "tor-request" )


    tr.TorControlPort.password = 'toreador';

    requestIP();


    tr.setTorAddress('localhost', 9050);


    tr.newTorSession((err) => {
        console.log(err);
        requestIP();
        return;
    });
    console.log(tr.TorControlPort)

function requestIP() {
    tr.request('https://api.ipify.org', function (err, res, body) {
        if (!err && res.statusCode == 200) {
            console.log("Your public (through Tor) IP is: " + body);
        }
    })
}
