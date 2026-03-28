import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import ScrollBar from './components/ScrollBar';
import ScrollReveal from './components/ScrollReveal';
import Hero from './components/Hero';
import Arpanet from './components/Arpanet';
import DotCom from './components/DotCom';
import Social from './components/Social';
import Future from './components/Future';

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Cursor />
      <ScrollBar />
      <Loader />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Arpanet />
        <DotCom />
        <Social />
        <Future />
      </main>
      <ScrollReveal />
    </>
  );
}
