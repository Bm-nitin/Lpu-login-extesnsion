# LPU Auto Login

A simple Chrome/Chromium extension that automatically fills and submits the login form on the **LPU Internet** portal.

The extension detects the username field, password field, policy checkbox, and login button, then fills the credentials and submits the form automatically.

## Features

* Automatically fills the LPU Internet username.
* Automatically fills the password.
* Automatically accepts the required policy checkbox.
* Automatically clicks the login button.
* Works automatically when visiting the LPU Internet portal.
* Uses Manifest V3.
* No external libraries or backend required.

## Project Structure

```text
OWN_Extension/
│
├── manifest.json
├── content.js
├── icon.png
└── README.md
```

### `manifest.json`

Defines the Chrome extension configuration, permissions, website access, icon, and content script.

### `content.js`

Contains the automatic login logic.

### `icon.png`

Extension icon used for the 16px, 48px, and 128px Chrome extension icons.

## How It Works

When the user opens a page under:

```text
https://internet.lpu.in/*
```

the content script runs after the page has loaded.

It searches for:

1. Username input
2. Password input
3. Policy agreement checkbox
4. Login button

Once all required elements are available, the extension:

```text
Fill username
      ↓
Fill password
      ↓
Trigger input events
      ↓
Check policy checkbox
      ↓
Click Login
```

If the required elements are not immediately available, the script continues checking the page.

## Installation

### 1. Download or Clone the Repository

```bash
git clone https://github.com/Bm-nitin/rk24hp.git
```

Or download the repository as a ZIP file and extract it.

### 2. Open Chrome Extensions

Open:

```text
chrome://extensions/
```

### 3. Enable Developer Mode

Turn on **Developer mode** from the top-right corner.

### 4. Load the Extension

Click:

**Load unpacked**

Then select the project directory:

```text
OWN_Extension
```

The extension should now appear in the installed extensions list.

## Configuration

Open `content.js` and replace the placeholder credentials:

```javascript
const USERNAME = "YOUR_USERNAME";
const PASSWORD = "YOUR_PASSWORD";
```

For example:

```javascript
const USERNAME = "12345678";
const PASSWORD = "YOUR_PASSWORD";
```

### Important Security Warning

**Do not commit real passwords or other sensitive credentials to GitHub.**

The current implementation stores the credentials directly inside `content.js`. Anyone who can access the extension source can potentially read them.

For a personal local installation, this may be acceptable depending on your threat model. For a publicly distributed extension, it is **not recommended**.

A safer future version could use:

* Chrome Extension Storage API
* User-configured credentials
* Local encrypted storage
* A password manager
* OS/browser credential storage

## Permissions

The extension currently requests:

### `scripting`

Allows the extension to use scripting functionality.

### `activeTab`

Provides access to the currently active tab when the extension is invoked.

### Host Permission

```json
"https://internet.lpu.in/*"
```

This limits the extension's website access to the LPU Internet domain.

## Browser Compatibility

The extension is designed for Chromium-based browsers supporting **Manifest V3**, including:

* Google Chrome
* Microsoft Edge
* Brave
* Other Chromium-based browsers with Manifest V3 support

## Troubleshooting

### Extension does not fill the fields

Open:

```text
chrome://extensions/
```

Find **LPU Auto Login** and click **Errors** if available.

The LPU login page may have changed its HTML structure. If the input selectors no longer match, update the selectors in `content.js`.

### Login button is not clicked

The extension currently searches for:

```javascript
button[type='submit']
```

or:

```javascript
input[type='submit']
```

It also searches buttons for text containing:

```text
login
```

If the website changes the login button structure, the selector may need to be updated.

### Checkbox is not selected

The script searches for:

```javascript
document.getElementById("agreepolicy")
```

If LPU changes the checkbox ID, update this selector.

## Development

After modifying `content.js` or `manifest.json`:

1. Open `chrome://extensions/`
2. Find **LPU Auto Login**
3. Click **Reload**
4. Refresh the LPU login page

Changes to content scripts normally require reloading the extension and refreshing the target page.

## Privacy

This extension is designed to operate locally in the browser.

It does not require:

* A backend server
* An external API
* A database
* Internet access to third-party services

The extension only targets:

```text
https://internet.lpu.in/*
```

However, because credentials are currently stored in the extension source, anyone with access to the source code can potentially view them.

## Disclaimer

This project is intended for personal/educational use.

Users are responsible for ensuring that automated login complies with the applicable policies and terms of the LPU Internet service.

## License

No license has currently been specified for this project.

If you intend to distribute the project publicly, consider adding an appropriate open-source license.
