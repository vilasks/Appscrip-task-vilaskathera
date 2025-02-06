import Footer from "@/components/footer/footer";
import Header from "@/components/header/Header";
import HeroTitle from "@/components/heroTitle/heroTitle";
import PageBody from "@/components/pagebody/pagebody";

async function Home(){

  return <>
  <Header/>
  <HeroTitle/>
  <PageBody />
  <Footer/>
  </>
}


export default Home;