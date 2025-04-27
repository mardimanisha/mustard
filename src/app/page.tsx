
//import ImageFetcher from "@/components/ImageFetcher";
import ImageFetcher from "@/components/ImageFetcher";
import Moodboard from "@/components/Moodboard";
import MainLayout from "@/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <ImageFetcher />
      <Moodboard />
    </MainLayout>
  );
}
