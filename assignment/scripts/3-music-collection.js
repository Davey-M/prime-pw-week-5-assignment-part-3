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

function plural(string1, string2, length) {
    if (length === 1) {
        return string1
    }
    return string2
}

function showCollection(array) {
    let cLength = array.length;
    console.log(`There ${plural('is', 'are', cLength)} ${array.length} item${plural('', 's', cLength)} in this collection`);

    for (let item of array) {
        console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished.toString()}`);
    }
}

showCollection(collection);

function findByArtist(artist) {
    let emptyArray = [];
    for (let item of collection) {
        if (item.artist === artist) {
            emptyArray.push(item);
        }
    }
    return emptyArray;
}

console.log('Finding all entries by Post Malone', findByArtist('Post Malone'));