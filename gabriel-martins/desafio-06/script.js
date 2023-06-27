const apiURL = "https://jsonplaceholder.typicode.com/uers";
const usersList = document.getElementById("users-list");
const loading = document.createElement("div");
const loadingText = document.createElement("p");

loading.classList.add("loader");
loadingText.classList.add("loading-text");
loadingText.innerText = "Carregando...";

loading.appendChild(loadingText);
usersList.appendChild(loading);

function getUsers(searchValue = "") {
	fetch(apiURL)
		.then((response) => {
			if (!response.ok) {
				throw Error("Não foi possível obter os dados dos usuários.");
			}
			return response.json();
		})
		.then((data) => {
			setTimeout(() => {
				loading.remove();
			}, 500);

			usersList.innerHTML = "";

			data.forEach((user) => {
				const name = user.name.toLowerCase();
				const email = user.email.toLowerCase();

				if (name.includes(searchValue.toLowerCase()) || email.includes(searchValue.toLowerCase())) {
					const li = document.createElement("li");
					const nome = document.createElement("p");
					const userEmail = document.createElement("p");

					nome.innerText = `Nome: ${user.name}`;
					userEmail.innerText = `Email: ${user.email}`;

					li.appendChild(nome);
					li.appendChild(userEmail);
					usersList.appendChild(li);
				}
			});
		})
		.catch((error) => {
			setTimeout(() => {
				loading.remove();
			}, 1000);
			setTimeout(() => {
				console.log(`Erro: ${error.message}`);
				const li = document.createElement("li");
				li.innerText = error.message;
				usersList.appendChild(li);
			}, 1100);
		});
}

const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
	const searchValue = searchInput.value;
	getUsers(searchValue);
});

getUsers();
