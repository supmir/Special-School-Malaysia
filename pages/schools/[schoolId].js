import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Default from "../../components/layouts/default";
import { cols, schoolByIndex } from "../../site/data";

export default function Category(props) {
  const { schoolId, school } = props;

  const [src, setSrc] = useState(`/images/${schoolId}.jpg`);

  return (
    <Default>
      <div className="grid gap-2">
        <div className="grid">
          <div className="w-full relative">
            <Image
              src={src}
              alt={src}
              layout="responsive"
              objectFit={"contain"}
              width="100%"
              height="50%"
              onError={() => setSrc(`/images/${schoolId}.webp`)}
            />
          </div>
          {cols.map((col) => (
            <div
              className="sm:flex justify-between border border-y-2 bg-fuchsia-200 hover:bg-fuchsia-100 p-2"
              key={col}
            >
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
          <button className="border border-black rounded-xl mx-auto py-1 px-2 bg-lime-200">
            Back to {school.Type} category
          </button>
        </Link>
      </div>
    </Default>
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
      schoolId: schoolId,
      school: schoolByIndex[schoolId],
    },
  };
}
