import { reviews } from "../constants";

const Reviews = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 text-black">
        Reviews
      </h2>
      <div className="flex flex-wrap justify-center">
        {reviews.map((review, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
            <div className="rounded-md p-6 text-md border border-neutral-800">
              <p>"{review.text}"</p>
              <div className="flex mt-8 items-start">
                <div>
                  <h6>{review.user}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
