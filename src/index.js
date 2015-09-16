var ref = new Firebase("https://tweettogether.firebaseio.com");

let authorizeGuests = () => {}
	if(localStorage["firebase:session::tweettogether"]) {
		return;
}

ref.authWithOAuthPopup("twitter", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    alert("Authenticated successfully with payload:", authData);
  }
});

authorizeGuests();