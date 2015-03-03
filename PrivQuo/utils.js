var DigitalShadow = DigitalShadow || {};

DigitalShadow.Utils = (function(){

    Array.prototype.indexOf = Array.prototype.indexOf || function (searchElement /*, fromIndex */ ) {
        if (this === 0 || this === null) {
            throw new TypeError();
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (len === 0) {
            return -1;
        }
        var n = 0;
        if (arguments.length > 0) {
            n = Number(arguments[1]);
            if (n !== n) { // shortcut for verifying if it's NaN
                n = 0;
            } else if (n !== 0 && n !== window.Infinity && n !== -window.Infinity) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
        }
        if (n >= len) {
            return -1;
        }
        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
        for (; k < len; k++) {
            if (k in t && t[k] === searchElement) {
                return k;
            }
        }
        return -1;
    };


    String.prototype.repeat = String.prototype.repeat || function (times) {
        var result = "";
        for (var i=0; i<times; ++i) {
            result += this;
        }
        return result;
    };

    String.prototype.hashCode = function () {
        var hash = 0;
        if (this.length == 0) return hash;
        for (i = 0; i < this.length; i++) {
            var c = this.charCodeAt(i);
            hash = hash % 16777216;
            hash = ((hash<<5)-hash)+c;
            hash = hash & 0xffffffff; // Convert to 32bit integer
        }
        return hash;
    };

    String.prototype.capitalize = function() {
        return this.substr(0, 1).toUpperCase() + this.substr(1);
    };

    Number.prototype.withCommas = String.prototype.withCommas = function () {
        var x = this.toString();
        var pattern = /(-?\d+)(\d{3})/;
        while (pattern.test(x)) {
            x = x.replace(pattern, "$1,$2");
        }
        return x;
    }

    Object.keys = Object.keys || (function () {
        var hasOwnProperty = Object.prototype.hasOwnProperty,
            hasDontEnumBug = !{toString:null}.propertyIsEnumerable("toString"),
            DontEnums = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ],
            DontEnumsLength = DontEnums.length;

        return function (o) {
            if (typeof o != "object" && typeof o != "function" || o === null)
                throw new TypeError("Object.keys called on a non-object");

            var result = [];
            for (var name in o) {
                if (hasOwnProperty.call(o, name))
                    result.push(name);
            }

            if (hasDontEnumBug) {
                for (var i = 0; i < DontEnumsLength; i++) {
                    if (hasOwnProperty.call(o, DontEnums[i]))
                        result.push(DontEnums[i]);
                }
            }

            return result;
        };
    })();

    function _pipe (required, callback) {
        this.required = required;
        this.callback = callback;
        this.filled = {};
    };

    _pipe.prototype.fill = function (key, value) {
        this.filled[key] = value;
        var ready = true;
        for (var i=0; i<this.required.length; ++i) {
            var k = this.required[i];
            if (!(k in this.filled)) {
                ready = false;
            }
        }
        if (ready) {
            this.callback(this.filled);
        }
    };

    var _normalize = function _normalize(text, replacement, characters) {
        if (replacement === undefined) replacement = '_';
        characters = characters || new RegExp("[^A-Za-z0-9]+", "g");
        var result = text.toLowerCase().replace(characters, replacement);
        if (text.length > 233) {
            result = text.substr(0, 200) + '_' + Math.abs(text.substr(200).hashCode());
        }
        return result;
    },

    _addZero = function _addZero(x) {
        return x >= 10 ? x : "0" + x;
    },

    _showDate = function _showDate() {
        var d = new Date(),
            date = d.getDate(),
            month = d.getMonth() + 1,
            year = d.getFullYear(),
            hour = d.getHours(),
            minute = d.getMinutes(),
            second = d.getSeconds();

        $('#shadow-date').text(""+_addZero(month)+"."+_addZero(date)+"."+year);
        $('#shadow-time').text(""+_addZero(hour)+":"+_addZero(minute)+"."+_addZero(second));
    },

    _initFacebook = function _initFacebook() {
        FB.init({
            appId       : 320596031475524,           // App ID from the app dashboard
            channelUrl  : '/channel.php',  // Channel file for x-domain comms
            status      : true,                         // Check Facebook Login status
            xfbml       : false,                        // Look for social plugins on the page
            cookie      : true,
            oauth       : true,
            frictionlessRequests: true
        });
    },

    _runFacebook = function _runFacebook(callback) {

        if (FB.getAccessToken()) {

            callback();

        } else {

            FB.getLoginStatus(function (response) {

                if (response.status === 'connected') {
                    callback();
                } else {
                    window.location = '/';
                }

            });

        }
    },

    // generously taken from http://stackoverflow.com/questions/3883342/add-commas-to-a-number-in-jquery
    _commaSeparateNumber = function _commaSeparateNumber(val){
        while (/(\d+)(\d{3})/.test(val.toString())){
            val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
        }
        return val;
    },

    // Test for touch device
    // See http://modernizr.github.io/Modernizr/touch.html
    // See http://msdn.microsoft.com/en-us/library/windows/apps/hh779855.aspx
    _isTouchDevice = function _isTouchDevice () {
        return ('createTouch' in document || navigator.msMaxTouchPoints) ? true : false;
    },

    _transitionEndEvent = function _transitionEndEvent() {

        var map = {
                'WebkitTransition' : 'webkitTransitionEnd',
                'OTransition' : 'oTransitionEnd',
                'transition' : 'transitionend'
            },
            el = document.createElement('p');

        for (var transition in map) {

            if (null != el.style[transition]) {
                return map[transition];
            }

        }

        el = null;

    };

    return {
        addZero                 : _addZero,
        commaSeparateNumber     : _commaSeparateNumber,
        initFacebook            : _initFacebook,
        normalize               : _normalize,
        pipe                    : _pipe,
        runFacebook             : _runFacebook,
        showDate                : _showDate,
        isTouchDevice           : _isTouchDevice,
        transitionEnd           : _transitionEndEvent
    }
})();

// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel

// MIT license

(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());