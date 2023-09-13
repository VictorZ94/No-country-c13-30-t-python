import PillsTabs from "./PillTabs";
import Wallet from "./Wallet";
import Welcome from "./Welcome";

const HomeLayout = ({ saldo }) => {
  return (
    <div>
      <Welcome />
      <div className="py-8">
        <h1 className="text-3xl font-semibold">Mi Billetera</h1>
      </div>
      <div className="flex">
        <Wallet saldo={saldo}/>
        <div className="mx-4 flex-1 p-4 max-w-lg border rounded-3xl border-collapse">
          <PillsTabs saldo={saldo}/>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
