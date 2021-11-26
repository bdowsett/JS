const CANDIES_DB = ['Mars', 'Maltesers', 'Skittles', 'Fraise Tagada'];

const handleResult = (result) => {
    console.log(result);
  }
  

const fetchCandiesFromDatabase = (handleResultCallback) => {
    setTimeout(() => {
      handleResultCallback(CANDIES_DB);
    }, 2000);
  }

fetchCandiesFromDatabase(handleResult)