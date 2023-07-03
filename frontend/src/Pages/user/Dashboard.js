import React from "react";
import DashboardLayout from "../../Layout/DashboardLayout";
import CardFour from "../../Components/CardFour.jsx";
import CardOne from "../../Components/CardOne.jsx";
import CardThree from "../../Components/CardThree.jsx";
import CardTwo from "../../Components/CardTwo.jsx";

// import ChartOne from "../../Components/ChartOne.jsx";
// import ChartThree from "../../Components/ChartThree.jsx";
// import ChartTwo from "../../Components/ChartTwo.jsx";


function Dashboard() {
  return (
    <DashboardLayout>
      <div className="w-full h-full bg-bodydark ">

          {/* footer js */}
            

          {/* footer end */}
      <section className="h-full flex flex-col justify-center space-y-10 md:space-y-0 md:space-x-16 items-center py-10 mx-5 md:mx-0 md:my-0">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
            <CardOne />
            <CardTwo />
            <CardThree />
            <CardFour />
          </div>
          <div className="pt-10 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
         
          </div>{" "}
        </section>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;
