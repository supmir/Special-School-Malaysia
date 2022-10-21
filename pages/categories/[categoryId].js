import Link from "next/link";
import { categories, schoolByCat } from "../../site/data";

export default function Category(props) {
  const { schools } = props;

  return (
    <div className="grid gap-8 p-2">
      <div className="mx-auto text-2xl text-bold">
        {schools && schools[0]["Type"]}
      </div>
      <div className="grid gap-2">
        {schools.map((schoolInfo) => (
          <Link href={`/schools/${schoolInfo["index"]}`}>
            <button className="border border-black rounded-xl mx-auto py-1 px-2 bg-fuchsia-200 hover:bg-fuchsia-100">
              <div>{schoolInfo["Name of School"]}</div>
            </button>
          </Link>
        ))}
      </div>
      <Link href="/">
        <button className="border border-black rounded-xl mx-auto py-1 px-2 bg-lime-200">
          <div>Back</div>
        </button>
      </Link>
    </div>
  );
}

export async function getStaticPaths() {
  return {
    paths: categories.map(({ categoryId }) => ({
      params: { categoryId: categoryId },
    })),
    fallback: false, // can also be true or 'blocking'
  };
}
export async function getStaticProps(context) {
  const { categoryId } = context.params;
  return {
    props: {
      schools: schoolByCat[categoryId],
    },
  };
}
