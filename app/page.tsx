import {
  FeedbackPage,
  NavbarPage,
  SearchPage,
} from "./components/index";

export default function Page() {
  return (
    <div className="min-h-screen">
      <NavbarPage />
      <section className="bg-slate-50">
        <SearchPage />
        <FeedbackPage />
      </section>
    </div>
  );
}
