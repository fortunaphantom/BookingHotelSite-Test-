import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "./Slider";
import { getHotelImages } from "../../redux/actions/hotels";

function Welcome() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  useEffect(() => {
    getHotelImages(dispatch);
  }, []); // eslint-disable-line

  return (
    <section>
      <div className="mt-8 p-8 xl:px-48 ">
        <div className="text-center ">
          <h2 className="text-4xl font-semibold text-gray-800 font-serif">
            Welcome To Our Hotel Management site!
          </h2>

          <p className="text-gray-600 mt-5">
            Our Site provides excellent condition!
          </p>
        </div>

        <Slider images={state.hotels.images} />
      </div>
    </section>
  );
}

export default Welcome;
