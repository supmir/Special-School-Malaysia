import { Fragment } from "react/cjs/react.production.min";
import { cols, schoolByIndex } from "../../site/data";

export default function Category(props) {
  const { school } = props;

  return (
    <div className="p-2">
      <div class="grid grid-cols-2">
        {cols.map((col) => (
          <Fragment>
            <div className="min-w-content whitespace-nowrap border border-slate-500">
              {col}
            </div>
            <div className="text-right break-words border border-slate-500">
              {school[col]}
            </div>
          </Fragment>
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
