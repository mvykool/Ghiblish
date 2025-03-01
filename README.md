# Fixus - Focus Enhancer Chrome Extension

A Chrome extension that helps you stay focused by blocking distracting websites like Twitter, Reddit, YouTube, Pinterest, and more.

## Features

- Block distracting websites to improve focus and productivity
- Customizable list of blocked sites
- Easy toggle to enable/disable blocking
- Focus page with motivational quotes and a Pomodoro timer
- Simple and clean user interface

## Installation

1. Download or clone this repository to your local machine
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" by toggling the switch in the top right corner
4. Click "Load unpacked" and select the directory containing the extension files
5. The Fixus extension icon should now appear in your Chrome toolbar

## Usage

### Blocking Websites

By default, the extension blocks:
- Twitter
- Reddit
- YouTube
- Pinterest

You can add or remove sites from the blocked list by clicking on the extension icon and using the popup interface.

### Adding a Site to Block

1. Click on the Fixus icon in your Chrome toolbar
2. Enter the site you want to block in the input field
   - You can enter just the domain (e.g., `facebook.com`) or use wildcard patterns (e.g., `*://*.facebook.com/*`)
3. Click "Add" or press Enter

### Removing a Site from Block List

1. Click on the Fixus icon in your Chrome toolbar
2. Find the site you want to unblock in the list
3. Click the "Remove" button next to it

### Enabling/Disabling Blocking

You can temporarily disable the blocking feature by toggling the switch at the top of the popup.

### Focus Timer

When you try to access a blocked site, you'll be redirected to a focus page that includes a 25-minute Pomodoro timer to help you stay productive.

## Customization

You can customize the extension by modifying the following files:
- `background.js` - Core blocking logic
- `popup.html` and `popup.js` - User interface for the popup
- `focus.html` - The page shown when a site is blocked

## License

This project is open source and available under the MIT License.

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue if you have suggestions for improvements.

---

Built with ❤️ to help you stay focused and productive. 