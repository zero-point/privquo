
<!DOCTYPE html>
<html lang="en" dir="ltr"
      class="
">
  <head>
    
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0;">
    <title>Twitter / Authorize an application</title>

    <link href="https://abs.twimg.com/a/1423005343/css/tfw/intents_rosetta.bundle.css" media="screen" rel="stylesheet" type="text/css" />
    <!--[if (IEMobile) & (lt IE 9)]>
    <link href="https://abs.twimg.com/a/1423005343/css/tfw/phoenix/intents_phoenix_iemobile.bundle.css" media="screen" rel="stylesheet" type="text/css" />
    <![endif]-->

      
  <meta name="mswebdialog-title" content="Twitter">
  <meta name="mswebdialog-logo" content="https://abs.twimg.com/favicons/win8-auth-60.png">
  <meta name="mswebdialog-header-color" content="#202020">
  <meta name="mswebdialog-newwindowurl" content="*">


    <style type="text/css">
      html { display:none; }
    </style>
    <noscript>
      <style type="text/css">
        html { display: block; }
      </style>
    </noscript>
    <!--[if IEMobile & lt IE 9]>
    <style type="text/css">
      html { display: block; }
    </style>
    <![endif]-->
  </head>
  <body class="oauth
 write
 tfw
 en
 logged-in
 
 
 noloki
">

    <div id="header" role="banner">
      <div class="bar">
        <h1 class="logo"><a href="https://twitter.com/home" class="alternate-context">Twitter</a></h1>

        
        <div id="session" role="navigation">
          <h2 class="current-user"><a href="https://twitter.com/IrinaPreda" title="Irina Preda">
            <img src="https://pbs.twimg.com/profile_images/515202587448971265/c9SlduYL_mini.png" alt="" width="24" height="24">
            <span class="name">IrinaPreda</span>
          </a></h2>
          <div class="user-menu">
            <div class="dropdown-caret">
              <span class="caret-outer"></span>
              <span class="caret-inner"></span>
            </div>
            <h3 class="session">User Management</h3>
            <ul class="session">
              <li class="view-profile"><a href="https://twitter.com/IrinaPreda">View Profile</a></li>
              <li class="new"><a href="/intent/tweet">New Tweet</a></li>
              <li class="help break-before"><a href="/help">Help</a></li>
              <li class="settings break-before"><a href="/settings">Settings</a></li>
              
                <li class="signout"><form action="https://twitter.com/logout" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="05b27954ab321a96a08830d2ec5c5d40171ac4ff" /></div>
                    <input id="referer" name="referer" type="hidden" value="/oauth/authorize?oauth_token=3QkTjqtA3BmggX9yBnTz5byUQARGsuRK" />
                    <input type="submit" class="textual link" value="Sign out">
                </form></li>
              
            </ul>
          </div>
        </div>
        
      </div>
    </div>

    <div id="bd" role="main">
      






<div class="auth">
  <h2>Authorize Development to use your account?</h2>

  
<div class="app-info" role="content-info" tabindex="0">
  <h3>
    <img alt="" class="app-icon" src="https://pbs.twimg.com/client_application_images/330/avatar.png" title="Development by Abraham Williams" />
    Development
  </h3>
  <dl>
    <dt class="dev">Developer</dt>
    <dd class="dev">By Abraham Williams</dd>
    <dt class="url">Application URL</dt>
    <dd class="url">twitteroauth.com</dd>
    <dt class="notes">About this app</dt>
    <dd class="notes"><p>Demo application for the TwitterOAuth PHP library.</p></dd>

  </dl>
</div>



  <form action="https://api.twitter.com/oauth/authorize" id="oauth_form" method="post"><div style="margin:0;padding:0"><input name="authenticity_token" type="hidden" value="05b27954ab321a96a08830d2ec5c5d40171ac4ff" /></div>
    
    <input id="oauth_token" name="oauth_token" type="hidden" value="3QkTjqtA3BmggX9yBnTz5byUQARGsuRK" />        

    <fieldset class="buttons">
      <legend>Authorize Development access to use your account?</legend>
      <input type="submit" value="Authorize app" class="submit button selected" id="allow">
      <input class="submit button" id="cancel" name="cancel" type="submit" value="Cancel" />

    </fieldset>
</form>  <div class="permissions allow">
  <p><strong>This application will be able to:</strong></p>
  <ul>
    
    
      <li>Read Tweets from your timeline.</li>
    
    
    <li>See who you follow, and follow new people.</li>
    <li>Update your profile.</li>
    <li>Post Tweets for you.</li>


    
    

    
  </ul>
</div>

  <div class="permissions deny">
  <p><strong>Will not be able to:</strong></p>
  <ul>

    
    
    <li>Access your direct messages.</li>
    

    

    <li>See your Twitter password.</li>
  </ul>
</div>

  
</div>



    </div>

    

    
    <div class="footer" role="navigation"><div id="ft">
      
<p class="tip">You can revoke access to any application at any time from the <a href="https://twitter.com/settings/applications">Applications tab</a> of your Settings page.</p>
<p><small>By authorizing an application you continue to operate under <a href="https://twitter.com/tos">Twitter's Terms of Service</a>. In particular, some usage information will be shared back with Twitter. For more, see our <a href="https://twitter.com/privacy">Privacy Policy</a>.</small></p>

    </div></div>
    

    <script type="text/javascript" charset="utf-8">
      var twttr = twttr || {};
      twttr.form_authenticity_token = '05b27954ab321a96a08830d2ec5c5d40171ac4ff';
      if (self == top) {
        document.documentElement.style.display = 'block';
      }
    </script>

    <script src="https://abs.twimg.com/a/1423005343/tfw/loadrunner.js" data-main="tfw/intents/main" data-path="https://abs.twimg.com/a/1423005343/tfw" type="text/javascript"></script>

    
    <script type="text/javascript" charset="utf-8">
      using(
  'imports/jquery',
function($) {
  $('a').each(function (i, link) {
    
    if ($(link).hasClass('register')) return;
    
    link.target = "_blank";
  });
});

using('imports/jquery', function($) {
  $('.app-info').click(function() {
    $(this).toggleClass('expanded');
  });
});
using('imports/jquery', function($) {
  // Adjust window sizes when opening the OAuth flow in a new window.
  // NB. Pleasepleaseplease don't invoke OAuth flows in new window without a
  //     visible address bar/SSL verification and scroll bar support. Hugs! ;-)
  if(window.opener) {
    $(function() {
      buffer = 170;
      content = document.getElementById('bd');
      vph = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      browser = window.outerHeight || vph + 60;
      
      vpw = window.innerWidth || document.documentElement.clientWidth + 29 || document.body.clientWidth + 29;
      
      if(vph < content.offsetHeight + buffer) {
        window.resizeTo(vpw, content.offsetHeight + (browser - vph) + buffer);
      }
    });
  }
});

    </script>
    
    


  </body>
</html>

