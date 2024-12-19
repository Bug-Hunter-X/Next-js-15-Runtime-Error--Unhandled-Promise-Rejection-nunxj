```javascript
// pages/index.js

export default async function Home() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();

    return (
      <div>
        <h1>Welcome to my Next.js app!</h1>
        <p>Data: {JSON.stringify(data)}</p>
      </div>
    );
  } catch (error) {
    console.error('Error fetching data:', error);
    return (
      <div>
        <h1>Welcome to my Next.js app!</h1>
        <p>Error fetching data.</p>
      </div>
    );
  }
}

// pages/api/data.js

export default function handler(req, res) {
  // Simulate a potential error
  if (Math.random() < 0.5) {
    res.status(500).json({ error: 'Internal Server Error' });
  } else {
    res.status(200).json({ data: 'This is my data' });
  }
}
```