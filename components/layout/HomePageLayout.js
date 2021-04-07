import Navbar from "components/home/navbar/Navbar";
import Header from "components/home/header/Header";
import PageLayout from "components/layout/PageLayout";

export default function HomePageLayout({ children }) {
  return (
    <PageLayout>
      <Header />
      <Navbar />
      {children}
    </PageLayout>
  )
}