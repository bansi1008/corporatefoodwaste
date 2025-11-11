# Universal Loading Components

A collection of reusable loading components for your application.

## Components Available

### 1. **Loading** (Default - Leaf Spinner)
Main loading component with animated leaf icons.

```jsx
import Loading from "@/app/components/Loading/Loading";

// Basic usage
<Loading />

// With custom size
<Loading size="small" />   // small, medium, large
<Loading size="large" />

// With custom text
<Loading text="Loading data..." />

// Full screen loading
<Loading fullScreen={true} text="Please wait..." />
```

### 2. **LoadingDots**
Simple animated dots loading indicator.

```jsx
import { LoadingDots } from "@/app/components/Loading/Loading";

<LoadingDots />
<LoadingDots text="Processing" />
```

### 3. **LoadingSpinner**
Circle spinner with customizable colors.

```jsx
import { LoadingSpinner } from "@/app/components/Loading/Loading";

<LoadingSpinner size="medium" color="green" />
<LoadingSpinner size="large" color="blue" />
// Colors: green, blue, purple, orange
```

### 4. **LoadingBar**
Progress bar indicator.

```jsx
import { LoadingBar } from "@/app/components/Loading/Loading";

// Animated progress bar
<LoadingBar />

// With specific progress percentage
<LoadingBar progress={45} />
```

### 5. **LoadingPulse**
Pulsating circles animation.

```jsx
import { LoadingPulse } from "@/app/components/Loading/Loading";

<LoadingPulse />
```

## Usage Examples

### In a Page Component
```jsx
"use client";
import { useState, useEffect } from "react";
import Loading from "@/app/components/Loading/Loading";

export default function MyPage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/data");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading size="large" text="Loading data..." />;
  }

  return <div>{/* Your content */}</div>;
}
```

### Full Screen Loading
```jsx
if (loading) {
  return <Loading fullScreen={true} text="Initializing..." />;
}
```

### Inline Loading
```jsx
<div>
  <h2>My Content</h2>
  {isLoading ? (
    <LoadingDots text="Loading" />
  ) : (
    <DataTable data={data} />
  )}
</div>
```

### Button Loading State
```jsx
<button disabled={isSubmitting}>
  {isSubmitting ? (
    <>
      <LoadingSpinner size="small" color="green" />
      <span>Submitting...</span>
    </>
  ) : (
    "Submit"
  )}
</button>
```

## Props

### Loading Component Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| fullScreen | boolean | false | Display as full screen overlay |
| size | string | "medium" | Size: "small", "medium", "large" |
| text | string | "Loading..." | Loading message text |

### LoadingDots Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string | "Loading" | Text before dots |

### LoadingSpinner Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| size | string | "medium" | Size: "small", "medium", "large" |
| color | string | "green" | Color: "green", "blue", "purple", "orange" |

### LoadingBar Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| progress | number | null | Progress percentage (0-100), null for animated |

## Styling
All components use CSS Modules and can be customized by modifying `Loading.module.css`.

