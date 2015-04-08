var endpoints = {
    ServiceEndpointUrl:  "ServiceHost",
    IdpOauthEndpointUrl: "https://localhost/OSCid/issue/oauth2/authorize"
};
    var oAuthConfig = {
        client_id: "Sample_Client",
        scope: "urn:Sample",
        response_type: "token",
        redirect_uri: "https://localhost/Sample/home.html"
    }


    if (!Array.prototype.indexOf) {
        Array.prototype.indexOf = function (obj, start) {
            for (var i = (start || 0), j = this.length; i < j; i++) {
                if (this[i] === obj) { return i; }
            }
            return -1;
        }
    }

$.ajaxPrefilter(function (options) {
    options.headers = { 'Authorization': 'Bearer ' + readCookie('CCAuth') };
});



