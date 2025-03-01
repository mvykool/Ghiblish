# Extension Icons

This directory contains the SVG icons for the Fixus Chrome extension. For the extension to work properly, you need to convert these SVG files to PNG format.

## Converting SVG to PNG

There are several ways to convert the SVG icons to PNG:

### Method 1: Using the Provided Converter

1. Open the `convert_icons.html` file in your browser
2. Click the "Download PNG" buttons for each icon size
3. Save the downloaded PNG files in this directory with the same names:
   - `icon16.png`
   - `icon48.png`
   - `icon128.png`

### Method 2: Using Online Converters

You can use online tools to convert SVG to PNG:

1. Go to a website like [SVG to PNG Converter](https://svgtopng.com/)
2. Upload the SVG files
3. Download the converted PNG files
4. Save them in this directory with the correct names

### Method 3: Using Image Editing Software

If you have image editing software like Adobe Illustrator, Inkscape, or GIMP:

1. Open the SVG file in your software
2. Export or save as PNG
3. Make sure to maintain the correct dimensions (16x16, 48x48, 128x128)
4. Save the files in this directory

## Icon Requirements

Chrome extension icons should be in PNG format with the following sizes:

- `icon16.png`: 16x16 pixels
- `icon48.png`: 48x48 pixels
- `icon128.png`: 128x128 pixels

These icons are referenced in the `manifest.json` file and are used in various places in the Chrome browser interface. 