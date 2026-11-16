import './globals.css';

export const metadata = {
  title: 'Solar50K · Prototypes',
  description: 'รวมต้นแบบ (Prototype) โครงการโซลาร์ภาคประชาชน',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}
