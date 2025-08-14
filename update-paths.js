import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directory = path.join(__dirname, 'src');

async function updateFile(filePath) {
  try {
    let content = await fs.readFile(filePath, 'utf8');
    const updatedContent = content.replace(/\/foto-uploads\//g, '/foto-uploads/');
    
    if (content !== updatedContent) {
      await fs.writeFile(filePath, updatedContent, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error updating ${filePath}:`, error);
  }
}

async function processDirectory(directory) {
  try {
    const files = await fs.readdir(directory);
    
    for (const file of files) {
      const fullPath = path.join(directory, file);
      const stat = await fs.stat(fullPath);
      
      if (stat.isDirectory()) {
        await processDirectory(fullPath);
      } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.jsx')) {
        await updateFile(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${directory}:`, error);
  }
}

async function main() {
  console.log('Updating file paths...');
  await processDirectory(directory);
  console.log('All file paths have been updated!');
}

main().catch(console.error);
