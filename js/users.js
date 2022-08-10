const URL_USERS = "https://jsonplaceholder.typicode.com/users";

const users = axios.get(URL_USERS);
const responseAPIAxios = users.then((response) => {
  const data = response.data;
  let body = ``;
  data.map((user) => {
    const { id, name, email, phone, address, company } = user;
    body += `
        <tr>
            <td>${id}</td>
            <td>${name}</td>
            <td>${email}</td>
            <td>${address.city}</td>
            <td>${phone}</td>
            <td>${company.name}</td>
        </tr>
      `;
    document.getElementById("user-info").innerHTML = body;
  });
});
