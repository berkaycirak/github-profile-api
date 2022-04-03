//Initialize github class
const github = new GitHub();
//Initialize UI class
const ui = new UI();

const searchUser = document.getElementById("searchUser");

searchUser.addEventListener("keyup", e => {
  const userText = e.target.value;
  if (userText !== "") {
    //Make http call
    github.getUser(userText).then(data => {
      if (data.profile.message === "Not Found") {
        //Show alert
        ui.showAlert("User not found", "alert alert-danger ");
      } else {
        //Show Profile
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  } else {
    ui.clearProfile();
  }

  e.preventDefault();
});
