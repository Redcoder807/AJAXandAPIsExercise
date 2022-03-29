// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1, p2);
`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;

// 1a
const jokeJS1 = JSON.parse(`{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`);
console.log(`Question 1`);
console.log(jokeJS1);

// 1b
console.log(jokeJS1.setup);
p1.innerText = jokeJS1.setup;

// 1c
console.log(jokeJS1.punchline);
p2.innerText = jokeJS1.punchline;

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3, p4);

// 2a
axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`)
// 2b
.then(quote => {
  console.log(`Question 2`);
  console.log(quote);
  const friendsJS2 = quote.data;
  console.log(friendsJS2);
  // 2c
  p3.innerText = friendsJS2.character;
  p4.innerText = friendsJS2.quote;
})
// 2d
.catch(err => {
  console.log(`Question 2 Failed`);
  console.log(err);
});

// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5, p6);

// 3b
async function quoteJS3(){
  try {
    // 3a
    const quoteJS3 = await axios.get(`https://friends-quotes-api.herokuapp.com/quotes/random`);
    console.log(`Question 3`);
    console.log(quoteJS3.data);
    // 3c
    p5.innerText = quoteJS3.data.character;
    p6.innerText = quoteJS3.data.quote;
    // 3d
  } catch (err) {
    console.log(err);
  }
}
quoteJS3();

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);

// 4a
async function tvMazeFunc(){
  try {
    // Plugging in 38963 for the ID parameter, 2 for the season query string, & 8 for the number query string
    const show = await axios.get(`https://api.tvmaze.com/shows/38963/episodebynumber?season=2&number=8`);
    console.log(`Question 4`);
    console.log(show);
    p7.innerText = show.data.name;
    // 4b
  } catch (err) {
    console.log(err);
  }
}
tvMazeFunc();