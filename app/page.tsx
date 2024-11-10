import {
  FeedbackPage,
  NavbarPage,
  SearchPage,
} from "./components/index";

export default function Page() {
  return (
    <div className="min-h-screen">
      <NavbarPage />
      <section className="bg-gray-100">
        <SearchPage />
        <FeedbackPage />
      </section>
    </div>
  );
}
