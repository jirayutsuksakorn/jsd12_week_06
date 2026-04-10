const tickers = ["AAPL", "MSFT", "GOOGL"];
const apiKey = "K2lT8CtzJx91xFUyRsHHhbTclmgJg6amH0cnome2";

const requests = tickers.map(symbol => {
    return fetch(`https://api.api-ninjas.com/v1/ticker?ticker=${symbol}`, {
        method: "GET",
        headers: { "X-Api-Key": apiKey }
    })

        .then(res => res.json());
});

Promise.all(requests)
    .then(allData => {
        console.log("ข้อมูลทั้งหมด:", allData);
        // allData จะเป็น Array ของผลลัพธ์ [ {AAPL_data}, {MSFT_data}, ... ]
    })
    .catch(error => {
        console.error("มีบางตัวพัง!", error);
    });