let istatus = document.querySelector("h2");

let addFriend = document.getElementById("add");
let check = true;

addFriend.addEventListener("click", () => {
  if (check == true) {
    istatus.innerHTML = "friends";
    istatus.style.color = "green";
    addFriend.innerHTML = "Remove";
    addFriend.style.backgroundColor = "#f35555";
    check = false;
  } else {
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
    addFriend.innerHTML = "AddFrient";
    addFriend.style.backgroundColor = "rgb(42, 139, 32)";
    check = true;
  }
});
