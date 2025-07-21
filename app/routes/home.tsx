import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Checkr" },
    { name: "description", content: "Smart resume feedback" },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Applications</h1>
        <h2>Review your submissions and get AI-powered feedback.</h2>
      </div>
    </section>
  </main>;
}
