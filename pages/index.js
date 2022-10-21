import Link from "next/link";
import Default from "../components/layouts/default";
import { categories } from "../site/data";

export default function Home() {
  return (
    <Default>
      <div>
        <div className="text-xl text-center">
          School for Student with Learning Disability
        </div>

        <div className="flex justify-around flex-wrap gap-y-2 my-10">
          {categories.map(({ categoryId, text }) => (
            <div className="w-full sm:w-1/2 md:w-1/3 px-2">
              <Link href={`/categories/${categoryId}`}>
                <button className="h-full w-full text-center border border-black rounded-xl bg-fuchsia-200 hover:bg-fuchsia-100">
                  {text}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Default>
  );
}
