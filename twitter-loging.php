<?php

require "twitteroauth/autoload.php";

use Abraham\TwitterOAuth\TwitterOAuth;

$connection = new TwitterOAuth(zLEUcTuNP73fX7u62dBuAkM4e, DksAXUtTXYizEdOZHrdQTLU0byCrqGyf4KeLDMKv4cTwSAIIeW, $access_token, $access_token_secret);
$content = $connection->get("account/verify_credentials");

function getConnectionWithAccessToken($oauth_token, $oauth_token_secret) {
  $connection = new TwitterOAuth(zLEUcTuNP73fX7u62dBuAkM4e, DksAXUtTXYizEdOZHrdQTLU0byCrqGyf4KeLDMKv4cTwSAIIeW, $oauth_token, $oauth_token_secret);
  return $connection;
}
 
$connection = getConnectionWithAccessToken("297947529-ZV6VS1EfcpO1731kKOtlXlt7MMEOSPptzk9SRbgb", "GIWTqug0RnjCFziVR6BqB0VXTCAtSOsXckHioFiTUaWeW");
$content = $connection->get("statuses/home_timeline");

?>
