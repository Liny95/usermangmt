const API_URL = "http://localhost:5000/users";

async function addUser() {
  const nameInput = document.getElementById("name");
  const name = nameInput.value.trim();

  if (!name) {
    alert("Please enter a name");
    return;
  }

  await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name })
  });

  nameInput.value = "";
  alert("User added successfully");
}

async function loadUsers() {
  const userList = document.getElementById("userList");
  if (!userList) return;

  const res = await fetch(API_URL);
  const users = await res.json();

  userList.innerHTML = "";

  users.forEach(user => {
    const li = document.createElement("li");
    li.textContent = user.name;
    userList.appendChild(li);
  });
}

window.onload = loadUsers;
