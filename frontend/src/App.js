import "@/App.css";
import { LangProvider } from "@/lib/i18n";
import Nav from "@/components/site/Nav";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Portfolio from "@/components/site/Portfolio";
import About from "@/components/site/About";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <LangProvider>
      <div className="App grain" data-testid="app-root">
        <Nav />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <About />
          <Contact />
        </main>
        <Footer />
        <Toaster
          theme="dark"
          position="bottom-right"
          toastOptions={{
            style: {
              background: "#242424",
              border: "1px solid #333",
              color: "#f5f5f5",
              fontFamily: "Manrope, sans-serif",
            },
          }}
        />
      </div>
    </LangProvider>
  );
}

export default App;
