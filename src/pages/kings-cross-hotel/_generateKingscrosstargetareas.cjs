const fs = require('fs');
const path = require('path');

const outputFolder = './';

const towns = [
  'King\'s Cross Station',
    'St. Pancras International',
    'British Library',
    'Camden Market',
    'Granary Square',
    'Regent\'s Canal',
    'Coal Drops Yard',
    'The Foundling Museum',
    'University College London (UCL)',
    'The Francis Crick Institute',
    'Bloomsbury',
    'Camden Town',
    'Caledonian Park',
    'Gagosian Gallery Britannia Street',
    'The British Museum',
    'British Museum',
    'Covent Garden',
    'Leicester Square',
    'Piccadilly Circus',
    'Trafalgar Square',
    'Oxford Street',
    'Regent Street',
    'Bond Street',
    'Carnaby Street',
    'Soho',
    'Chinatown',
    'West End Theatre District',
    'London Zoo',
    'Regent\'s Park',
    'Primrose Hill',
    'Hyde Park',
    'Kensington Gardens',
    'The Shard',
    'Tower Bridge',
    'Tower of London',
    'St. Paul\'s Cathedral',
    'Tate Modern',
    'Shakespeare\'s Globe',
    'Southbank Centre',
    'London Eye',
    'Buckingham Palace',
    'Westminster Abbey',
    'Houses of Parliament',
    'Big Ben',
    'Tate Britain',
    'Natural History Museum',
    'Science Museum',
    'Victoria and Albert Museum',
    'Royal Albert Hall',
    'Chelsea',
    'Kensington',
    'Notting Hill',
    'Portobello Road Market',
    'Royal Opera House',
    'Royal Courts of Justice',
    'Somerset House',
    'Covent Garden Market',
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
