export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body style={{ margin: 0, background: '#000', color: '#fff', fontFamily: 'Arial' }}>
        {children}
      </body>
    </html>
  );
}
