function getAllAnimalsByLetter(letter) {
  let allResults = [];
  let offset = 0;

  function fetchNextPage() {
    const url = `https://api.api-ninjas.com/v1/animals?name=${letter} & offset= ${offset}`;

    return fetch(url, {
      headers: { "X-Api-Key": "K2lT8CtzJx91xFUyRsHHhbTclmgJg6amH0cnome2" },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          console.log(
            `Found ${allResults.length} animals containing the letter ${letter} `,
          );
          console.log(allResults);
          return allResults;
        }

        allResults.push(...data);
      });
  }

  return fetchNextPage();
}

getAllAnimalsByLetter("a")
  .then((animals) => {
    console.log("Finished fetching all pages.");
    console.log(animals.map((animal) => animal.name));
  })
  .catch((error) => {
    console.error("Something went wrong!", error);
  });