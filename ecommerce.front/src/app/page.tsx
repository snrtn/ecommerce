import GroupView from "@/components/app/GroupView";
import BannerView from "@/components/app/BannerView";
import ItemView from "@/components/app/ItemView";
import SlideView from "@/components/app/SlideView";
import InfiniteView from "@/components/app/InfiniteView";
import Review from "@/components/app/Review";

export default function Home() {
  return (
    <div className="mt-10 md:mt-24">
      <SlideView />
      <ItemView />
      <GroupView />
      <div className="hidden md:flex">
        <BannerView />
      </div>
      <InfiniteView />
      <Review />
    </div>
  );
}
