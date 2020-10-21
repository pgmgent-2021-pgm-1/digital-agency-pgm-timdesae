// Gebruik een IIFE om de applicatie te omsluiten
(() => {

const posts = [
    {
        title: 'title post 1',
        synopsis: 'synopsis post 1',
        body: 'Veeeeel tekst',
        thumbnail: '',
        created: new Date(1593512447000).toUTCString(),
        modified: new Date(1593512447000).toUTCString(),
        authors: [
        {
            firstName: 'Tim',
            lastName: 'De Saeger',
            thumbnailURL: 'link van Tim'
        },
        {
            firstName: 'Evi',
            lastName: 'De Saeger',
            thumbnailURL: 'link van Evi'
        }],
        comments: [
        {
            nickName: 'Ghostbusters fan',
            message: 'The ghostbusterds are not real!',
            commentOnComment: [
            {
                message: 'This is a comment on a comment'
            }]
        },
        {
            nickName: 'Karen',
            message: 'K3 is the best (the old one)',
            commentOnComment: [
            {
                message: 'This is a comment on a comment'
            }]
        }]
    },
    {
        title: 'title post 2',
        synopsis: 'synopsis post 2',
        body: 'Veeeeel tekst',
        thumbnail: '',
        created: new Date(1593512447000).toUTCString(),
        modified: new Date(1593512447000).toUTCString(),
        authors: [
        {
            firstName: 'Franky',
            lastName: 'Verelst',
            thumbnailURL: 'link van Franky'
        },
        {
            firstName: 'Jef',
            lastName: 'Van Achter Den Hoek',
            thumbnailURL: 'link van Jef'
        }],
        comments: [
        {
            nickName: 'fifaghost',
            message: 'a long message',
            commentOnComment: [
            {
                message: 'You suck in fifa'
            }]
        },
        {
            nickName: 'Agnewkes',
            message: 'Alex gaat naar de cinema',
            commentOnComment: [
            {
                message: 'Diene stoemen Antwerpenaar versta ik tenminste'
            }]
        }]
    },
]


// Doorloop array van posts
function showPostsInConsole(posts)
{
    let tempstr = '';
    posts.forEach((p, index) => {
    tempstr += 
`=====================================================================================================================================
Post ${index + 1}: \t ${p.title} 
=====================================================================================================================================
synopsis: \t ${p.synopsis}
body: \t\t ${p.body}
thumbnail: \t ${p.thumbnailUrl}
Created at: \t ${p.created}
Modified at: \t ${p.modified}
------------------------------------------------------------------------------------------------------------------------------------
AUTHORS
------------------------------------------------------------------------------------------------------------------------------------
${getStringForAuthors(p.authors)}
------------------------------------------------------------------------------------------------------------------------------------
COMMENTS
------------------------------------------------------------------------------------------------------------------------------------
${getStringForComments(p.comments)}
`
    });
    return tempstr;
}


// Create a function to show Authors in the message
function getStringForAuthors (authors){
    let tempstr = '';
    authors.forEach((a, index) => {  
        tempstr += `Author ${index + 1}: \t ${a.firstName} ${a.lastName} \n \t\t ${a.thumbnailUrl} 
`;  
    });
    return tempstr;
}


// Create a function to show comments in the message
function getStringForComments (comments){
    let tempstr = '';
    comments.forEach((a, index) => {  
        tempstr += `* ${a.message}  \n  written by:${a.nickName} \n`;  
    });
    return tempstr;
}


// Create a message
const mes = `
=====================================================================================================================================
|                                                            NEWS                                                                   |
${showPostsInConsole(posts)}
`

// Gebruik slechts 1 console.log!
console.log(mes)


// afsluiten van een IIFE
})();