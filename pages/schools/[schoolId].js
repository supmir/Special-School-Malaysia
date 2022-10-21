import { cols, schoolByIndex } from "../../site/data";

export default function Category(props) {
  const { school } = props;

  return (
    <div className="p-2">
      <div class="grid">
        {cols.map((col) => (
          <div className="sm:flex justify-between border border-y-2">
            <div className="min-w-content whitespace-nowrap bg-lime-200 font-bold">
              {col}
            </div>
            <div className="text-right break-words bg-fuchsia-200 flex-grow">
              {school[col]}
            </div>
          </div>
        ))}
      </div>
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
