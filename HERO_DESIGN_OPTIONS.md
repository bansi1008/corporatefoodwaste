# Hero Design Options for img4

## Current Setup

- **Overlay**: Top to bottom gradient (darker at top, lighter at bottom with green tint)
- **Navbar**: Off-white glass (85% opacity)
- **Text**: White with shadows

---

## 🎨 Overlay Options (Choose based on img4 brightness)

### Option 1: Current - Balanced (Good for medium brightness images)

```css
background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.45) 0%,
  rgba(0, 0, 0, 0.35) 40%,
  rgba(34, 197, 94, 0.25) 100%
);
```

### Option 2: Lighter - If img4 is bright/colorful

```css
background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.3) 0%,
  rgba(0, 0, 0, 0.2) 40%,
  rgba(34, 197, 94, 0.15) 100%
);
```

### Option 3: Darker - If img4 is too bright and text is hard to read

```css
background: linear-gradient(
  to bottom,
  rgba(0, 0, 0, 0.6) 0%,
  rgba(0, 0, 0, 0.5) 40%,
  rgba(34, 197, 94, 0.35) 100%
);
```

### Option 4: Green Tint - If img4 has earthy/green tones

```css
background: linear-gradient(
  to bottom,
  rgba(22, 163, 74, 0.4) 0%,
  rgba(34, 197, 94, 0.3) 40%,
  rgba(34, 197, 94, 0.2) 100%
);
```

### Option 5: No Gradient - Solid overlay

```css
background: rgba(0, 0, 0, 0.4);
```

---

## 🎯 Quick Adjustments Guide

### If text is hard to read:

1. Increase overlay darkness (increase all numbers by 0.1-0.2)
2. Add stronger text shadows
3. Make navbar more opaque

### If image is too dark:

1. Decrease overlay darkness (reduce all numbers by 0.1-0.2)
2. Remove green tint entirely
3. Use lighter text colors

### If colors clash:

1. Switch to neutral overlay (remove green tint)
2. Adjust navbar to match image colors
3. Change text color scheme

---

## 📝 How to Apply Different Options

Open `Hero.module.css` and find the `.overlay` section (around line 24-37).
Replace the `background` property with your chosen option above.

---

## Current Color Scheme

- **Primary Green**: #22c55e
- **Secondary Green**: #16a34a
- **Dark Green**: #15803d
- **Text White**: #ffffff
- **Navbar**: rgba(255, 255, 255, 0.85)
