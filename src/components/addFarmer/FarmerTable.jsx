import React from "react";

const FarmerTable = () => {
  return (
    <div className="container-fluid">
      <div className="row p-md-5 pt-md-5 p-2">
        <div className="col-12 ">
          <div class="scroll-container">
            <div class="scroll-content">
              <table class="table table-bordered">
                <thead>
                  <tr>
                    <th colspan="2">#</th>
                    <th colspan="3">Number of Trees</th>
                    <th colspan="3">Carbon Sequestration (in tonnes in 50 ha.)</th>
                    <th colspan="1">Total Carbon Sequestration (in tonnes in 50 ha.)</th>
                  </tr>
                  <tr>
                    <th>Plantation</th>
                    <th>Plantation Type</th>
                    <th>2021</th>
                    <th>2022</th>
                    <th>2023</th>
                    <th>2021</th>
                    <th>2022</th>
                    <th>2023</th>
                    <th>2021-2023</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Primary </td>
                    <td>Cardamom</td>
                    <td>600</td>
                    <td>700</td>
                    <td>780</td>
                    <td>150</td>
                    <td>@165</td>
                    <td>180</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <td>Secondary (Interplantation)</td>
                    <td>Black Pepper</td>
                    <td>50</td>
                    <td>56</td>
                    <td>70</td>
                    <td>30</td>
                    <td>45</td>
                    <td>50</td>
                    <td>125</td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FarmerTable;
