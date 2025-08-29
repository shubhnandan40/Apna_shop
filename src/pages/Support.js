import React from "react";

function Support() {
  return (
    <div className="container mt-5">
      <h1 className="text-center text-primary mb-4">Support</h1>
      <p className="text-center">
        We are here to help you! Please reach out to us for any issues, queries,
        or feedback.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <form>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Issue Type</label>
              <select className="form-select">
                <option value="account">Account Issue</option>
                <option value="payment">Payment Problem</option>
                <option value="bug">Report a Bug</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Describe your issue..."
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Submit Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Support;
