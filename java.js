// Create an array to hold your NFTs
const nfts = [];

// Function to mint an NFT
function mintNFT(name, age, color, gender) {
    const nft = {
        name: name,
        age: age,
        color: color,
        gender: gender
    };

    nfts.push(nft);
    console.log("Minted: " + name);
}

// Function to list all NFTs
function listNFTs() {
    console.log("NFT Details:");
    nfts.forEach((nft, index) => {
        console.log(`ID: ${index + 1}`);
        console.log(`Name: ${nft.name}`);
        console.log(`Age: ${nft.age}`);
        console.log(`Color: ${nft.color}`);
        console.log(`Gender: ${nft.gender}`);
    });
}

// Function to get total supply
function getTotalSupply() {
    console.log("Total number of NFTs: " + nfts.length);
}

// Call your functions below this line
mintNFT("Verma", 20, "Brown", "M");
mintNFT("Kalia", 22, "White", "M");
mintNFT("Chahal", 21, "Black", "M");
mintNFT("Sharma", 23, "Brown", "M");
mintNFT("Mishra", 18, "Brown", "F");

listNFTs();
getTotalSupply();
