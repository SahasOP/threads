import { currentUser } from "@clerk/nextjs";
import ThreadCard from "@/components/cards/ThreadCard";
import Pagination from "@/components/shared/Pagination";
import { fetchPosts } from "@/lib/actions/thread.actions";

async function Home({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  const user = await currentUser();
  const page = searchParams.page ? +searchParams.page : 1;
  const result = await fetchPosts(page, 30);

  return (
    <>
      <h1 className="head-text text-left">Home</h1>
      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">No threads found</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user ? user.id : ''}
                parentId={post.parentId || ''}
                content={post.text}
                author={post.author}
                community={post.community || ''}
                createdAt={post.createdAt}
                comments={post.children || []}
              />
            ))}
          </>
        )}
      </section>
      <Pagination path="/" pageNumber={page} isNext={result.isNext} />
    </>
  );
}

export default Home;
