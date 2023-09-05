import Welcome from "./Welcome";

const HomeLayout = () => {
  return (
    <div>
      <Welcome />
      <div className="py-8">
        <h1 className="text-3xl font-semibold">Mi Billetera</h1>
      </div>
    </div>
  );
};

export default HomeLayout;
