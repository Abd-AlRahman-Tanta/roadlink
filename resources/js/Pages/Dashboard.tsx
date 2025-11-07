import Headline from "@/Components/Common/Headline";
import PrimaryButton from "@/Components/Button";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <Head>
        <title>Dashboard</title>
      </Head>
    </DashboardLayout>
  );
};

export default Dashboard;
