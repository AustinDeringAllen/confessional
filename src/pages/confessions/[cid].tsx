import { type NextPage } from "next";
import { useRouter } from "next/router";
import CommentForm from "../../components/CommentForm";
import Layout from "../../components/Layout";
import { api } from "../../utils/api";

const Confession: NextPage = () => {
  const router = useRouter();
  const { cid } = router.query;
  const confessionId = cid ? cid?.toString() : "";
  const confession = api.confessions.getOne.useQuery(confessionId);
  const comments = api.comments.getAll.useQuery(confessionId);

  const renderedComments = comments.data?.map(({ id, content }) => (
    <div key={id}>
      <p className="text-xl">{content}</p>
    </div>
  ));

  return (
    <>
      <Layout>
        <main className="flex min-h-screen flex-col items-center justify-center bg-[#070606] text-white">
          <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
            {confession?.data ? (
              <h1 className="text-3xl">{confession.data.content}</h1>
            ) : (
              "Loading"
            )}
            {renderedComments}

            <CommentForm cid={confessionId} />
          </div>
        </main>
      </Layout>
    </>
  );
};

export default Confession;

// <main className="flex min-h-screen flex-col items-center justify-center bg-[#070606]">
//         <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
//           <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
//             All Confessions
//           </h1>

//           {confessions}
//         </div>

//         <ConfessionForm />
//       </main>
