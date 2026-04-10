const url = "https://api.api-ninjas.com/v1/mutualfund?ticker=VFIAX"
const option = {
    method: "GET",
    headers: {
        "X-Api-Key": "K2lT8CtzJx91xFUyRsHHhbTclmgJg6amH0cnome2",

    }
}
fetch(url, option)
    .then(response => {
        return response.json();
    })

    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Something went wrong!', error);
    });