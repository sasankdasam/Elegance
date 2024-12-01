document.addEventListener("DOMContentLoaded", function() {
    const selectedManager = JSON.parse(localStorage.getItem("selectedManager"));

    if (selectedManager) {
        // Update planner image
        const plannerImage = document.querySelector(".planner-img");
        plannerImage.src = selectedManager.image || "/assets/default.png";
        plannerImage.alt = selectedManager.name;

        // Update planner name, location, experience, and specialty
        document.querySelector(".planner-info h2").textContent = selectedManager.name;
        document.querySelector(".planner-info p:nth-of-type(1)").innerHTML = `<strong>Location:</strong> ${selectedManager.location || "Not specified"}`;
        document.querySelector(".planner-info p:nth-of-type(2)").innerHTML = `<strong>Experience:</strong> ${selectedManager.experience || "Not specified"} years`;
        document.querySelector(".planner-info p:nth-of-type(3)").innerHTML = `<strong>Specialty:</strong> ${selectedManager.about || "Not specified"}`;

        // Populate packages section if package data is available
        const packageInfo = document.querySelector(".packages");
        packageInfo.innerHTML = selectedManager.packageDetails || "<p>No specific package details available.</p>";
    } else {
        console.error("No manager selected.");
    }
});
