document.addEventListener("DOMContentLoaded", function() {
    const category = "marriage";
    const managers = JSON.parse(localStorage.getItem("eventManagers")) || [];
    const container = document.querySelector(".planner-list");

    managers.forEach(manager => {
        if (manager.category === category) {
            const managerDiv = document.createElement("div");
            managerDiv.classList.add("planner-card");

            managerDiv.innerHTML = `
                <img src="${manager.image || '/assets/default.png'}" alt="${manager.name}" class="planner-img">
                <div class="planner-info">
                    <h2>${manager.name}</h2>
                    <p>Location: ${manager.location || "Not specified"}</p>
                    <p>Experience: ${manager.experience || "Not specified"} years</p>
                    <p>Specialty: ${manager.about || "Not specified"}</p>
                    <button class="delete-manager" data-name="${manager.name}">Delete</button>
                </div>
                <button class="book-now" data-manager='${JSON.stringify(manager)}'>Book Now</button>
            `;
            container.appendChild(managerDiv);
        }
    });

    // "Book Now" button functionality with redirection
    container.addEventListener("click", function(event) {
        if (event.target.classList.contains("book-now")) {
            const managerData = JSON.parse(event.target.getAttribute("data-manager"));
            localStorage.setItem("selectedManager", JSON.stringify(managerData));
            // Redirect to the detailed page
            window.location.href = "marriagedetails.html";
        }
    });

    // Delete functionality
    container.addEventListener("click", function(event) {
        if (event.target.classList.contains("delete-manager")) {
            if (confirm("Are you sure you want to delete this manager?")) {
                const name = event.target.getAttribute("data-name");
                const updatedManagers = managers.filter(manager => manager.name !== name);
                localStorage.setItem("eventManagers", JSON.stringify(updatedManagers));
                event.target.closest(".planner-card").remove();
            }
        }
    });
});
