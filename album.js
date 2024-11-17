const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJhZjJhNDdkZi0wMjAzLTQ1YWUtYWIwNS0wMGVkMWZlNWZjYjUiLCJlbWFpbCI6Im5lZWx2YW5zaDQ1MzVAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImYwNDBjYmQ4MmQwNzljYjRiZTZhIiwic2NvcGVkS2V5U2VjcmV0IjoiZGFlYWU1OGJmNzYxZWUyYjU2OWUwMmJkYmQxOWI3ZGFiZTcwYTc2YjU0NmNiZTM5MWI1NDY5ZGJhZWRkNTQ5MSIsImV4cCI6MTc2MzM3OTU3OH0.HyxBWED5L7diVWCtoEOUt_awgcq7xrFC3Fmo1B_4PqM";

// Function to create a new group on Pinata

async function group(groupName) {
    try {
        const payload = JSON.stringify({
            name: groupName,
            isPublic: true
        });

        const request = await fetch("https://api.pinata.cloud/v3/files/groups", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${JWT}`,
            },
            body: payload,
        });

        const response = await request.json();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

// Add event listeners to make images clickable
document.querySelectorAll(".clickable-image").forEach(image => {
    image.addEventListener("click", () => {
        const groupName = image.getAttribute("data-group-name");
        group(groupName);
        window.location.href = "project.html";
    });
});
