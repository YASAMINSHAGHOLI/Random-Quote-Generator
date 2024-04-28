// Array of quotes
// const quotes = [
//     "The best way to predict the future is to invent it. - Alan Kay",
//     "It always seems impossible until it's done. - Nelson Mandela",
//     "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
//     "The only way to do great work is to love what you do. - Steve Jobs",
//     "Believe you can and you're halfway there. - Theodore Roosevelt",
//     "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
//     "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
//     "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
//     "Don't let yesterday take up too much of today. - Will Rogers",
//     "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi"
// ];

// Function to fetch a random quote from Quotable API
async function getQuote(){
    const url = "https://api.quotable.io/random";

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
            return `${data.content} - ${data.author}`;
        }
        else {
            throw new Error("Failed to fetch quote");
        }
    } catch (error){
        console.error("Error fetching quote:", error);
        return "Failed to fetch quote. Please try again.";
    }
}

// Function to generate a random quote
// function generateQuote(){
//     const randomNumber = Math.floor(Math.random()* quotes.length);
//     document.getElementById("quoteDisplay").innerText = quotes[randomNumber];
// }

// Function to display the fetched quote API
async function displayQuote() {
    const quote = await getQuote();
    document.getElementById("quoteDisplay").innerText = quote;
}

// Event listener for the button
// document.getElementById("newQuoteBtn").addEventListener("click", generateQuote);


// Event listener for the button API
document.getElementById("newQuoteBtn").addEventListener("click", displayQuote);


// Initial quote display
generateQuote();