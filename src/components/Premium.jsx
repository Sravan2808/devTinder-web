import axios from "axios";
import { BASE_URL } from "../utils/constants";

const Premium = () => {
  const handleBuy = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      {
        membershipType: type,
      },
      { withCredentials: true }
    );
    const { amount, keyId, currency, notes, orderId } = order.data;
    // Dialog Box
    const options = {
      key: keyId,
      amount,
      currency,
      name: "Devmatchh",
      description: "Connect to like minded developers",
      order_id: orderId,
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        email: notes.emailId,
        contact: "9999999999",
      },
      theme: {
        color: "#10A27E",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Choose Your Premium Plan</h2>
        <p className="text-lg opacity-70">
          Unlock premium features and take your experience to the next level
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body items-center text-center">
            <div className="avatar placeholder mb-4">
              <div className="bg-neutral text-neutral-content rounded-full w-16">
                <span className="text-2xl">⭐</span>
              </div>
            </div>
            <h3 className="card-title text-2xl mb-2">Silver Membership</h3>
            <p className="opacity-70 mb-4">
              Perfect for getting started with premium features
            </p>

            <div className="mb-23">
              <span className="text-4xl font-bold">500</span>
              <span className="opacity-70">/year</span>
            </div>

            <div className="space-y-3 mb-6 w-full">
              <div className="flex items-center gap-3">
                <div className="badge badge-success badge-sm">✓</div>
                <span>Chat with other people</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="badge badge-success badge-sm">✓</div>
                <span>100 connections Requests per day</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="badge badge-success badge-sm">✓</div>
                <span>Priority support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="badge badge-success badge-sm">✓</div>
                <span>Blue Tick</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="badge badge-success badge-sm">✓</div>
                <span>3 months</span>
              </div>
            </div>

            <div className="card-actions w-full">
              <button
                onClick={() => handleBuy("silver")}
                className="btn btn-outline btn-neutral w-full"
              >
                Choose Silver
              </button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-2xl border-2 border-warning relative">
          <div className="badge badge-warning absolute -top-3 left-1/2 transform -translate-x-1/2 text-warning-content font-semibold">
            Most Popular
          </div>

          <div className="card-body items-center text-center">
            <div className="avatar placeholder mb-4">
              <div className="bg-gradient-to-br from-warning to-amber-600 text-white rounded-full w-16">
                <span className="text-2xl">👑</span>
              </div>
            </div>
            <h3 className="card-title text-2xl mb-2 bg-gradient-to-r from-warning to-amber-600 bg-clip-text text-transparent">
              Gold Membership
            </h3>
            <p className="opacity-70 mb-4">
              Everything you need for professional use
            </p>

            <div className="mb-6">
              <span className="text-4xl font-bold">1000</span>
              <span className="opacity-70">/year</span>
            </div>

            <div className="space-y-3 mb-6 w-full">
              <div className="flex items-center gap-3">
                <div className="badge badge-success badge-sm">✓</div>
                <span>Chat with other people</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="badge badge-success badge-sm">✓</div>
                <span>Infinite connection Requests per day</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="badge badge-success badge-sm">✓</div>
                <span>24/7 premium support</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="badge badge-success badge-sm">✓</div>
                <span>Advanced analytics & reporting</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="badge badge-success badge-sm">✓</div>
                <span>All integrations included</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="badge badge-success badge-sm">✓</div>
                <span>Infinite connectiion requests per day</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="badge badge-success badge-sm">✓</div>
                <span>Blue Tick</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="badge badge-success badge-sm">✓</div>
                <span>6 months Tick</span>
              </div>
            </div>

            <div className="card-actions w-full">
              <button
                onClick={() => handleBuy("gold")}
                className="btn btn-warning w-full text-white"
              >
                Choose Gold
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-sm opacity-60">
          All plans include a 14-day free trial. Cancel anytime.
        </p>
      </div>
    </div>
  );
};

export default Premium;
