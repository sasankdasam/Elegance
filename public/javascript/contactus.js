function submitContactForm() {
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const queries = document.getElementById("queries").value;

    // Get selected service
    const service = document.querySelector('input[name="service"]:checked');
    const serviceValue = service ? service.value : "Not specified";

    if (!name || !contact || !serviceValue) {
        alert("Please fill in all required fields.");
        return;
    }

    // Simulated "send" confirmation
    const emailBody = `
        Name: ${name}\n
        Contact Number: ${contact}\n
        Service: ${serviceValue}\n
        Additional Queries: ${queries || 'N/A'}
    `;
    alert("Simulated Email Sent:\n" + emailBody);

    // Create CSV data
    const csvRow = `"Name","Contact Number","Service","Additional Queries"\n"${name}","${contact}","${serviceValue}","${queries || 'N/A'}"`;
    const blob = new Blob([csvRow], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    // Download CSV file
    const a = document.createElement("a");
    a.href = url;
    a.download = "contactData.csv";
    a.click();

    // Clean up
    URL.revokeObjectURL(url);

    alert("Form data saved as CSV file!");
    document.getElementById("contactForm").reset();
}
