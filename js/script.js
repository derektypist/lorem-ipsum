// Lorem Text
const text = [
    `Pasta fish bacon peas potatoes rice green beans pork chops beef mince.  Pineapple slices in juice, cheesecake in toffee flavour, chocolate cake, caramel slices, apricots.`,
    `Bromley Croydon Lewisham Peterborough Lakenheath Birmingham York.  Cambridge Manea March Wisbech Whittlesford Haddenham Ely Chatteris Cottenham.  Paris Munich Prague Reims Nice Cannes Menton Colmar Mulhouse Nerja Torremolinos Benalmadena Barcelona Benidorm.`,
    `Python JavaScript HTML5 CSS3 Bootstrap.  Django Flask jQuery Font Awesome Roboto PDF.`,
    `Black blue green red orange white yellow pink grey purple silver gold.  Emerald mint teal.`,
    `Library school supermarket church museum sports hall cathedral tower wharf cafe house mansion.`,
    `Crossroads Rainbow Neighbours Dallas Eastenders Pipkins Sesame Street Topcat Playschool.  The Big Match Sons and Daughters Home and Away Henry's Cat.`,
    `Metre Kilogram Second Ampere Kelvin Mole Candela.  Hertz Pascal Newton Joule Watt Henry Tesla.`,
    `Physics Chemistry Maths English French History Geography Economics Computer Studies Games RE Algebra Statistics.  C Fortran Prolog Pascal GLIM Minitab Genstat.`,
    `Ruth Langsford Anna Richardson Kathy Lette Kate Garraway Kay Burley Kimberley Guilfoyle Joanna Gosling Susanna Reid Marlene Lufen Rosana Franco Victoria Beckham.  Daphne Pink Roxette.`
];

// Set Up Query Selectors and Get Element by Id
const form = document.querySelector('.lorem-form');
const amount = document.getElementById("amount");
const result = document.querySelector('.lorem-text');

// Set Up Event Listener
form.addEventListener("submit",function(e) {
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * text.length);

    if (isNaN(value) || value<0 || value>9) {
        result.innerHTML = `<p class="result">${text[random]}</p>`;
    } else {
        let tempText = text.slice(0,value);
        tempText = tempText.map(function(item) {
            return `<p class="result">${item}</p>`
        }).join("");
        result.innerHTML = tempText;
    }
});