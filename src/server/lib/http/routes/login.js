module.exports = function(router,app,passport){

    var request = require('request');

    function parseCookies(request) {
        var list = {},
            rc = request.headers.cookie;

        rc && rc.split(';').forEach(function(cookie) {
            var parts = cookie.split('=');
            list[parts.shift().trim()] = decodeURI(parts.join('='));
        });

        return list;
    }

    var auth = function(req, res, next) {
        if (!req.isAuthenticated())
            res.sendStatus(401);
        else
            next();
    };

    router.get('/login/callback', function(req, res) {
        //In the event of back call redirect to login
        res.redirect('/login');
    });

    router.post('/login/callback', function(req,res,next){
        passport.authenticate('saml', function(err,user,info){

            if (err){
                console.log(err);
                return res.redirect('/login');   
            } 
            req.logIn(user, function(err) {
                if (err) { return next(err); };
                console.log("req --->> " + req);
                var cookies = parseCookies(req);
                console.log("Cookies --->> " + cookies.iPlanetDirectoryPro);
                req.session.ssotoken = cookies.iPlanetDirectoryPro;
                console.log("iPlanetDirectoryPro Cookie --->> " + cookies.iPlanetDirectoryPro);
                console.log("SSO Token --->> " + req.session.ssotoken);
                res.user = user;             
                return res.redirect('/');
            });
            
        })(req,res,next);

    });


    router.get('/login',
        passport.authenticate('saml', {
            failureRedirect: '/login',
            failureFlash: true
        }),
        function(req, res) {
            res.redirect('/');
        }
    );

    router.get('/logout', auth,
        function(req, res) {
            console.log("Clicked on Logout Button");
            console.log("SSO Token: " + req.session.ssotoken);
            var ssotoken = req.session.ssotoken;
            if (ssotoken) {
 
                var https = require('https');
                var openreq;

                config = app.config;

                var options = {
                    host: config.app.iamserver,
                    port: 443,
                    path: "/openam/json/sessions/?_action=logout&realm=ActiveDirectory",
                    method: "POST",
                    headers: {
                        'iPlanetDirectoryPro': ssotoken,
                        'Content-Type': 'application/json'
                    }
                };

                openreq = https.request(options, function(jsonres) {
                    req.session.destroy();
                    res.status(200).send();
                });

                //openreq.on('end', function(){

                //})


                openreq.on('socket', function(socket) {
                    socket.setTimeout(1000);
                    socket.on('timeout', function() {
                        openreq.abort();
                        if (req.session) {
                            req.session.destroy();
                        }
                    });
                });

                openreq.on('error', function(err) {
                    if (err.code === "ECONNRESET") {
                        res.status(500).send(0);
                    }
                });

                openreq.end();
            }
        }
    );

    router.get('/sso/metadata', function(req, res) {
        res.type('application/xml')
        res.status(200).send(samlstrategy.getsamlMetadata())
    });

    router.get('/loggedin', function(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    });


};