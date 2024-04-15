const fs = require('fs');
const path = require('path');

const outputFolder = './';

const towns = [
  'Islington',
  'Angel',
  'Clerkenwell',
  'Farringdon',
  'Highbury',
  'Holloway',
  'Camden',
  'Bloomsbury',
  'Euston',
  'Regent\'s Park',
  'Marylebone',
  'Fitzrovia',
  'Holborn',
  'Covent Garden',
  'Soho',
  'Finsbury',
  'Pentonville',
  'Shoreditch',
  'Spitalfields',
  'Whitechapel',
  'Bethnal Green',
  'Haggerston',
  'Hoxton',
  'Stoke Newington',
  'Dalston',
  'De Beauvoir Town',
  'Canonbury',
  'Hackney',
  'Bow',
  'Mile End',
  'Stepney',
  'Wapping',
  'Bermondsey',
  'Rotherhithe',
  'Southwark',
  'Bankside',
  'Bermondsey',
  'London Bridge',
  'Borough',
  'Elephant and Castle',
  'Vauxhall',
  'Kennington',
  'Waterloo',
  'South Bank',
  'Lambeth',
  'Brixton',
  'Stockwell',
  'Clapham',
  'Balham',
  'Tooting',
  'Wandsworth',
  'Earlsfield',
  'Putney',
  'Barnsbury',
  'Canonbury',
  'Tufnell Park',
  'Dartmouth Park',
  'Archway',
  'Highgate',
  'Muswell Hill',
  'Crouch End',
  'Stroud Green',
  'Hornsey',
  'Wood Green',
  'Bounds Green',
  'Alexandra Palace',
  'Finsbury Park',
  'Manor House',
  'Newington Green',
  'Stamford Hill',
  'Stoke Newington',
  'Tottenham',
  'Seven Sisters',
  'Hackney Wick',
  'Homerton',
  'Victoria Park',
  'Walthamstow',
];
  
  // Template path
const templatePath = path.join(__dirname, '../landing-templates/KingsCrossHotel.astro');

// Read the template content
let templateContent = fs.readFileSync(templatePath, 'utf8'); 
// Create the output directory if it doesn't exist
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

// Generate pages for each town
towns.forEach((town) => {
  // Replace {town} in the template content with the actual town name
  const pageContent = templateContent.replace(/{town}/g, town);

  // Convert town for URL (lowercase with hyphen)
  const urlTown = town.toLowerCase().replace(/\s+/g, '-'); 

  // Define the output path
  const outputPath = path.join(outputFolder, `${urlTown}.astro`);

  // Write the modified content to the output file
  fs.writeFileSync(outputPath, pageContent, 'utf8');
  console.log(`Generated page for ${town} at ${outputPath}`);
});

console.log('Pages generated successfully.'); 
