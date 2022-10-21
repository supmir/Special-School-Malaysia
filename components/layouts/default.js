import Head from "next/head";

export default function Default(props) {
  const { children } = props;
  return (
    <div className="max-w-xl mx-auto p-2">
      <Head>
        <title>
          My Special - Malaysian Special Education School Information Hub
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {children}
    </div>
  );
}
