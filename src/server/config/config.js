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

module.exports = config;