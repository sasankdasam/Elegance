function submitContactForm() {
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;
    const location = document.getElementById("location").value;
    const queries = document.getElementById("queries").value;

    if (!name || !contact || !location) {
        alert("Please fill in all required fields.");
        return;
    }

    // Create a CSV row
    const csvRow = `"Name","Contact Number","Location","Additional Queries"\n"${name}","${contact}","${location}","${queries || 'N/A'}"`;

    // Create a blob from the CSV row and trigger a download
    const blob = new Blob([csvRow], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "contactData.csv";
    a.click();

    // Clean up
    URL.revokeObjectURL(url);

    alert("Form data saved as CSV file!");
    document.getElementById("contactForm").reset();
}
