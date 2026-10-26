const API_URL = "https://jsonplaceholder.typicode.com/users";
export async function fetchUsers() {
  const response = await fetch(API_URL);
  // fetch() does not reject for HTTP errors such as 404 or 500.
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const users = await response.json();
  return users;
}
