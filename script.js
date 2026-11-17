fetch('https://jsonplaceholder.typicode.com/users')
.then((res) => res.json())
.then((data) => {
    displayData(data);
})


const displayData = (userData) => {
    const displayContainer = document.getElementById('user-container');

    let cnt = 1;
    userData.forEach(element => {
        const div = document.createElement("div");
        div.innerHTML = 
        `
        <p style="background-color: #3b82f6; display: flex; justify-content: center; align-items: center; width: 10px; height: 10px; padding: 16px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); border-radius: 50%">${cnt}</p>
        <h3>Name: ${element.name}</h3>
        <p>Email: ${element.email}</p>
        <p>Phone: ${element.phone}</p>
        <p>Website: <a href="${element.website}" target="_blank">${element.website}</a></p>
        `;
        cnt++;
        div.classList.add("user");
        displayContainer.appendChild(div);
    });
}