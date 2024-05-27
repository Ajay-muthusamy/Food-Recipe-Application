import React from "react";

const footer = () => {
  return (
    <div>
      <footer class="py-5 text-center text-body-secondary bg-dark">
        <div className="container-fluid bg-dark">
          <div className="image d-flex justify-content-center">
            <img
              src="https://www.foodygrocery.com/uploads/b/12c90fb61feda8cdc51385934696ac769233690ddce6973faba7b632e9a3cf39/Foody%20logo%20png%20with%20stroke2_1628835214.png?width=1200"
              alt=""
              style={{ width: "20%" }}
            />
          </div>
          <div className="link">
            <ul className="text-white d-flex justify-content-center gap-5 mt-2 list-unstyled">
              <li>Privacy and Settings</li>
              <li>Foody Service</li>
              <li>Help</li>
            </ul>
          </div>
        </div>

        <p class="mb-0">
          <a href="#">Back</a>
        </p>
      </footer>
    </div>
  );
};

export default footer;
