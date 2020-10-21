// Gebruik een IIFE om de applicatie te omsluiten
(() => {

const posts = [
    {
        title: 'TENTOONSTELLING ‘CONCERTFOTOGRAFIE’ DOOR GEERT BONNE',
        synopsis: 'Geert, voormalig drummer bij Gorky, is een ‘gevoelsmens’. Zijn invalshoek bij het maken van de concertfoto’s, \n\t\t meer bepaald het sub-thema rockfotografie, is het gevoel van passie, geluk, concentratie en overgave dat \n \t\t muziekartiesten ervaren op een podium.',
        body: '“Mijn voorkeur gaat daarbij uit naar zwart-wit foto’s omdat je meer de nadruk kan leggen op het onderwerp”, \n \t\t vertelt Geert. De foto’s zijn getrokken over een tijdsspanne van vijf jaar. In de tentoonstelling zien we onder \n \t\t andere Luc De Vos en Raymond van het Groenewoud passeren. Deze tentoonstelling moet studenten Grafische en \n \t\t Digitale Media inspireren en stimuleren om zelf hun creatieve blik te verruimen.',
        thumbnail: 'https://dl.airtable.com/.attachments/ce0470435c01a2a03365cacb5f70def2/fc368b51/IMG_0521.JPG',
        created: new Date(1593512447000).toUTCString(),
        modified: new Date(1593512447000).toUTCString(),
        authors: [
        {
            firstName: 'Lisa',
            lastName: 'De Wilde',
            thumbnailURL: 'https://dl.airtable.com/.attachments/8216307230f675f3fa6eb2aa90474c67/7ff726d6/lisa.jfif'
        }],
        comments: [
        {
            nickName: 'Fenzo',
            message: 'Waarom heeft Nederland hiervoor geen belangstelling? We komen niet voor in het rijtje van tien landen. Of zitten we bij die andere helft?',
            commentOnComment: [
            {   
                nickName: 'Santford',
                message: 'Nederland is een van de 32 deelnemende landen in de EuroHPC JU.'
            },
            {   
                nickName: 'MartineEekhof',
                message: 'Wij zetten grote windmolenparken op voor datacenters.',               
            }]
        },
        {
            nickName: '3raser',
            message: 'AMD doet goede zaken op alle gebieden zo lijkt het. Fascinerend dat een grote speler als Intel momenteel een soort tweederangs lijkt te zijn.',
            commentOnComment: [
            {
                nickName: 'FreVDP',
                message: 'Intel is dan ook gestopt met innoveren omdat ze de x86 markt zo goed als alleen in handen hadden. Laten we van geluk spreken dat AMD weer helemaal mee is.'
            }]
        }]
    },
    {
        title: 'RECAP: PROJECTWEEK CREATIVE SKILLS 21',
        synopsis: '8 Landen, 8 scholen, 36 studenten, 16 docenten, 9 coördinatoren: de eerste werkweek van het project Creative Skills 21 \n\t\t (Erasmus+) ging vorige week in Gent van start. Het project heeft als doel docenten binnen creatieve opleidingen op \n\t\t te leiden om efficiënter 21st century skills over te brengen bij hun studenten. 21st century skills gaan over soft \n\t\t skills; niet de technische vaardigheden, maar zaken zoals creativiteit, samenwerking, communicatieve vaardigheden \n\t\t en oplossingsgericht denken.',
        body: 'Zowel studenten als docenten volgden een workshop Human-Centered Design, waarbij op een praktische manier de principes \n\t\t van design thinking werden meegegeven. Problemen vinden en oplossen als een designer dus. De studenten zouden de rest \n\t\t van de week in groepen werken aan een eigen design challenge, waarbij ze gecoacht werden door de docenten. Iedere groep \n\t\t bestond uit 4 of 5 studenten en 2 docenten/coaches, elk uit een ander land. Ook werden de creative disciplines gemixt. \n\n\t\t Studenten en docenten met achtergronden in grafisch ontwerp, fotografie, videoproductie, animatie, interactieve media, \n\t\t app development, muziekproductie en zelfs interieurdesign zaten door elkaar. De challenge had te maken met een van de \n\t\t VN Sustainable Development Goals: "Inspire young people with meaningful behaviour change towards a sustainable lifestyle."',
        thumbnail: 'https://dl.airtable.com/.attachments/1f0f9c5f37e20e0a5b42e7146c9d0a23/3ae0aa52/2019_11_29_day_05_DSF7405.jpg',
        created: new Date(1593512447000).toUTCString(),
        modified: new Date(1593512447000).toUTCString(),
        authors: [
        {
            firstName: 'Sander',
            lastName: 'Spek',
            thumbnailURL: 'https://dl.airtable.com/.attachments/f39ebd0b2d7246d25f15082124f1824d/108870f5/sander.jfif'
        },
        {
            firstName: 'Philippe',
            lastName: 'De Pauw',
            thumbnailURL: 'https://dl.airtable.com/.attachments/b40f1495811869e4454052a7526164e9/852910af/CO84uTK8_400x400.jpg'
        },
        {
            firstName: 'Lisa',
            lastName: 'De Wilde',
            thumbnailURL: 'https://dl.airtable.com/.attachments/8216307230f675f3fa6eb2aa90474c67/7ff726d6/lisa.jfif'
        }],
        comments: [
        {
            nickName: 'Marsman 83',
            message: 'Weet iemand waarom de sonde zich al zo lang in een baan om de planetoïde bevind (2018) voordat er geland werd?',
            commentOnComment: [
            {
                message: "Zo'n landing is best gevaarlijk. Daarom hebben we eerst zo veel mogelijk data verzameld op een veilige afstand. Naast de \n\t  wetenschappelijke waarde van de data hebben ze ook veel geleerd over het navigeren rondom Bennu.",
                nickName: 'AJediIAm',
            },
            {
                message: 'In die tijd is er onderzoek gedaan vanuit de orbit, en gezocht naar landingsplaatsen.',
                nickName: 'LOTG',
            }]
        },
        {
            nickName: 'Agnewkes',
            message: 'Alex gaat naar de cinema',
            commentOnComment: [
            {
                message: 'Diene stoemen Antwerpenaar versta ik tenminste',
                nickName: 'fifaghost'
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
`==========================================================================================================================================
Post ${index + 1}: \t ${p.title} 
==========================================================================================================================================
synopsis: \t ${p.synopsis}
body: \t\t ${p.body}
thumbnail: \t ${p.thumbnail}
Created at: \t ${p.created}
Modified at: \t ${p.modified}
-----------------------------------------------------------------------------------------------------------------------------------------
AUTHORS
-----------------------------------------------------------------------------------------------------------------------------------------
${getStringForAuthors(p.authors)}
-----------------------------------------------------------------------------------------------------------------------------------------
COMMENTS
-----------------------------------------------------------------------------------------------------------------------------------------
${getStringForComments(p.comments)}
`
    });
    return tempstr;
}


// Create a function to show Authors in the message
function getStringForAuthors (authors){
    let tempstr = '';
    authors.forEach((a, index) => {  
        tempstr += `Author ${index + 1}: \t ${a.firstName} ${a.lastName} \n \t\t ${a.thumbnailURL} \n`;  
    });
    return tempstr;
}


// Create a function to show comments in the message
function getStringForComments (comments){
    let tempstr = '';
    comments.forEach((a, index) => {  
        tempstr += `* ${a.message}  \n  written by:${a.nickName}
        ${getStringForCommentOnComment(a.commentOnComment)}
`;  
    });
    return tempstr;
}


// Create a function to comment on a comment
function getStringForCommentOnComment (commentOnComment){
    let tempstr = '';
    commentOnComment.forEach((c, index) => {  
        tempstr += `* ${c.message}  \n \t  written by:${c.nickName}
        ` ;  
    });
    return tempstr;
}


// Create a message
const mes = `
==========================================================================================================================================
|                                                            NEWS                                                                        |
${showPostsInConsole(posts)}
`

// Gebruik slechts 1 console.log!
console.log(mes)


// afsluiten van een IIFE
})();