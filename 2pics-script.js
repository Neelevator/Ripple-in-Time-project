const API_KEY = "e83b0e52d693a76163bf";
const API_SECRET = "9528231c55bed5bde987e757446a90c85ac9eb7fd72669619173c242081db447";

// Get elements
const fileInput = document.getElementById("fileInput");
const addButton = document.getElementById("addButton");
const removeButton = document.getElementById("removeButton");
const scrollContainer = document.getElementById("scrollContainer");

// Load CID codes from localStorage on page load
window.onload = loadItems;

// Function to add an image
addButton.addEventListener("click", () => {
    fileInput.click();
});

fileInput.addEventListener("change", async () => {
    const file = fileInput.files[0];
    if (!file) {
        alert("Please select an image file.");
        return;
    }

    try {
        const ipfsHash = await uploadToPinata(file);

        // Save the CID code in localStorage
        const savedCIDs = JSON.parse(localStorage.getItem("CIDs")) || [];
        savedCIDs.push(ipfsHash);
        localStorage.setItem("CIDs", JSON.stringify(savedCIDs));

        // Create new item element with image
        const newItem = document.createElement("div");
        newItem.classList.add("item");

        const img = document.createElement("img");
        img.src = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;
        img.style.width = "500px";
        img.style.height = "500px";

        newItem.appendChild(img);
        scrollContainer.appendChild(newItem);

    } catch (error) {
        console.error("Error uploading image:", error);
        alert("Failed to upload the image. Please try again.");
    }

    fileInput.value = "";
});

removeButton.addEventListener("click", () => {
    const items = scrollContainer.getElementsByClassName("item");
    if (items.length > 0) {
        scrollContainer.removeChild(items[items.length - 1]);

        // Remove the corresponding CID from localStorage
        const savedCIDs = JSON.parse(localStorage.getItem("CIDs")) || [];
        savedCIDs.pop();
        localStorage.setItem("CIDs", JSON.stringify(savedCIDs));
    } else {
        alert("No items to remove.");
    }
});

async function uploadToPinata(file) {
    const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch(url, {
        method: "POST",
        headers: {
            pinata_api_key: API_KEY,
            pinata_secret_api_key: API_SECRET,
        },
        body: formData,
    });

    if (!response.ok) {
        throw new Error(`Pinata API error: ${response.status}`);
    }

    const data = await response.json();
    return data.IpfsHash;
}

function saveItems() {
    const items = [];
    const itemElements = scrollContainer.getElementsByClassName("item");

    for (const item of itemElements) {
        const img = item.querySelector("img");
        if (img) {
            items.push(img.src);
        }
    }

    localStorage.setItem("images", JSON.stringify(items));
}

async function loadItems() {
    const savedCIDs = JSON.parse(localStorage.getItem("CIDs")) || [];

    for (const cid of savedCIDs) {
        const newItem = document.createElement("div");
        newItem.classList.add("item");

        const img = document.createElement("img");
        img.src = `https://gateway.pinata.cloud/ipfs/${cid}`;
        img.style.width = "500px";
        img.style.height = "500px";

        newItem.appendChild(img);
        scrollContainer.appendChild(newItem);
    }
}
