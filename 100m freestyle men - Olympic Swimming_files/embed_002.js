var OLYMPIC_CHANNEL = OLYMPIC_CHANNEL || {};
var urlVideoPath = "video/syndicated/detail/";
var urlPlaylistPath = "video/syndicated/playlist/";


OLYMPIC_CHANNEL.Syndicated = function (t, e) {

  this.contentID = t,
    this.options = e,



    this.target = document.getElementById(this.options.id),
    this.origin = window._ocs_origin || "https://www.olympicchannel.com/";

      if (!!this.options.language && (!!window._ocs_origin==false)) {

        this.origin = this.origin + this.options.language + "/";

    }

      this.origin = this.origin + (!!this.options.type && this.options.type.toLowerCase() == "playlist" ? urlPlaylistPath : urlVideoPath),
        this.setupIframe(t);
},
    //OLYMPIC_CHANNEL.Syndicated.prototype.authenticatePartner = function () {
    //var t, e = new XMLHttpRequest;
    //e.open("GET", this.origin + "/en/api/syndicated/" + this.contentID + "/", !0), e.onload = function () {
    //  200 === e.status && (t = JSON.parse(e.responseText), this.setupIframe(t.url))
    //}.bind(this), e.send()
    //},


    OLYMPIC_CHANNEL.Syndicated.prototype.setupIframe = function (t) {

        //t = t + "/?partner_name=NOC_New_Zealand",
        var pn = "test";
        var pd = window.location.hostname;

        if (window.location.hostname.indexOf("deltatre") === -1 && window.location.hostname.indexOf("localhost") === -1) {

            pn = window.location.hostname.replace(".", "_");

        }

        t = t + "/?partner_name=" + pn;

        if (this.options.partnerdomain) {

            pd = this.options.partnerdomain;

        }

        t = t + "&partnerdomain=" + pd;

        if (this.options.type) {

            t = t + "&type=" + this.options.type;

        }

        this.iframe = document.createElement("iframe"),
            this.iframe.setAttribute("frameBorder", "0"),
            this.iframe.setAttribute("scrolling", "no"),
            this.iframe.setAttribute("allowfullscreen", "true"),
            this.iframe.setAttribute("width", this.options.dimensions[0]),
          this.iframe.setAttribute("height", this.options.dimensions[1] + (this.options.playlist || (!!this.options.type && this.options.type.toLowerCase()=="playlist") ? 145 : 0)),
            this.iframe.src = this.origin + t, this.renderIframe();
    },
    OLYMPIC_CHANNEL.Syndicated.prototype.renderIframe = function () {

        "SCRIPT" === this.target.tagName ? this.target.parentNode.insertBefore(this.iframe, this.target) : this.target.appendChild(this.iframe);

    };