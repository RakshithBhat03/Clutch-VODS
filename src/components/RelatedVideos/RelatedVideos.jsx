import { useSelector } from "react-redux";
import { Card } from "../Card/Card";

const RelatedVideos = ({ currentVideo }) => {
  const { allVideos } = useSelector((store) => store.video);
  const getRelatedVideos = (currentVideo, videos) =>
    videos
      .filter(({ categoryName }) => currentVideo.categoryName === categoryName)
      .filter(({ _id }) => currentVideo._id !== _id);
  const realatedVideos = getRelatedVideos(currentVideo, allVideos);
  return (
    <aside className=" flex flex-col gap-1 p-2 flex-initial w-full lg:w-[24rem] xl:w-[30rem] h-screen overflow-y-scroll">
      <h2 className="text-2xl text-center font-semibold">Related Videos</h2>
      {realatedVideos.map((video, index) => (
        <Card key={index} video={video} />
      ))}
    </aside>
  );
};

export { RelatedVideos };
