#!/usr/bin/env node

/**
 * Icon Generation Script for HHGG Tetris PWA
 *
 * This script generates PNG icons from the SVG source at various sizes
 * required for PWA installation on different platforms.
 *
 * Usage:
 *   npm run generate-icons
 *
 * Requirements:
 *   - sharp (npm install --save-dev sharp)
 *   OR use online tools like:
 *   - https://realfavicongenerator.net/
 *   - https://www.pwabuilder.com/imageGenerator
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ICON_SIZES = [72, 96, 128, 144, 152, 180, 192, 384, 512];
const SOURCE_SVG = path.join(__dirname, '..', 'icons', 'icon.svg');
const OUTPUT_DIR = path.join(__dirname, '..', 'icons');

async function main() {
    console.log('🎮 DON\'T PANIC: Generating PWA Icons\n');

    // Check if sharp is available
    let sharp;
    try {
        const sharpModule = await import('sharp');
        sharp = sharpModule.default;
        console.log('✅ Found sharp - generating icons...\n');
    } catch (error) {
        console.log('❌ sharp not found. Install it with:');
        console.log('   npm install --save-dev sharp\n');
        console.log('Or use an online tool:');
        console.log('   https://realfavicongenerator.net/');
        console.log('   https://www.pwabuilder.com/imageGenerator\n');
        process.exit(1);
    }

    // Verify source SVG exists
    if (!fs.existsSync(SOURCE_SVG)) {
        console.error(`❌ Source SVG not found: ${SOURCE_SVG}`);
        process.exit(1);
    }

    // Generate icons
    for (const size of ICON_SIZES) {
        const outputPath = path.join(OUTPUT_DIR, `icon-${size}x${size}.png`);

        try {
            await sharp(SOURCE_SVG)
                .resize(size, size, {
                    fit: 'contain',
                    background: { r: 10, g: 10, b: 15, alpha: 1 } // Match --space-black
                })
                .png()
                .toFile(outputPath);

            console.log(`✅ Generated ${size}x${size} icon`);
        } catch (error) {
            console.error(`❌ Failed to generate ${size}x${size}:`, error.message);
        }
    }

    console.log('\n🎉 Icon generation complete!');
    console.log('📱 Your PWA is now ready for installation\n');
}

main().catch(error => {
    console.error('❌ Error generating icons:', error);
    process.exit(1);
});
