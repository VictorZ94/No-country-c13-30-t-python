import PillsTabs from "./PillTabs";
import Wallet from "./Wallet";
import Welcome from "./Welcome";

const HomeLayout = () => {
  return (
    <div>
      <Welcome />
      <div className="py-8">
        <h1 className="text-3xl font-semibold">Mi Billetera</h1>
      </div>
      <div className="flex">
        <Wallet />
        <div className="mx-4 flex-1 p-4 max-w-lg border rounded-3xl border-collapse">
          <PillsTabs />
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
