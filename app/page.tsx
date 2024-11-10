import { FeedbackPage, NavbarPage, SearchPage, Footer } from './components/index';

export default function Page ()
{
  return <div className='min-h-screen'>
    <NavbarPage />
    <section className='bg-slate-50'>
      <SearchPage />
      <FeedbackPage />
    </section>
  </div>;
}