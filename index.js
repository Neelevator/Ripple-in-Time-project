const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiIxMTA5ZmRjZi0wMDU0LTQ5OTctOWFmOC05MWY2NTUyMTkxYjIiLCJlbWFpbCI6Im9mdWNoaWlAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInBpbl9wb2xpY3kiOnsicmVnaW9ucyI6W3siZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiRlJBMSJ9LHsiZGVzaXJlZFJlcGxpY2F0aW9uQ291bnQiOjEsImlkIjoiTllDMSJ9XSwidmVyc2lvbiI6MX0sIm1mYV9lbmFibGVkIjpmYWxzZSwic3RhdHVzIjoiQUNUSVZFIn0sImF1dGhlbnRpY2F0aW9uVHlwZSI6InNjb3BlZEtleSIsInNjb3BlZEtleUtleSI6ImU4M2IwZTUyZDY5M2E3NjE2M2JmIiwic2NvcGVkS2V5U2VjcmV0IjoiOTUyODIzMWM1NWJlZDViZGU5ODdlNzU3NDQ2YTkwYzg1YWM5ZWI3ZmQ3MjY2OTYxOTE3M2MyNDIwODFkYjQ0NyIsImV4cCI6MTc2MzMzMTQzNn0.f4P55u7yVz7z8lnq6QEhIVcakK2mxqPdKY6vbjxT26c";

// Function to create a new group on Pinata

// async function group(groupName) {
//     try {
//         const payload = JSON.stringify({
//             name: groupName,
//             isPublic: true
//         });

//         const request = await fetch("https://api.pinata.cloud/v3/files/groups", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//                 Authorization: Bearer ${JWT},
//             },
//             body: payload,
//         });

//         const response = await request.json();
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// Add event listeners to make images clickable
document.querySelectorAll(".clickable-image").forEach(image => {
    image.addEventListener("click", () => {
        const groupName = image.getAttribute("data-group-name");
        // group(groupName);
        window.location.href = "project.html";
    });
});