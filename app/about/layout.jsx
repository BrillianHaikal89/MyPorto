import Footer from "@/components/Footer";

export const metadata = {
	title: "Brillian | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
