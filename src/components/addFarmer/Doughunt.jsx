import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import "./Doughunt.scss"
Chart.register(ArcElement);

const data = {
    datasets: [
        {
            data: [10, 3],
            backgroundColor: ["#99CCFF", "rgba(231,231,231,1)"],
            display: true,
            borderColor: "#D1D6DC",
        },
    ],
};

const Doughunt = () => {
    return (
        <div className="container-fluid ">
            <div className="row justify-content-center position-rel">
                <div className="col-8 text-center">

                    <Doughnut
                        data={data}
                        options={{
                            plugins: {
                                legend: {
                                    display: false,
                                },
                                tooltip: {
                                    enabled: false,
                                },
                            },
                            rotation: -90,
                            circumference: 180,
                            cutout: "80%",
                            maintainAspectRatio: true,
                            responsive: true,
                        }}
                    />
                </div>


                <div >
                    <div className="position-abs"><h3>80%</h3></div>
                </div>
            </div>

        </div>
    );
};

export default Doughunt;
