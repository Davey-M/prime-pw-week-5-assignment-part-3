console.log('***** Music Collection *****')

const collection = [];      // Music Collection

function addToCollection(title, artist, yearPublished) {
    let object = {
        title: title,
        artist: artist,
        yearPublished: yearPublished,
    };
    return object;
}