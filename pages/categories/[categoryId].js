import { categories, schoolByCat } from "../../site/data";

export default function Category(props) {
  const { schools } = props;

  return (
    <div>
      {schools.map((schoolInfo) => (
        <div>{schoolInfo["Name of School"]}</div>
      ))}
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
