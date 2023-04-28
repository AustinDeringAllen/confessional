import { type NextPage } from "next";
import Link from "next/link";
import ConfessionBlock from "../../components/ConfessionBlock";
import ConfessionForm from "../../components/ConfessionForm";
import Layout from "../../components/Layout";
import { api } from "../../utils/api";

const AllConfessions: NextPage = () => {
  const { data, isLoading } = api.confessions.getAll.useQuery();

  const confessions = isLoading
    ? "Loading..."
    : data?.map((confession) => (
        <Link
          href={`/confessions/${confession.id}`}
          key={confession.id}
          className="rounded-xl border border-white p-6"
        >
          <ConfessionBlock
            content={confession.content}
            author={confession.author}
          />
        </Link>
      ));

  return (
    <>
      <Layout>
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#070606]">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              All Confessions
            </h1>

            {confessions}
          </div>

          <ConfessionForm />
        </main>
      </Layout>
    </>
  );
};

export default AllConfessions;
