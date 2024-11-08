import Card from "../components/Elements/Card";
import MainLayout from "../components/Layouts/MainLayout";

const GoalsPage = () => {
  return (
    <MainLayout type="goals">
      {/* Goals Section */}
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
        </div>
      </div>

      {/* Expenses Goals by Category */}
      <div className="mb-8">
        <div className="text-xl font-semibold mb-4">Expenses Goals by Category</div>
        <div className="flex flex-wrap gap-6">
          <div className="w-full sm:w-1/3">
            <Card>
              <p>isi 3</p>
            </Card>
          </div>
          <div className="w-full sm:w-1/3">
            <Card>
              <p>isi 4</p>
            </Card>
          </div>
          <div className="w-full sm:w-1/3">
            <Card>
              <p>isi 5</p>
            </Card>
          </div>
          <div className="w-full sm:w-1/3">
            <Card>
              <p>isi 6</p>
            </Card>
          </div>
          <div className="w-full sm:w-1/3">
            <Card>
              <p>isi 7</p>
            </Card>
          </div>
          <div className="w-full sm:w-1/3">
            <Card>
              <p>isi 8</p>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default GoalsPage;
