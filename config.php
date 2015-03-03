<?php
session_start();

require_once 'autoload.php';
use Facebook\FacebookSession;
use Facebook\FacebookRedirectLoginHelper;
use Facebook\FacebookRequest;
use Facebook\FacebookResponse;
use Facebook\FacebookSDKException;
use Facebook\FacebookRequestException;
use Facebook\FacebookAuthorizationException;
use Facebook\GraphObject;
use Facebook\Entities\AccessToken;
use Facebook\HttpClients\FacebookCurlHttpClient;
use Facebook\HttpClients\FacebookHttpable;

FacebookSession::setDefaultApplication( '320596031475524','e23c0c2fd2c673afd7b9e5aaf81bcc49' );

// login helper with redirect_uri
    $helper = new FacebookRedirectLoginHelper('http://ec2-54-173-172-105.compute-1.amazonaws.com/config.php' );

try {
    $session = $helper->getSessionFromRedirect();
} catch( FacebookRequestException $ex ) {
    echo "Facebook error: please retry later.";   // When Facebook returns an error
} catch( Exception $ex ) {
    echo "Internal error: please retry later.";  // When validation fails or other local issues
}

// see if we have a session
if ( isset( $session ) ) {
    // graph api request for user data
    $request = new FacebookRequest( $session, 'GET', '/me' );
    $response = $request->execute();
    // get response
    $graphObject = $response->getGraphObject();
        $fbid = $graphObject->getProperty('id');              // To Get Facebook ID
        $fbfullname = $graphObject->getProperty('name'); // To Get Facebook full name
        $femail = $graphObject->getProperty('email');    // To Get Facebook email ID
        $fbdate = $graphObject->getProperty('birthdate');    // To Get Facebook birthdate ID

    /* ---- Session Variables -----*/
        $_SESSION['FBID'] = $fbid;           
        $_SESSION['FULLNAME'] = $fbfullname;
        $_SESSION['EMAIL'] =  $femail;
        $_SESSION['BIRTHDATE'] =  $fbdate;

    /* ---- header location after session ----*/
    header("Location: index.php");
} else {
    $loginUrl = $helper->getLoginUrl();
    header("Location: ".$loginUrl);
}

    echo "Started profile analysis\n";

    echo "...\n";

// Read the file contents into a string variable,
// and parse the string into a data structure
$str_data = file_get_contents("flare.json");
$data = json_decode($str_data,true);

$chck = 0;
$score = 0;
while($chck < 27){

    $info = "birthdate"; //takes it from fb
    switch ($info) {
        case "birthdate":
            console.log("Birthdate found");
            $data["user"]["Birthdate"][0] = $info;
            $score *= 6.06;
            break;
        case "dietary":
            echo "Dietary lifestyle found";
            $data["user"]["Diet"][0] = $info;
            $score *= 4.96;
            break;
        case "education_history":
            echo "Education history found";
            $data["user"]["Education"][0] = $info;
            $score *= 5.83;
            break;
        case "email":
            echo "Email found";
            $data["user"]["Email"][0] = $info;
            $score *= 6.29;
            break;
        case "employment_history":
            echo "Employment history found";
            $data["user"]["Employment"][0] = $info;
            $score *= 5.65;
            break;
        case "family_connections":
            echo "family_connections found";
            $score *= 6.65;
            break;
        case "favorite_music":
            echo "favorite_music found";
            $score *= 4.52;
            break;
        case "favourite_books":
            echo "favourite_books found";
            $score *= 4.5;
            break;
        case "favourite_games":
            echo "favourite_games found";
            $score *= 4.61;
            break;
        case "favourite_movies":
            echo "favourite_movies found";
            $score *= 4.5;
            break;
        case "first_name":
            echo "first_name found";
            $score *= 5.48;
            break;
        case "fitness_routine":
            echo "fitness_routine found";
            $score *= 5.02;
            break;
        case "friend_list":
            echo "friend_list found";
            $score *= 6.09;
            break;
        case "gender":
            echo "gender found";
            $score *= 4.92;
            break;
        case "hometown":
            echo "hometown found";
            $score *= 5.52;
            break;        
        case "last_name":
            echo "last_name found";
            $score *= 6.37;
            break;
        case "location_local":
            echo "location_local found";
            $score *= 5.86;
            break;
        case "location_timezone":
            echo "location_timezone found";
            $score *= 5.26;
            break;
        case "personal_photographs":
            echo "personal_photographs found";
            $score *= 7.11;
            break;
        case "personal_videos":
            echo "personal_videos found";
            $score *= 6.83;
            break;
        case "political_affiliations":
            echo "political_affiliations found";
            $score *= 5.37;
            break;
        case "private_messages":
            echo "private_messages found";
            $score *= 7.23;
            break;
        case "religious_affiliations":
            echo "religious_affiliations found";
            $score *= 5.49;
            break;
        case "romantic_relationships":
            echo "romantic_relationships found";
            $score *= 6.82;
            break;
        case "sexual_orientation":
            echo "sexual_orientation found";
            $score *= 5.77;
            break;                                 
        default:
            echo "None found";        
    }

    $chck += 1;
    echo "\n";
    echo "...\n";

}
    $fh = fopen("data.json", 'w')
      or die("Error opening output file");
    fwrite($fh, json_encode($data,JSON_UNESCAPED_UNICODE));
    fclose($fh);
    echo "Finished.";
    console.log($score);
    print "Your privacy score is " . $score;

?>

