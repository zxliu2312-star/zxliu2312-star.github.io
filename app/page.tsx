import MainLayout from '@/components/layout/MainLayout';
import Hero from '@/components/layout/Hero';
import AboutPreview from '@/components/layout/AboutPreview';
import SelectedWorks from '@/components/layout/SelectedWorks';
import Journey from '@/components/layout/Journey';
import JournalPreview from '@/components/layout/JournalPreview';
import ContactSection from '@/components/layout/ContactSection';
import './globals.css';

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <AboutPreview />
      <SelectedWorks />
      <Journey />
      <JournalPreview />
      <ContactSection />
    </MainLayout>
  );
}
