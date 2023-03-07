//--------------------BUTTONS---------------------------------------

const fortuneBtn = document.getElementById("fortuneBtn");
const userList = document.getElementById("userList");
const feelingsBtn = document.getElementById("feelings");
const createBtn = document.getElementById("createBtn");
const updateBtn = document.getElementById("updateBtn");
const deleteBtn = document.getElementById("deleteBtn");

//--------------------LIST---------------------------------------

const renderUserList = (users) => {
  userList.innerHTML = "";
  users.forEach((user, index) => {
    const li = document.createElement("li");
    li.textContent = `${user.firstName} ${user.lastName}`;
    userList.appendChild(li);
  });
};

axios.get("http://localhost:4000/api/users/").then((res) => {
  renderUserList(res.data);
});

//--------------------FUNCTIONS---------------------------------------

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const getFeelings = () => {
  axios.get("http://localhost:4000/api/feelings/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const createUser = (eventTrigger) => {
  eventTrigger.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  axios
    .post("http://localhost:4000/api/users/", { firstName, lastName })
    .then((res) => {
      axios.get("http://localhost:4000/api/users/").then((res) => {
        renderUserList(res.data);
      });
    });
  form.target.reset();
};

const updateUser = (eventTrigger) => {
  eventTrigger.preventDefault();
  const oldFirstName = prompt("Enter old first name:");
  const oldLastName = prompt("Enter old last name:");
  const firstName = prompt("Enter new first name:");
  const lastName = prompt("Enter new last name:");
  axios
    .put(`http://localhost:4000/api/users/${oldFirstName}/${oldLastName}`, {
      firstName,
      lastName,
    })
    .then((res) => {
      console.log(res.data);
      axios.get("http://localhost:4000/api/users/").then((res) => {
        renderUserList(res.data);
      });
    });
  eventTrigger.target.reset();
};

const deleteUser = () => {
  const firstName = document.getElementById("deleteFirstName").value;
  const lastName = document.getElementById("deleteLastName").value;

  axios
    .delete(`http://localhost:4000/api/users/${firstName}/${lastName}`)
    .then((response) => {
      console.log(response);
      document.getElementById("delete-form").reset();
    })
    .catch((error) => {
      console.log(error);
    });
};

//--------------------TRIGGERS--------------------------------------

//action button setup
fortuneBtn.addEventListener("click", getFortune);
feelingsBtn.addEventListener("change", getFeelings);
createBtn.addEventListener("click", createUser);
updateBtn.addEventListener("click", updateUser);
deleteBtn.addEventListener("click", deleteUser);
