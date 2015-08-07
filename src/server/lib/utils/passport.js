var fs = require('fs')

var SamlStrategy = require('passport-saml').Strategy;

var localstrat;

module.exports = function(passport, config) {

    localstrat = new SamlStrategy({
        path: config.passport.saml.path,
        entryPoint: config.passport.saml.entryPoint,
        issuer: config.passport.saml.issuer,
        callbackUrl: config.passport.saml.callbackUrl,
        cert: config.passport.saml.cert 
    }, function(profile, done) {
        done(null, profile);
        }
    );

    passport.serializeUser(function(user, done) {
        done(null, user);
    });

    passport.deserializeUser(function(user, done) {
        done(null, user);
    });

    passport.use(localstrat);
}


module.exports.getsamlMetadata = function() {
    var cert = fs.readFileSync('src/server/cert/certificate.crt', 'utf-8');
    return localstrat.generateServiceProviderMetadata(cert);
}
