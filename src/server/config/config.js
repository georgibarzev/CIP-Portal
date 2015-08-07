var fs = require('fs');
var config = {};
config.endpoints = {};
config.endpoints.news = "http://news-app-dev.apps.demo.labs.cf.canopy-cloud.com/"

if(process.env.VCAP_SERVICES) {

 if (process.env.VCAP_APPLICATION.space_name == "test") {
    config.endpoints.news = "http://news-app-test.apps.demo.labs.cf.canopy-cloud.com/"
 }

 if (process.env.VCAP_APPLICATION.space_name == "live") {
    config.endpoints.news = "http://news-app.apps.demo.labs.cf.canopy-cloud.com/"
 }

}

config.express = {}
config.express.host = process.env.VCAP_APP_HOST || '0.0.0.0';
config.express.port = process.env.VCAP_APP_PORT || 3000;

config.passport = {
            strategy : 'saml',
            saml : {
                path : '/login/callback',
                entryPoint : 'https://iam.cip-dev.canopy-cloud.com/openam/SSORedirect/metaAlias/ActiveDirectory/idp',
                logoutUrl : 'https://iam.cip-dev.canopy-cloud.com/openam/IDPSloRedirect/metaAlias/ActiveDirectory/idp',
                issuer : 'passport-saml',
                callbackUrl: 'https://portal.cip-dev.canopy-cloud.com/login/callback',
                cert: fs.readFileSync('../cert/forgerock.pem', 'utf-8')
            }
};

module.exports = config;