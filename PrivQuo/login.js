var DigitalShadow = DigitalShadow || {};

DigitalShadow.Login = (function() {

    var _config = {
        'pos'        : 0,
        'total'      : 4,
        'len'        : 0,
        'videosMP4'  : ['Head_SFX.mp4', 'Desire_SFX.mp4', 'Dollar_SFX.mp4', 'Surveillance_SFX.mp4'],
        'videosWebM' : ['Head_SFX.webm', 'Desire_SFX.webm', 'Dollar_SFX.webm', 'Surveillance_SFX.webm'],
        'captions'   : {
                        'primary'   : ['You are not an individual.', 'Algorithms can predict your interests,', 'Your life is measured in gigabytes.', 'You go about your life unaware'],
                        'secondary' : ['You are a data cluster', 'your desires, even your fantasies', 'Data comes at a cost', 'of the Digital Shadow you cast']
                    }
    },

    _cache = {
        'progress' : $('#progress'),
        'vidWrap'  : $('#video-wrap')
    },

    _init = function _init() {

        DigitalShadow.Utils.initFacebook();

        _addEvents();

        if (!DigitalShadow.Utils.isTouchDevice()) {
            _addAdditionalEvents();
        }

    },

    _addEvents = function _addEvents() {

        $('#login-link').on('click', function(e) {
            
            e.preventDefault();

            _gaq.push(['_trackEvent', 'Links', 'click_login', 'WatchDogs_shadow.php-en-US']);

            var $this = $(this);

            FB.login(function (response) {

                if (!response.authResponse) {
                    alert('You must grant permissions to find out your privacy quotient.');
                    return;
                }

                _publishOpenGraphStory($this);

            }, {
                scope: DigitalShadow.Config.permissions
            });

        });

        setTimeout(_revealCaption, DigitalShadow.Config.options.durations.captionTyping);

    },

    _addAdditionalEvents = function _addAdditionalEvents() {

        $('video').on('ended', _nextVideo);
        $('video').on('timeupdate', _progress);

        $('.prev-video').on('click', {'direction' : 'prev'}, _nextVideo);
        $('.next-video').on('click', {'direction' : 'next'}, _nextVideo);

    },

    _nextVideo = function _nextVideo(e) {

        if (e.type === 'click') {
            _gaq.push(['_trackEvent', 'Links', 'click_change_video', 'WatchDogs_' + e.data.direction + '-video-en-US']);
        }

        var vid;

        if (e.type === 'ended' || e.data.direction === 'next') {
            _config.pos = ((_config.pos + 1) < _config.total) ? _config.pos + 1 : 0;
        } else {
            _config.pos = ((_config.pos - 1) < 0) ? _config.total - 1 : _config.pos - 1;
        }

        $('#current-video-index').text('00' + (_config.pos + 1));

        _config.len = 0;
        _cache.vidWrap.find('video').remove();
        _cache.vidWrap.html(
            '<video autoplay>' +
                '<source src="http://static2.cdn.ubi.com/ncsa/watchdogs/digitalshadow/videos/sfx/' + _config.videosMP4[_config.pos] + '" type="video/mp4"></source>' +
                '<source src="http://static2.cdn.ubi.com/ncsa/watchdogs/digitalshadow/videos/sfx/' + _config.videosWebM[_config.pos] + '" type="video/webm"></source>' +
            '</video>');

        vid = _cache.vidWrap.find('video');
        vid.on('ended', _nextVideo);
        vid.on('timeupdate', _progress);

        setTimeout(_revealCaption, DigitalShadow.Config.options.durations.captionTyping);

    },

    _progress = function _progress(e) {

        if (!isNaN(e.target.duration)) {

            var percent = Math.round((e.target.currentTime / e.target.duration) * 100);

            _cache.progress.css('width', percent + '%');

        }

    },

    _publishOpenGraphStory = function _publishOpenGraphStory(referringTag) {

        FB.api(
            'me',
            'get',
            function(response){
                var gender;
                switch(response.gender){
                    case 'male':
                        gender = 'his';
                        break;
                    case 'female':
                        gender = 'her';
                        break;
                    default:
                        gender = 'their';
                        break;
                }
                FB.api(
                    'me/dshadow:hack?user_gender='+gender,
                    'post',
                    {
                        thing: {
                            app_id : '320596031475524',
                            title : 'Digital Shadow',
                            image : 'https://s3.amazonaws.com/zdtest/logo.jpg',
                            description : 'Access your Digital Shadow and see what we see.',
                            type : 'dshadow:thing'
                        }
                    },
                    function(response) {
                        window.location = referringTag.attr('href');
                    }
                );
            }
        );
    },

    _revealCaption = function _revealCaption() {

        _config.len++;

        $('.primary-part span').text(
            _config.captions.primary[_config.pos].substring(0, _config.len)
            + (_config.len < _config.captions.primary[_config.pos].length ? '_' : ' ')
        );

        $('.secondary-part span').text(
            _config.captions.secondary[_config.pos].substring(0, _config.len - _config.captions.primary[_config.pos].length)
            + (_config.len >= _config.captions.primary[_config.pos].length ? '_' : ' ')
        );

        if (_config.len < _config.captions.primary[_config.pos].length + _config.captions.secondary[_config.pos].length) {
            setTimeout(_revealCaption, DigitalShadow.Config.options.durations.captionTyping);
        }

    };

    return {
        init : _init
    };

})();

(function ($, window, undefined) {
    DigitalShadow.Login.init();
})(jQuery, window);
