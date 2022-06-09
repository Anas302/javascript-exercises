const getTheTitles = function(booksAndAuthors) {
    let bookNames = [];

    for(let obj of booksAndAuthors){
        bookNames.push(obj['title']);
    }

    return bookNames;
};

// Do not edit below this line
module.exports = getTheTitles;
