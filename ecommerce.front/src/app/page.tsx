import GroupView from "@/components/app/GroupView";
import BannerView from "@/components/app/BannerView";
import ItemView from "@/components/app/ItemView";
import SlideView from "@/components/app/SlideView";
import InfiniteView from "@/components/app/InfiniteView";
import Review from "@/components/app/Review";

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
