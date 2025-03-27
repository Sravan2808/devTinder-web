import { useNavigate } from "react-router";

const Error = () => {
  const Navigate = useNavigate();
  const Login = () => {
    Navigate("/login");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Modal Popup */}
      <div className="modal modal-open">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Error!</h3>
          <p className="py-4">
            An unexpected issue occurred. Please try again later.
          </p>
          <div className="modal-action">
            <button className="btn btn-error" onClick={Login}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
