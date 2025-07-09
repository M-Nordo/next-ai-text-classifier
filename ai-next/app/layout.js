import './globals.css';

export const metadata = {
  title: 'AI Text Classifier',
  description: 'This project uses Hugging Faces zero-shot classification model to categorize user-provided text based on given labels. It works with both Turkish and English text.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}