import React from "react";
import DonationForm from "./DonationForm";

// const HelpCard = ({ title, desc }) => {
//   return (
//     <div className="group w-11/12 max-sm:w-full h-[200px] border-2 rounded-xl p-8 max-sm:p-4 flex flex-col gap-5  justify-center hover:bg-yellow-300 ease-in-out duration-300">
//       <div>
//         <h3 className="text-2xl text-[#f47445] font-semibold group-hover:text-black ease-in-out duration-300">
//           {title}
//         </h3>
//       </div>
//       <div>
//         <p className="font-light text-[15px] ">{desc}</p>
//       </div>
//     </div>
//   );
// };

const DonateSection = () => {
  // const helpCardData = [
  //   {
  //     title: "Education",
  //     desc: "We conduct awareness drives to highlight the importance of education and ensure that all children are enrolled in school.",
  //   },
  //   {
  //     title: "Health and Nutrition",
  //     desc: "We ensure children receive timely vaccinations and sufficient nutrition by connecting them to government healthcare services",
  //   },
  //   {
  //     title: "Protection",
  //     desc: "We prevent child marriage and child labour by creating awareness about the harmful effects of these practices. Additionally, we connect families with MNREGA job opportunities.",
  //   },
  // ];

  return (
    <div className="grid lg:grid-cols-[.7fr_auto_auto] max-md:grid-cols-1 gap-8 p-12 mt-8 max-lg:p-4  ">
      {/* Donation Form */}
      <div className="lg:col-[3/4] max-sm:w-full justify-self-center">
        <div className="lg:sticky lg:top-[100px]">
          <DonationForm />
        </div>
      </div>

      {/* Charity Details */}
      <div className="lg:col-[1/3] lg:row-[1] max-h-full px-4 max-sm:p-0">
        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-4xl font-semibold text-neutral-700">
              What <span className="gloria-font text-orange-500">we do</span>
            </h2>
            <p className="font-light text-[15px] ">
              As we step into 2024 let us continue this journey of unlocking
              potential of children. Together, we can ensure that every child
              has the opportunity to explore, learn, and grow with the help of
              education.
            </p>
            <p className="font-light text-[15px]">
              Children are the foundation of our country. It is crucial to
              ensure that all children have access to quality education, proper
              nutrition, and a safe environment, so they can reach their full
              potential. Therefore, Care For All (CFA) has been working towards
              helping children achieve their dreams and providing them with the
              childhoods they truly deserve.
            </p>
          </div>

          <div className="flex flex-col gap-4  ">
            <h2 className="text-3xl font-semibold text-neutral-700">
              How will your
              <span className="gloria-font text-orange-500">
                {" "}
                donation help?
              </span>
            </h2>
            <p className="font-light text-[15px] ">
              CFA currently operates 102 projects in 19 states and 80 districts,
              including Mumbai, Pune, Bangalore, Kolkata, and Chennai. With your
              support, we address children’s critical needs by working with
              parents, teachers, Anganwadi workers, communities, district and
              state-level governments as well as the children themselves. We
              work on changing behaviours and practices at the grassroots level
              and influencing public policy at a systemic level – thereby
              creating an ecosystem where children are made the nation’s
              priority. Our key focus areas include –
            </p>
          </div>

          {/* <div className="flex flex-col gap-4 items-center">
            {helpCardData.map((card) => {
              return <HelpCard title={card.title} desc={card.desc} />;
            })}
          </div> */}

          <div className="flex flex-col gap-6 font-light ">
            <h3 className="text-lg font-bold">Our Impact in 2022-23:</h3>
            <ul className="list-disc ml-8 flex flex-col gap-8">
              <li>
                <span className="font-bold">13,54,730 children impacted</span>{" "}
                overall
              </li>
              <li className="font-bold">2,14,537 children in school</li>
              <li>
                <span className="font-bold">
                  Over 30,000 children re-enrolled in school
                </span>{" "}
                through CFA’s Academic and Psychosocial Support Centres
              </li>
              <li>
                <span className="font-bold">
                  600+ kitchen gardens set up across 7 states
                </span>
                , as a sustainable solution towards nutrition
              </li>
              <li>
                <span className="font-bold">6,471 children protected</span> from
                child labour/ marriage/ trafficking
              </li>
            </ul>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              inventore quibusdam rem? Reiciendis, velit laudantium molestias
              aspernatur recusandae sequi ipsum alias impedit, cupiditate, at
              quae corrupti quos voluptas ipsa ab natus perferendis distinctio?
              Quidem velit repellendus est, reiciendis harum qui!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae ipsa soluta labore provident amet ab ipsum consectetur
              quos earum blanditiis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateSection;
