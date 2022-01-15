console.log('***** Music Collection *****')

let collection = [];      // Music Collection

// Adds an album to the music collection.
function addToCollection(title, artist, yearPublished, tracks) {
    let object = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
        tracks: tracks,
    };
    collection.push(object);
    return object;
}

// Each of the following adds the album name, artist name, year published and tracks.
    // Each of the tracks has a name and duration parameter.
console.log(`Added ablum:`, addToCollection('Stoney', 'Post Malone', 2016, [
    { name: "Broken Whiskey Glass", duration: "3:54" },
    { name: "Big Lie", duration: "3:28" },
    { name: "Deja Vu", duration: "3:55" },
    { name: "No Options", duration: "3:00" },
    { name: "Cold", duration: "4:30" },
    { name: "White Iverson", duration: "4:17" },
]));

console.log(`Added ablum:`, addToCollection('Circles', 'Mac Miller', 2020, [
    { name: "Circles", duration: "2:51" },
    { name: "Complicated", duration: "3:53" },
    { name: "Blue World", duration: "3:30" },
    { name: "Good News", duration: "5:43" },
    { name: "I Can See", duration: "3:41" },
    { name: "Everybody", duration: "4:17" },
]));

console.log(`Added ablum:`, addToCollection('Mr', 'Leslie Odom Jr.', 2019, [
    { name: "Stronger Magic", duration: "2:39" },
    { name: "Standards", duration: "3:29" },
    { name: "Go Crazy", duration: "3:27" },
    { name: "u r my everything", duration: "3:27" },
]));

console.log(`Added ablum:`, addToCollection('Bearbongs & Bentleys', 'Post Malone', 2018, [
    { name: "Paranoid", duration: "3:42" },
    { name: "Spoil My Night", duration: "3:15" },
    { name: "Rich & Sad", duration: "3:27" },
    { name: "Zack and Codeine", duration: "3:25" },
    { name: "Talkin Shots", duration: "3:37" },
]));

console.log(`Added ablum:`, addToCollection('PTX, Vol, IV: Classics', 'Pentatonix', 2017, [
    { name: "Bohemian Rhapsody", duration: "5:56" },
    { name: "Imagine", duration: "4:21" },
    { name: "Boogie Woogie Bugle Boy", duration: "2:19" },
    { name: "Over the Rainbow", duration: "3:55" },
    { name: "Take on Me", duration: "3:29" },
]));

console.log(`Added ablum:`, addToCollection('The Search', 'NF', 2019, [
    { name: "The Search", duration: "4:08" },
    { name: "Leave Me Alone", duration: "5:08" },
    { name: "Change", duration: "3:54" },
    { name: "My Stress", duration: "4:12" },
    { name: "Nate", duration: "5:02" },
]));

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

    if (!params || params === {}) {
        return collection;
    }

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
console.log('Searching for {}', search({}));
console.log('Searching for nothing', search());