const got = require('got');

const fetchRepoInfo = (repoName, callback) => {
  got(`https://api.github.com/repos/${repoName}`).then((response) => {
    callback(response);
  });
}

fetchRepoInfo('sinatra/sinatra', (repoResponse) => {
    console.log(repoResponse);
  });