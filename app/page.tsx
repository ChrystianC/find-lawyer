import {
  FeedbackPage,
  SearchPage,
} from "./components/index";

export default function Page() {
  return (
    <div className="min-h-screen">
      <section className="bg-gray-100">
        <SearchPage />
      </section>
    </div>
  );
}
