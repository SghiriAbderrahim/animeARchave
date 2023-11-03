
import NaveBar from '../components/NaveBar';
import './globals.css';

export const metadata = {
  title: 'AnimeARchive',
  description: 'Archive of Anime',
};



export default function RootLayout({ children }) {

  return (
    <html className="dark h-screen">
      <body className=" bg-[var(--color-60)] ">
        <NaveBar />
        {children}
      </body>
    </html>
  );
}
