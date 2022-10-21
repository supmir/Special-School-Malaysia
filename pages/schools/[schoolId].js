import Link from "next/link";
import { cols, schoolByIndex } from "../../site/data";

export default function Category(props) {
  const { school } = props;

  return (
    <div className="grid p-2 gap-2">
      <div class="grid">
        {cols.map((col) => (
          <div className="sm:flex justify-between border border-y-2 bg-fuchsia-200 p-2">
            <div className="min-w-content whitespace-nowrap font-bold">
              {col}
            </div>
            <div className="pl-2 text-right break-words flex-grow">
              {school[col]}
            </div>
          </div>
        ))}
      </div>
      <Link href={`/categories/${school.TypeCodes}`}>
        <button className="border border-black rounded-xl mx-auto py-1 px-2">
          Back to {school.Type} category
        </button>
      </Link>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(schoolByIndex).map((schoolId) => ({
      params: { schoolId: schoolId },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps(context) {
  const { schoolId } = context.params;
  return {
    props: {
      school: schoolByIndex[schoolId],
    },
  };
}
