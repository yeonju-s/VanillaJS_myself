const quaotes = [
    {
        quote: "Travel is only glamorous in retrospect.",
        author: "Paul Theroux",
    },
    {
        quote: "The first duty of love is to listen.",
        author: "Paul Tillich",
    },
    {
        quote: "Learning to love yourself is the greatest love of all.",
        author: "Michael Masser",
    },
    {
        quote: "Love is an act of endless forgiveness, a tender look which becomes a habit.",
        author: "Havelock Ellis",
    },
    {
        quote: "위대한 이들은 목적을 갖고, 그 외의 사람들은 소원을 갖는다.",
        author: "Washington Irving",
    },
    {
        quote: "성공의 8할은 일단 출석하는 것이다.",
        author: "Woody Allen",
    },
    {
        quote: "성공은 영원하지 않고, 실패는 치명적이지 않다.",
        author: "Mike Ditka",
    },
    {
        quote: "남에게 이기는 방법의 하나는 예의범절로 이기는 것이다.",
        author: "Josh Billings",
    },
    {
        quote: "'다정은 공짜잖아요'",
        author: "동백꽃 필 무렵에서",
    },
    {
        quote: "천재는 거대한 인내일 뿐이다.",
        author: "Buffon",
    },
]

const quaote = document.querySelector('.quaote')
const h2 = document.createElement('h2');
const span = document.createElement('span')
const randomNumber = Math.floor(Math.random()*quaotes.length);

quaote.appendChild(h2);
quaote.appendChild(span);
h2.innerText = quaotes[randomNumber].quote;
span.innerText = quaotes[randomNumber].author;