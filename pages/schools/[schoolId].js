import { cols, schoolByIndex } from "../../site/data";

export default function Category(props) {
  const { school } = props;

  return (
    <div>
      {cols.map((col) => (
        <div>{school[col]}</div>
      ))}
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
  console.log(schoolByIndex[schoolId]);
  return {
    props: {
      school: schoolByIndex[schoolId],
    },
  };
}
