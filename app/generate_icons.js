// This script generates SVG icons for the extension
// You can run it with Node.js: node generate_icons.js

const fs = require('fs');
const path = require('path');

// Create SVG icons with different sizes
const createSvgIcon = (size) => {
  const halfSize = size / 2;
  const strokeWidth = Math.max(1, size / 16);
  const radius = size * 0.4;
  
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <circle cx="${halfSize}" cy="${halfSize}" r="${radius}" fill="#3498db" />
  <path d="M${halfSize - radius * 0.5},${halfSize - radius * 0.5} L${halfSize + radius * 0.5},${halfSize + radius * 0.5} M${halfSize - radius * 0.5},${halfSize + radius * 0.5} L${halfSize + radius * 0.5},${halfSize - radius * 0.5}" stroke="#ffffff" stroke-width="${strokeWidth}" stroke-linecap="round" />
  <circle cx="${halfSize}" cy="${halfSize}" r="${radius}" fill="none" stroke="#2c3e50" stroke-width="${strokeWidth}" />
</svg>`;
};

// Create PNG data URL (base64 encoded) from SVG
const svgToDataURL = (svg) => {
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
};

// Save SVG files
const sizes = [16, 48, 128];
const imagesDir = path.join(__dirname, 'images');

// Ensure the images directory exists
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate and save icons
sizes.forEach(size => {
  const svg = createSvgIcon(size);
  fs.writeFileSync(path.join(imagesDir, `icon${size}.svg`), svg);
  console.log(`Created icon${size}.svg`);
  
  // For a real implementation, you would convert SVG to PNG here
  // For simplicity, we're just creating SVG files
  // In a real scenario, you might use a library like sharp or canvas to convert to PNG
  
  // For demonstration, we'll create an HTML file that shows how to convert SVG to PNG in the browser
  if (size === 128) {
    const html = `<!DOCTYPE html>
<html>
<head>
  <title>Convert SVGs to PNGs</title>
</head>
<body>
  <h1>SVG to PNG Converter</h1>
  <p>This page demonstrates how to convert the SVG icons to PNG files.</p>
  
  ${sizes.map(s => `
  <div>
    <h2>${s}x${s} Icon</h2>
    <img src="${svgToDataURL(createSvgIcon(s))}" width="${s}" height="${s}">
    <button onclick="downloadPNG(${s})">Download PNG</button>
  </div>`).join('\n')}
  
  <script>
    function downloadPNG(size) {
      const svg = document.querySelector(\`img[width="\${size}"]\`);
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d');
      
      const img = new Image();
      img.onload = function() {
        ctx.drawImage(img, 0, 0, size, size);
        const a = document.createElement('a');
        a.href = canvas.toDataURL('image/png');
        a.download = \`icon\${size}.png\`;
        a.click();
      };
      img.src = svg.src;
    }
  </script>
</body>
</html>`;
    
    fs.writeFileSync(path.join(__dirname, 'convert_icons.html'), html);
    console.log('Created convert_icons.html for manual PNG conversion');
  }
});

console.log('\nIcon generation complete!');
console.log('To convert SVGs to PNGs, open convert_icons.html in a browser and use the download buttons.');
console.log('Then place the downloaded PNG files in the images directory.'); 