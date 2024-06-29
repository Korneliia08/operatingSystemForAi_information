import Nav from "../components/home/nav/Nav";
import Search from "../components/home/search/Search";
import Header from "../components/home/header/Header";
import AboutDocumentation from "../components/home/aboutDocumentation/AboutDocumentation";
import Footer from "../components/home/footer/Footer";

function Home() {
  return (
    <>
      <Nav />
      <Search />
      <Header />
      <AboutDocumentation />
      <Footer />
    </>
  );
}

export default Home;
