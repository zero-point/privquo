var DigitalShadow = DigitalShadow || {};

DigitalShadow.User = {};
DigitalShadow.ExposedData = 1;

DigitalShadow.Cache = {
    'body'    : $(document.body),
    'window'  : $(window),
    'modules' : $('[class^="module"]')
};

DigitalShadow.Geocoder = new google.maps.Geocoder();

DigitalShadow.Data = (function() {

    var _init = function _init() {

        DigitalShadow.User.location = DigitalShadow.User.current_location || DigitalShadow.User.hometown_location;

        if (DigitalShadow.User.location !== null){
            DigitalShadow.ExposedData++;
            DigitalShadow.User.latLng = new google.maps.LatLng(DigitalShadow.User.location.latitude, DigitalShadow.User.location.longitude) || null;
        }

        _addTrackingEvents();

    },

    _addTrackingEvents = function _addTrackingEvents() {

        // Header & footer glitch, left promo button
        $('.glitch, .promo-left').on('click', function(e){
            _gaq.push(['_trackEvent', 'Links', 'click_outbound', 'WatchDogs_watchdogs.com-en-US']);
        });

        // Invite your friends button
        $('.invite-btn').on('click', function(e) {
            _gaq.push(['_trackEvent', 'Social', 'facebook', 'WatchDogs_invite-friends.com-en-US']);
        });

        // Trailer promo button
        $('.promo-right').on('click', function(e) {
            _gaq.push(['_trackEvent', 'Video', 'start', 'WatchDogs_watch_dogs-exposed-trailer-en-US']);
        });

        $('.sharing, .sharing-alt, .sharing-footer').on('click', 'a', function(e) {
            e.preventDefault();
            _trackSocialShare(e);
        });

    },

    _trackSocialShare = function _trackSocialShare(e) {

        var target = $(e.target),
            className = target.attr('class'),
            parent = target.parents('.module'),
            socialPlatform,
            sectionName,
            parentName;

        if (parent.length) {
            sectionName = parent.find('header h1').text(),
            parentName = sectionName.replace("'", "").replace(/ /g, "_").toLowerCase();
        } else {
            parentName = 'footer';
        }

        if (className === 'share-fb') {
            socialPlatform = 'facebook';
        } else if (className === 'share-tw') {
            socialPlatform = 'twitter';
        } else if (className.indexOf('share-gp') != -1) {
            socialPlatform = 'google+';
        }

        _gaq.push(['_trackEvent', 'Social', socialPlatform, 'WatchDogs_' + parentName + '-en-US']);

    },

    _runQuery = function _runQuery(query, callback) {
        FB.api("/fql?q="+encodeURIComponent(query), function (response) {
            /*if (console && console.log){
                console.log('QUERY:', query);
                console.log('RESPONSE:', response);
            }*/
            callback(response);
        });
    },

    _runMultiQuery = function _runMultiQuery(query, callback){
        FB.api('/fql', {
            q: query,
        },  function (response) {
            /*if (console && console.log){
                console.log('QUERY:', query);
                console.log('RESPONSE:', response);
            }*/
            callback(response);
        });
    };

    return {
        init : _init,
        runMultiQuery : _runMultiQuery,
        runQuery : _runQuery
    };
})();