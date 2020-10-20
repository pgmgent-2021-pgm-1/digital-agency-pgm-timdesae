// Gebruik een IIFE om de applicatie te omsluiten
(() => {

const project = {
    title: 'TRUNGNGUYENCOFFEE',
    synopsis: 'Opdracht: ontwikkel de rebranding van een streekproduct. Studente Graphic Design Emily Schmitz ontwikkelde \n \t\t een nieuwe look voor koffiemerk Trung Nguyen.',
    thumbnailUrl: 'https://dl.airtable.com/.attachments/d15b181fab6021b6cbc4be4cc4d05626/66f7b004/image_SchmitzEmily_BEURSWAND_015.jpg',
    // Random genereren van aantal likes
    likes: Math.floor(Math.random() * 100),
    // Random genereren van aantal views
    views: Math.floor(Math.random() * 200 + 100),
    created: new Date(1593512447000).toUTCString(),
    modified: new Date(1593512447000).toUTCString(),
    // Assets = array van objecten
    assets: [   
        {
            title: 'TRUNGNGUYENCOFFEE | Image 001',
            type: 'image',
            thumbnailUrl: 'https://dl.airtable.com/.attachments/8622bcea0f6aa6e99f191882725fdd6f/96f89297/image_SchmitzEmily_ADVERTENTIE_013.jpg',
        },
        {
            title: 'TRUNGNGUYENCOFFEE | Image 002',
            type: 'image',
            thumbnailUrl: 'https://dl.airtable.com/.attachments/7ed727040dc3f753c3c39c5967bf6527/ce185d47/image_SchmitzEmily_AUTOMAAT_014.jpg',
        },
        {
            title: 'TRUNGNGUYENCOFFEE | Image 003',
            type: 'image',
            thumbnailUrl: 'https://dl.airtable.com/.attachments/79cc5ce3c9e194bbd4345023f2b11b71/2ceb36e3/image_SchmitzEmily_BEURSWAND_015.jpg',
        },
    ]
};


// Create a function to show assets in the message
function getStringForAssets (assets){
    let tempstr = '';
    assets.forEach((a, index) => {  // $variabele = [voorwaarde] ? [true] : [false]; (verkorte notatie van if else (2x))
        tempstr += `Asset ${index + 1}: \t ${a.title ? a.title : '\t'} (type: ${a.type}) ${index < assets.length - 1 ? '' : ''}
        \t ${a.thumbnailUrl} ${index < assets.length - 1 ? '\n' : ''}
`;  
    });
    return tempstr;
}

// Convert epoch time to readable date


// Create a message
const mes = `

=====================================================================================================================================
|                                                       PORTFOLIO                                                                   |
=====================================================================================================================================
Project 1: \t ${project.title}   
=====================================================================================================================================
Synopsis: \t ${project.synopsis}     
Thumbnail:  \t ${project.thumbnailUrl}
Likes:  \t ${project.likes}
Views:  \t ${project.views}
Created at:  \t ${project.created}
Modified at: \t ${project.modified}
-------------------------------------------------------------------------------------------------------------------------------------
ASSETS
-------------------------------------------------------------------------------------------------------------------------------------
${getStringForAssets(project.assets)}
=====================================================================================================================================
Project 2:
=====================================================================================================================================
`
// Gebruik slechts 1 console.log!
console.log(mes)

// Sluiten van IIFE
})();
