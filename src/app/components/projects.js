import pizzabacker from "../../../public/pizzabacker.png";
import pizzacustomer from "../../../public/pizzacustomer.png";
import pizzadelivery from "../../../public/pizzadelivery.png";
import pizzamenu from "../../../public/pizzamenu.png";
import warehousehistory from "../../../public/warehouse-history.png";
import warehousehome from "../../../public/warehouse-home.png";
import warehousesupplier from "../../../public/warehouse-supplier.png";
import warehousetransaction from "../../../public/warehouse-transaction.png";
import ImageSlider from "../ImageSlider";
export default function Projects() {
  const pizzaSlides = [
    {
      img: pizzamenu,
      title: "Menu Page",
    },
    {
      img: pizzacustomer,
      title: "Customer Page",
    },
    {
      img: pizzabacker,
      title: "Backer Page",
    },
    {
      img: pizzadelivery,
      title: "Delivery Page",
    },
  ];

  const warehouseSlides = [
    {
      img: warehousehome,
      title: "Home Page",
    },
    {
      img: warehousesupplier,
      title: "Supplier Page",
    },
    {
      img: warehousetransaction,
      title: "Transaction Page",
    },
    {
      img: warehousehistory,
      title: "History Page",
    },
  ];
  return (
    <section className="min-h-screen pb-40 z-10" id="projects">
      <div className=" pt-14">
        <h2 className="text-3xl md:text-5xl text-teal-600 font-medium">
          Projects
        </h2>
        <p className="text-md md:text-md md:text-base py-5 leading-5 md:leading-8 text-gray-800 text-justify">
          Here are some of my projects that I&apos;ve been working on.
        </p>
      </div>
      <div className="flex flex-col max-w-4xl w-full 2xl:gap-28 mx-auto gap-5">
        <div className="bg-white shadow-lg rounded-lg flex 2xl:flex-row flex-col mx-auto">
          <div className="w-full h-full min-h-min">
            <ImageSlider images={warehouseSlides} />
          </div>
          <div className="2xl:w-6/12 flex flex-col justify-between">
            <div className="p-4">
              <h1 className="font-bold 2xl:text-xl text-sm mb-2">
                Warehouse Management System
              </h1>
              <p className="text-gray-700 lg:text-base text-xs">
                A web application for a warehouse management system. The
                application allows users to manage products, transactions, and
                customers.
              </p>
            </div>
            <div className="">
              <div className="flex p-4 border-t justify-end border-gray-300 text-gray-700">
                <div className="flex-none inline-flex items-center">
                  <a
                    href="https://github.com/GBT-Developer/warehouse-management-system/tree/demo"
                    rel="noreferrer"
                    target={"_blank"}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-sm"
                  >
                    Demo
                  </a>
                  <section />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <section className=" pt-40 2xl:pt-0" /> */}
        <div className="my-28 md:my-12 bg-white shadow-lg rounded-lg flex 2xl:flex-row flex-col mx-auto">
          <div className="w-full h-full min-h-min">
            <ImageSlider images={pizzaSlides} />
          </div>
          <div className="2xl:w-6/12 flex flex-col justify-between">
            <div className="p-4">
              <h1 className="font-bold 2xl:text-xl text-sm mb-2">
                Pizza Service
              </h1>
              <p className="text-gray-700 lg:text-base text-xs">
                A web application for a pizza service. The application allows
                users to order pizza, track the order, and admin to change the
                order status.
              </p>
            </div>
            <div className="">
              <div className="flex p-4 border-t justify-end border-gray-300 text-gray-700">
                <div className="flex-none inline-flex items-center">
                  <a
                    href="https://github.com/BernhardRicardo/pizza-service"
                    rel="noreferrer"
                    target={"_blank"}
                    className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow text-sm"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
