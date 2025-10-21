import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="mx-auto h-full w-full max-w-screen-xl px-6 pb-24 pt-24">
        <div className="flex h-full w-full flex-col items-center justify-center text-2xl">
          Page Not Found.
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
