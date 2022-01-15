console.log('***** Music Collection *****')

let collection = [];      // Music Collection

// Adds an album to the music collection.
function addToCollection(title, artist, yearPublished) {
    let object = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };
    collection.push(object);
    return object;
}

// Each of the following adds the album name, artist name, and year published.
console.log(`Added ablum:`, addToCollection('Stoney', 'Post Malone', 2016));

console.log(`Added ablum:`, addToCollection('Circles', 'Mac Miller', 2020));

console.log(`Added ablum:`, addToCollection('Mr', 'Leslie Odom Jr.', 2019));

console.log(`Added ablum:`, addToCollection('Bearbongs & Bentleys', 'Post Malone', 2018));

console.log(`Added ablum:`, addToCollection('PTX, Vol, IV: Classics', 'Pentatonix', 2017));

console.log(`Added ablum:`, addToCollection('The Search', 'NF', 2019));

// This function changes the grammer in the showCollection function depending on the collection length.
function plural(string1, string2, length) {
    if (length === 1) {
        return string1
    }
    return string2
}

// This will log each of the items in the collection.
function showCollection(array) {
    let cLength = array.length;
    console.log(`There ${plural('is', 'are', cLength)} ${array.length} item${plural('', 's', cLength)} in this collection`);

    for (let item of array) {
        console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished.toString()}`);
    }
}

showCollection(collection);

// This searches for all the albums from an artist in the collection.
function findByArtist(artist) {
    let emptyArray = [];
    for (let item of collection) {
        if (item.artist === artist) {
            emptyArray.push(item);
        }
    }
    return emptyArray;
}

// Tests for showCollection()
console.log('Finding all entries by Post Malone', findByArtist('Post Malone'));
console.log('Finding all entries by Lauv', findByArtist('Lauv'));

// Searches for all albums that fit with every specified parameter.
function search(params) {
    let returnArray = [];
    const { artist, title, year } = params;

    loopLabel: for (let i = 0; i < collection.length; i++) {
        let item = collection[i];

        if (artist) {
            if (item.artist.toUpperCase() !== artist.toUpperCase()) {
                continue loopLabel;
            }
        }

        if (title) {
            if (item.title.toUpperCase() !== title.toUpperCase()) {
                continue loopLabel;
            }
        }

        if (year) {
            if (item.yearPublished != year) {
                continue loopLabel;
            }
        }
        
        returnArray.push(item);
    }

    return returnArray;
}

console.log('Searching for { artist: "Post Malone", year: 2016 }', search({ artist: "Post Malone", year: 2016 }));
console.log('Searching for { artist: "post malone", year: "2018" }', search({ artist: "post malone", year: '2018' }));
console.log('Searching for { artist: "lauv", title: "Tattoos Together" }', search({ artist: "lauv", title: "Tattoos Together" }));