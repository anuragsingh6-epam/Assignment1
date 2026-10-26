import { fetchUsers } from "./api.js";

const userList = document.getElementById("user-list");

const status = document.getElementById("status");

const searchInput = document.getElementById("search");

let users = [];

function renderUsers(userData) {
  userList.replaceChildren();

  if (userData.length === 0) {
    status.textContent = "No users found.";

    return;
  }

  status.textContent = `Showing ${userData.length} user(s).`;

  const fragment = document.createDocumentFragment();

  userData.forEach((user) => {
    const li = document.createElement("li");

    const name = document.createElement("h3");

    name.textContent = user.name;

    const email = document.createElement("p");

    email.textContent = `Email: ${user.email}`;

    const company = document.createElement("p");

    company.textContent = `Company: ${user.company.name}`;

    li.append(name, email, company);

    fragment.appendChild(li);
  });

  userList.appendChild(fragment);
}

function filterUsers(query) {
  const normalizedQuery = query.trim().toLowerCase();

  return users.filter((user) =>
    user.name.toLowerCase().includes(normalizedQuery),
  );
}

async function initializeApp() {
  status.textContent = "Loading users...";

  try {
    users = await fetchUsers();

    renderUsers(users);
  } catch (error) {
    console.error("Failed to fetch users:", error);

    userList.replaceChildren();

    status.textContent = "Unable to load users. Please try again later.";
  }
}

searchInput.addEventListener("input", (event) => {
  const filteredUsers = filterUsers(event.target.value);

  renderUsers(filteredUsers);
});

initializeApp();
