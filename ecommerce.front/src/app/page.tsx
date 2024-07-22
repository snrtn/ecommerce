import GroupView from "@/components/app/home/GroupView";
import BannerView from "@/components/app/home/BannerView";
import ItemView from "@/components/app/home/ItemView";
import SlideView from "@/components/app/home/SlideView";
import InfiniteView from "@/components/app/home/InfiniteView";
import Review from "@/components/app/home/Review";

export default function Home() {
  return (
    <>
      <div className="">
        <SlideView />
      </div>
      <ItemView />
      <GroupView />
      <div className="hidden md:flex">
        <BannerView />
      </div>
      <InfiniteView />
      <Review />
    </>
  );
}
