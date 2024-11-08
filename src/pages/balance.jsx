import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const BalancePage = () => {
  return (
    <MainLayout type="balance">
      {/* top content start*/}
      <div className="mb-8">
        <div className="text-xl font-semibold mb-4">balance</div>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="sm:w-1/2">
            <Card>
              <p>isi 1</p>
            </Card>
          </div>
          <div className="sm:w-1/2">
            <Card>
              <p>isi 2</p>
            </Card>
          </div>
        </div>
      </div>
      {/* top content end*/}
      {/* bottom content start*/}
      <div className="mb-8">
        <div className="text-xl font-semibold mb-4">Goals</div>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="sm:w-1/2">
            <Card>
              <p>isi 1</p>
            </Card>
          </div>
          <div className="sm:w-1/2">
            <Card>
              <p>isi 2</p>
            </Card>
          </div>
          <div className="sm:w-1/2">
            <Card>
              <p>isi 2</p>
            </Card>
          </div>
        </div>
      </div>
      {/* bottom content end*/}
    </MainLayout>
  );
};

export default BalancePage;