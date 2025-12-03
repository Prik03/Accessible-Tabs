# Accessible Tabs Demo

A fully accessible tab component built using WAI-ARIA guidelines.  
This project demonstrates **manual** and **automatic** tab activation, keyboard navigation, ARIA roles, and the correct semantic structure for tablists and tab panels.

---

## Features

- Keyboard accessible (Arrow Keys, Enter, Space)
- Screen-reader friendly with proper ARIA roles
- Manual & Automatic tab activation
- Logical HTML structure
- Optional list-based tab pattern using `role="presentation"`
- Uses `hidden` attribute for accessible visibility control
- Simple and reusable code

---

## Understanding the Structure

### **1. Tablist (Parent Container)**

The wrapper uses:

```html
role="tablist"
```

### **2. Tablist (Parent Container)**

Each tab uses:

```html
role="tab" aria-selected="true/false" aria-controls="tabpanel_id"
tabindex="0/-1"
```

- Only one tab is active (aria-selected="true").
- Inactive tabs have tabindex="-1" to prevent unwanted focus.
- aria-controls links the tab to its associated panel.

### **3. Tablist (Parent Container)**

Panels use:

```html
role="tabpanel" aria-labelledby="tab_id"
```

The active panel is visible, while others use:

```html
hidden
```

This hides the panel visually but keeps it accessible when activated.

---

## Why role="presentation"?

When using list markup for tabs:

```html
<ul role="tablist">
  <li role="presentation">
    <button role="tab">Tab 1</button>
  </li>
</ul>
```

role="presentation" makes screen readers ignore the <li> so only the tab button is announced.
This prevents noise like “list item” and keeps navigation clean.

---

## Keyboard Support

### Manual Activation

- Left/Right Arrow: Move between tabs.
- Enter/Space: Activate selected tab.

### Automatic Activation

- Left/Right Arrow: Moves and activates the tab automatically.
- Both follow WAI-ARIA Authoring Practices.

---

## Project Structure

```pgsql
/
|— index.html   → Demo with manual & automatic tabs
|— style.css    → Styling and layout
|— script.js    → Tab control + keyboard navigation
```

---

## Example Code Snippet

```html
<div role="tablist" aria-label="Sample Tabs">
  <button role="tab" aria-selected="true" aria-controls="panel1">
    First Tab
  </button>
  <button role="tab" aria-selected="false" aria-controls="panel2">
    Second Tab
  </button>
</div>

<div role="tabpanel" id="panel1">Content for the first tab</div>
<div role="tabpanel" id="panel2" hidden>Content for the second tab</div>
```

---

## Goal of This Project

To show how ARIA roles (like role="tab", role="tabpanel", role="presentation", and aria-selected) enhance accessibility and provide an inclusive experience for assistive technology users.

---

## How to Use

- Clone the repository
- Open index.html in your browser
- Navigate using keyboard or mouse
- Test both tablist patterns (manual & automatic)

---

## Contributions

Contributions are welcome!
Feel free to open issues, suggest improvements, or submit pull requests to enhance accessibility or code quality.

---

## License

MIT License
