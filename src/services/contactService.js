const SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;

export function sendContactMessage({ name, email, subject, message }) {
  return new Promise((resolve, reject) => {
    if (!SCRIPT_URL) return reject(new Error('Google Script URL not configured'));

    const now = new Date();
    const date = now.toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });
    const time = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Build URL with query params — most reliable method for Google Apps Script
    const params = new URLSearchParams({
      date,
      time,
      name,
      email,
      subject: subject || '(no subject)',
      message,
    });

    const fullURL = `${SCRIPT_URL}?${params.toString()}`;

    // Use a hidden iframe to submit — bypasses CORS entirely
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    // Resolve after short delay (script executes server-side)
    const timer = setTimeout(() => {
      document.body.removeChild(iframe);
      resolve();
    }, 3000);

    iframe.onerror = () => {
      clearTimeout(timer);
      document.body.removeChild(iframe);
      reject(new Error('Failed to send'));
    };

    iframe.src = fullURL;
  });
}
