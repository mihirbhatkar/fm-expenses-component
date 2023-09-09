import data from "./data.json";

function App() {
  let total = 0;
  let maxAmount = data[0].amount;
  for (let item of data) {
    total += item.amount;
    maxAmount = maxAmount < item.amount ? item.amount : maxAmount;
  }
  const scalingFactor = total / maxAmount; // done so that the bar graph looks bigger

  return (
    <>
      <div className="grid min-h-screen place-items-center bg-neu-cream">
        <article className="flex max-w-md flex-col gap-4 p-4">
          <div className="bg-prim-soft-red p-6  rounded-xl shadow-md items-center justify-between flex  w-full">
            <div className="flex flex-col gap-2 text-white h-full ">
              <span className="font-[400] text-sm">My balance</span>
              <span className="text-3xl font-[700]">$921.48</span>
            </div>
            <img className="" src="./logo.svg" alt="company-logo" />
          </div>
          <div className="shadow-md flex flex-col bg-white py-6 px-8 rounded-xl items-center gap-2 w-full ">
            <h1 className="self-start text-2xl font-[700]">
              Spending - Last 7 days
            </h1>

            <div
              style={{ height: 200 }}
              className="grid mt-4 grid-cols-7 gap-3 w-full items-end"
            >
              {data.map((item) => {
                return (
                  <div
                    key={item.amount}
                    className={`flex flex-col gap-1 text-sm items-center relative before:hover:content-[attr(data-tip)] before:p-2 before:absolute before:top-[-44px] before:content-none before:text-white before:bg-black before:rounded text-gray-400`}
                    data-tip={`$${item.amount}`}
                  >
                    <canvas
                      height={(item.amount / total) * 200 * scalingFactor}
                      width="35"
                      className={`${
                        item.amount === maxAmount
                          ? "bg-prim-cyan"
                          : "bg-prim-soft-red"
                      } rounded hover:cursor-pointer hover:opacity-70 `}
                    ></canvas>
                    <span>{item.day}</span>
                  </div>
                );
              })}
            </div>

            <hr className="border mt-8 border-gray-200 rounded-xl w-full" />
            <div className="flex flex-col my-2 w-full ">
              <span className="self-start text-sm text-gray-400">
                Total this month
              </span>
              <div className="flex justify-between items-center w-full">
                <h2 className="text-4xl font-[700]">$478.33</h2>
                <div className="flex text-sm flex-col items-end justify-center">
                  <span className="font-[700]">+2.4%</span>
                  <span className="text-gray-400">from last month</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default App;
