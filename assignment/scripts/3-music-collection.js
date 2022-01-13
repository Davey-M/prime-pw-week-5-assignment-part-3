console.log('***** Music Collection *****')

let collection = [];      // Music Collection

function addToCollection(title, artist, yearPublished) {
    let object = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };
    collection.push(object);
    return object;
}

console.log(`Added ablum:`, addToCollection('Stoney', 'Post Malone', 2016));

console.log(`Added ablum:`, addToCollection('Circles', 'Mac Miller', 2020));

console.log(`Added ablum:`, addToCollection('Mr', 'Leslie Odom Jr.', 2019));

console.log(`Added ablum:`, addToCollection('Bearbongs & Bentleys', 'Post Malone', 2018));

console.log(`Added ablum:`, addToCollection('PTX, Vol, IV: Classics', 'Pentatonix', 2017));

console.log(`Added ablum:`, addToCollection('The Search', 'NF', 2019));