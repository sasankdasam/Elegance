document.addEventListener("DOMContentLoaded", function() {
    const currentUrl = window.location.href;
    const category = currentUrl.split('/').pop().split('.')[0];
    const managers = JSON.parse(localStorage.getItem("eventManagers")) || [];

    const container = document.querySelector(".service-container");

    // Filter and display managers based on the category
    managers.forEach(manager => {
        if (manager.category === category) {
            const managerDiv = document.createElement("div");
            managerDiv.classList.add("manager");
            managerDiv.innerHTML = `
                <img src="${manager.image}" alt="Manager Image" class="manager-image">
                <h3>${manager.name}</h3>
                <p>Location: ${manager.location || "Not specified"}</p>
                <p>Experience: ${manager.experience || "Not specified"}</p>
                <p>Specialty: ${manager.about || "Not specified"}</p>
                <button class="book-now-button">Book Now</button>
            `;
            container.appendChild(managerDiv);
        }
    });
});
