import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import axios from "axios";

const Requests = () => {
  const requests = useSelector((store) => store.requests);
  const dispatch = useDispatch();

  const reviewRequest = async (status, _id) => {
    try {
      await axios.post(
        `${BASE_URL}/request/review/${status}/${_id}`,
        {},
        { withCredentials: true }
      );
      dispatch(removeRequest(_id));
    } catch (err) {}
  };

  const fetchRequests = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/user/requests/received`, {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (err) {}
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (!requests || requests.length === 0) {
    return <h1 className="flex justify-center my-10 text-gray-400 text-xl">No Requests Found</h1>;
  }

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-3xl mb-6 text-gray-200">Connection Requests</h1>

      {requests.map((request) => {
        const { _id, firstName, lastName, photoUrl, age, gender, about } = request.fromUserId;

        return (
          <div
            key={_id}
            className="flex items-center justify-between bg-gray-800 text-white rounded-lg shadow-lg w-2/3 mx-auto p-5 mb-4 hover:shadow-2xl transition-all duration-300"
          >
            {/* Profile Image */}
            <div className="flex items-center">
              <img
                alt="photo"
                className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-gray-500 shadow-md hover:scale-105 transition-transform"
                src={photoUrl}
              />
              <div className="text-left ml-4">
                <h2 className="font-semibold text-lg">{firstName} {lastName}</h2>
                <p className="text-gray-400">{age && gender && `${age}, ${gender}`}</p>
                <p className="text-gray-300 text-sm">{about}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-md transition-all"
                onClick={() => reviewRequest("rejected", request._id)}
              >
                Reject
              </button>
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition-all"
                onClick={() => reviewRequest("accepted", request._id)}
              >
                Accept
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
