```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
// pages/about.js
function About() {
  // Simulate an API call
  const data = fetch('https://api.example.com/data');

  return (
    <div>
      <h1>About Page</h1>
      {/* Incorrect handling of API call */}     
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}

export default About;
```