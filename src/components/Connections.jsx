import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnections = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {}
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  if (!connections || connections.length === 0) {
    return <h1 className="text-center text-gray-400 text-xl my-10">No Connections Found</h1>;
  }

  return (
    <div className="text-center my-10">
      <h1 className="text-3xl font-bold text-gray-200 mb-6">Your Connections</h1>

      <div className="flex flex-wrap justify-center gap-6">
        {connections.map((connection) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } = connection;

          return (
            <div
              key={_id}
              className="flex items-center bg-gray-800 text-white rounded-lg shadow-lg p-5 w-[90%] md:w-[60%] lg:w-[45%] xl:w-[35%] hover:shadow-2xl transition-all duration-300"
            >
              {/* Profile Image */}
              <img
                alt="profile"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gray-500 shadow-md object-cover hover:scale-105 transition-transform"
                src={photoUrl}
              />

              {/* User Info */}
              <div className="text-left ml-5">
                <h2 className="font-semibold text-lg">{firstName} {lastName}</h2>
                <p className="text-gray-400">{age && gender && `${age}, ${gender}`}</p>
                <p className="text-gray-300 text-sm">{about}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
