import Link from "next/link";
import Default from "../components/layouts/default";

export default function Home() {
  const categories = [
    { href: "hearingImpaired", text: "Hearing Impaired" },
    { href: "visuallyImpaired", text: "Visually impaired" },
    { href: "slowLearner", text: "Slow Learner" },
    { href: "dyslexic", text: "Dyslexic" },
    { href: "ADHD", text: "ADHD" },
  ];

  return (
    <Default>
      <div>
        <div className="text-xl text-center">
          School for Student with Learning Disability
        </div>

        <div className="flex justify-around flex-wrap gap-y-2 my-10">
          {categories.map(({ href, text }) => (
            <div className="w-full sm:w-1/2 md:w-1/3 px-2">
              <Link href={`/categories/${href}`}>
                <div className="text-center border border-black rounded-xl">
                  {text}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Default>
  );
}
