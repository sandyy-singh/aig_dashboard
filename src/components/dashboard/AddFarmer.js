import "./AddFarmer.scss";
import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const AddFarmer = () => {
  const navigate = useNavigate();
  const [cropsAlso, setCropsAlso] = useState(false);
  const [improvedpractice, setImprovedpractice] = useState(false);
  const [changingFertilizer, setChangingFertilizer] = useState(false);
  const [managementOfManure, setManagementOfManure] = useState(false);
  const [NfixingSpecies, setNfixingSpecies] = useState(false);
  const [coverCropsResidues, setCoverCropsResidues] = useState(false);
  const [improvedTillagePractices, setImprovedTillagePractices] =
    useState(false);
  const [improvedGrazingPractices, setImprovedGrazingPractices] =
    useState(false);
  const [agricultureResidueBurning, setAgricultureResidueBurning] =
    useState(false);
  const [otherProfessionVisible, setOtherProfessionVisible] = useState(false);
  const userId = localStorage.getItem("uid");
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    profession: "",
    number: "",
    email: "",
    address: "",
    NumberOfFarmers: "",
    totalFarmingArea: "",
    AgroforestryInPractice: "",
    projectLocation: "",

    GeographicCoordinates: "",
    ownershipSituation: "",
    documentationLegalLandRights: "",
    areaCroplandGrassland: "",
    projectAreaSize: "",
    ifCropsAlsoAreaOfEachCrop: "",

    objectiveOfProject: "",
    projecWereNotBeUndertaken: "",
    anyImprovedPracticeTheArea: "",
    fertilizerApplicationThenReport: "",
    improvingTheManagementOfManur: "",
    NfixingSpecies: "",

    coverCropsAndCropResidue: "",
    improvedTillagePractices: "",
    plantationsOrAgroforestry: "",
    activityIncludesImprovedGrazing: "",
    avoidanceOfAgricultureResidueBurning: "",
    predominantlyOrganicSoils: "",
    projectLocatedWetlands: "",
  });

  // const [isValidMobile, setIsValidMobile] = useState(true);
  // const [isValidAdhar, setIsValidAdhar] = useState(true);

  // const handleMobileNo = (e) => {
  //   const inputMobile = e.target.value;
  //   setEditPhoneNumber(inputMobile);
  //   const mobilePattern = /^[0-9]{10}$/;
  //   setIsValidMobile(mobilePattern.test(inputMobile));
  // };

  // const handleAdharNo = (e) => {
  //   const inputAdhar = e.target.value;
  //   setEditAadharPanCard(inputAdhar);
  //   const adharPattern = /^[0-9]{12}$/;
  //   setIsValidAdhar(adharPattern.test(inputAdhar));
  // };

  //access all data from fire store

  // const collectionRef = collection(
  //     firestore,
  //     `AgroforestryFormData/${userId}/Agroforestry_reg`
  // );
  // const [fromDbVal, setfromDbVal] = useState([]);
  // useEffect(() => {
  //     if (!localStorage.getItem("token")) {
  //         navigate("/login");
  //     }
  //     const listdata = async () => {
  //         const dbVal = await getDocs(collectionRef);
  //         setfromDbVal(dbVal.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
  //         // console.log("fromDbVal", fromDbVal);
  //     };
  //     listdata();
  // }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleProfessionChange = (e) => {
    const { value } = e.target;
    setFormData({
      ...formData,
      profession: value,
    });

    if (value === "Others") {
      setOtherProfessionVisible(true);
    } else {
      setOtherProfessionVisible(false);
    }
  };
  // const HandleEditVal = async (
  //     id,
  //     name,
  //     profession,
  //     number,
  //     email,
  //     address,
  //     NumberOfFarmers,
  //     totalFarmingArea,
  //     AgroforestryInPractice,
  //     projectLocation,

  //     GeographicCoordinates,
  //     ownershipSituation,
  //     documentationLegalLandRights,
  //     areaCroplandGrassland,
  //     projectAreaSize,
  //     ifCropsAlsoAreaOfEachCrop,

  //     objectiveOfProject,
  //     projecWereNotBeUndertaken,
  //     anyImprovedPracticeTheArea,
  //     fertilizerApplicationThenReport,
  //     improvingTheManagementOfManur,
  //     NfixingSpecies,

  //     coverCropsAndCropResidue,
  //     improvedTillagePractices,
  //     plantationsOrAgroforestry,
  //     activityIncludesImprovedGrazing,
  //     avoidanceOfAgricultureResidueBurning,
  //     predominantlyOrganicSoils,
  //     projectLocatedWetlands
  // ) => {
  //     setFormData({
  //         id,
  //         name,
  //         profession,
  //         number,
  //         email,
  //         address,
  //         NumberOfFarmers,
  //         totalFarmingArea,
  //         AgroforestryInPractice,
  //         projectLocation,

  //         GeographicCoordinates,
  //         ownershipSituation,
  //         documentationLegalLandRights,
  //         areaCroplandGrassland,
  //         projectAreaSize,
  //         ifCropsAlsoAreaOfEachCrop,

  //         objectiveOfProject,
  //         projecWereNotBeUndertaken,
  //         anyImprovedPracticeTheArea,
  //         fertilizerApplicationThenReport,
  //         improvingTheManagementOfManur,
  //         NfixingSpecies,

  //         coverCropsAndCropResidue,
  //         improvedTillagePractices,
  //         plantationsOrAgroforestry,
  //         activityIncludesImprovedGrazing,
  //         avoidanceOfAgricultureResidueBurning,
  //         predominantlyOrganicSoils,
  //         projectLocatedWetlands,
  //     });
  //     // setEditFarmerName(farmerName);
  //     // setEditAddress(address);
  //     // setEditPhoneNumber(phoneNumber);
  //     // setEditAadharPanCard(aadharPanCard);
  //     // setEditLandHolding(landHolding);
  //     // setEditPreviousSeason(previousSeason);
  //     // setEditThisSeason(thisSeason);

  //     // setEditIsCropBeforeSowing(isCropBeforeSowing);
  //     // setEditIsCoverCropping(isCoverCropping);
  //     // setEditIsIntercropping(isIntercropping);
  //     // setEditIsBioFertilizers(isBioFertilizers);
  //     // setEditIsAgroforestry(isAgroforestry);
  //     // setId(id);
  //     setUpdateForm(true);
  // };

  // const [errors, setErrors] = useState({
  //     number: "",
  //     email: "",
  // });

  // const validatePhoneNumber = (phoneNumber) => {
  //     const phoneNumberPattern = /^\d{10}$/; // Assuming a 10-digit phone number format
  //     return phoneNumberPattern.test(phoneNumber);
  // };
  // const validateEmail = (email) => {
  //     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //     return emailPattern.test(email);
  // };

  // const editAndSave = async (e) => {
  //     e.preventDefault();
  //     // if (!isValidMobile) {
  //     //   alert("Please enter valid 10-digit mobile number");
  //     //   setEditPhoneNumber("");
  //     //   return;
  //     // }
  //     // if (!isValidAdhar) {
  //     //   alert("Please enter valid AadharNumber ");
  //     //   setEditAadharPanCard("");
  //     //   return;

  //     const { number, email } = formData;
  //     console.log(number, email);

  //     const newErrors = {
  //         number: !validatePhoneNumber(number) ? "Invalid phone number" : "",
  //         email: !validateEmail(email) ? "Invalid email address" : "",
  //     };
  //     setErrors(newErrors);

  //     if (newErrors.number || newErrors.email) {
  //         return;
  //     }

  //     if (formData.profession === "") {
  //         alert("Please select your profession.");
  //         return;
  //     }

  //     if (cropsAlso === false) {
  //         setFormData((formData.ifCropsAlsoAreaOfEachCrop = ""));
  //     }
  //     if (improvedpractice === false) {
  //         setFormData((formData.anyImprovedPracticeTheArea = ""));
  //     }

  //     if (changingFertilizer === false) {
  //         setFormData((formData.fertilizerApplicationThenReport = ""));
  //     }

  //     if (managementOfManure === false) {
  //         setFormData((formData.improvingTheManagementOfManur = ""));
  //     }

  //     if (coverCropsResidues === false) {
  //         setFormData((formData.coverCropsAndCropResidue = ""));
  //     }

  //     if (NfixingSpecies === false) {
  //         setFormData((formData.NfixingSpecies = ""));
  //     }

  //     if (improvedTillagePractices === false) {
  //         setFormData((formData.improvedTillagePractices = ""));
  //     }

  //     if (improvedGrazingPractices === false) {
  //         setFormData((formData.activityIncludesImprovedGrazing = ""));
  //     }

  //     if (agricultureResidueBurning === false) {
  //         setFormData((formData.avoidanceOfAgricultureResidueBurning = ""));
  //     }

  //     const updateData = doc(
  //         firestore,
  //         `AgroforestryFormData/${userId}/Agroforestry_reg`,
  //         formData.id
  //     );

  //     try {
  //         const snpshot = await updateDoc(updateData, formData);
  //         console.log(formData);
  //         console.log(snpshot);
  //         alert("thank for update");
  //         console.log(snpshot);
  //     } catch (err) {
  //         console.log(err);
  //         alert("something going wrong");
  //     }
  //     navigate("/");
  //     window.location.reload();
  // };

  const [showForm, setShowForm] = useState(false);
  const [showInput, setShowInput] = useState(true);
  const goToForm = () => {
    setShowForm(true);
    setShowInput(false)
  };
  return (
    <div className="container-fluid parent">
      {showInput && (
        <div className="row h-100 d-flex justify-content-center align-items-center flex-column">
          <div className="col-sm-6 d-flex justify-content-center align-items-center inputfarmer">
            <input
              className="m-2 form-control inputfarmerid"
              type="text"
              placeholder="Enter Farmer ID"
            />
          </div>
          <div className="col-sm-6  mt-5 text-center">
            <button
              className="btn bg-success btn-lg px-5 text-white"
              onClick={goToForm}
            >
              Next
            </button>
          </div>
        </div>
      )}

      {showForm && (
        <div className="editForm regist ">
          <div  className="">
            <div className="container-fluid     ">
              <div className=" row  d-flex justify-content-center align-items-center   ">
                <h1 className="text-center text-dark p-4">Agroforestry Form</h1>
                <div className="col-11 col-md-11 col-lg-10 border rounded border-secondary p-sm-4 mb-5 shadow AgroforestryBg  ">
                  <form autoComplete="off" className="form-group ">
                    <h3 className="text-center text-success mt-3">
                      Basic Information
                    </h3>
                    <div className="row d-flex justify-content-center align-items-center mb-4">
                      <div className="col-sm-5 mt-3">
                        <label className="labels-1" htmlFor="Name">
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control form-inputs "
                          id="Name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter Name"
                          required
                        />
                      </div>
                      <div className="col-sm-5 mt-3 ">
                        <label htmlFor="whoYouAre">Who you are?</label>
                        <select
                          className="form-select form-select "
                          aria-label=".form-select-lg example"
                          name="whoYouAre"
                          id="whoYouAre"
                          value={formData.profession}
                          onChange={handleProfessionChange}
                        >
                          <option value="">
                            ---: select: who you are?:---
                          </option>
                          <option value="Farmer">Farmer</option>
                          <option value="FPO">FPO</option>
                          <option value="Organic Farm">Organic Farm</option>
                          <option value="Agri-MNC">Agri-MNC</option>
                          <option value="Agri-Services Company">
                            Agri-Services Company
                          </option>
                          <option value="Agri-Supply Chain">
                            Agri-Supply Chain
                          </option>
                          <option value="NGO">
                            NGO (Agri-/ Forestry focused)
                          </option>
                          <option value="Government">
                            Government (State/ Central)
                          </option>
                          <option
                            onClick={() => setAgricultureResidueBurning(true)}
                            value="Others"
                          >
                            Other
                          </option>
                        </select>
                      </div>
                      {otherProfessionVisible && (
                        <div className="col-sm-5 mt-3 ">
                          <label className="text-primary">
                            Enter your profession
                          </label>
                          <input
                            type="text"
                            name="profession"
                            placeholder="Enter your profession"
                            value={formData.profession}
                            onChange={handleInputChange}
                            className="form-control"
                          />
                        </div>
                      )}

                      <div className="col-sm-5 mt-3">
                        <label className="labels-1" htmlFor="number">
                          Contact Number
                        </label>
                        <input
                          type="number"
                          className="form-control form-inputs "
                          id="number"
                          name="number"
                          placeholder="Enter Contact Number"
                          value={formData.number}
                          onChange={handleInputChange}
                          required
                        />
                        <p className="text-danger"></p>
                      </div>

                      <div className="col-sm-5 mt-3">
                        <label className="labels-1" htmlFor="E-mail">
                          E-mail
                        </label>
                        <input
                          type="email"
                          className="form-control form-inputs "
                          id="E-mail"
                          placeholder="Enter E-mail"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <p className="text-danger"></p>
                      </div>
                      <div className="col-sm-5 mt-3">
                        <label className="labels-1" htmlFor="Address">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control form-inputs "
                          id="Address"
                          placeholder="Enter Address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="col-sm-5 mt-3">
                        <label className="labels-1" htmlFor="NumberOfFarmers">
                          Total Number of Farmers (in case of FPO/
                          Agri-Services/ Agri-Supply Chain Company/ NGO)
                        </label>
                        <input
                          type="number"
                          className="form-control form-inputs "
                          name="NumberOfFarmers"
                          id="NumberOfFarmers"
                          placeholder="Enter Total Number of Farmers"
                          onChange={handleInputChange}
                          value={formData.NumberOfFarmers}
                          required
                        />
                      </div>
                      <div className="col-sm-5 mt-3">
                        <label className="labels-1" htmlFor="totalFarmingArea">
                          Total Farming Area (in Acres)
                        </label>
                        <input
                          type="number"
                          className="form-control form-inputs "
                          id="totalFarmingArea"
                          placeholder="Enter Total Farming Area"
                          name="totalFarmingArea"
                          onChange={handleInputChange}
                          value={formData.totalFarmingArea}
                          required
                        />
                      </div>
                      <div className="col-sm-5 mt-3">
                        <label
                          className="labels-1"
                          htmlFor="AgroforestryInPractice"
                        >
                          Type of Crops, Cover-crops, Agroforestry in practice?
                        </label>
                        <input
                          type="text"
                          className="form-control form-inputs "
                          id="AgroforestryInPractice"
                          placeholder="Enter Type of Crops"
                          name="AgroforestryInPractice"
                          onChange={handleInputChange}
                          value={formData.AgroforestryInPractice}
                          required
                        />
                      </div>
                    </div>

                    <h3 className="text-center  text-success mt-3">
                      Technical information
                    </h3>
                    <div className="row d-flex justify-content-center align-items-center">
                      <div className="col-sm-5 mt-3">
                        <label className="labels-1" htmlFor="projectLocation">
                          Project location (country, state, department,
                          municipality, sector)
                        </label>
                        <input
                          type="text"
                          className="form-control form-inputs "
                          id="projectLocation"
                          placeholder="your answer"
                          name="projectLocation"
                          value={formData.projectLocation}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-5 mt-3 ">
                        <label
                          className="labels-1"
                          htmlFor="GeographicCoordinates"
                        >
                          Geographic coordinates of the project location
                        </label>
                        <input
                          type="text"
                          className="form-control form-inputs "
                          id="GeographicCoordinates"
                          placeholder="your answer"
                          name="GeographicCoordinates"
                          value={formData.GeographicCoordinates}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="col-sm-5 mt-4">
                        <label
                          className="labels-1"
                          htmlFor="ownershipSituation"
                        >
                          What is the land ownership situation?(Land records
                          available: Yes/ No)
                        </label>
                        <input
                          type="text"
                          className="form-control form-inputs "
                          id="ownershipSituation"
                          placeholder="your answer"
                          name="ownershipSituation"
                          value={formData.ownershipSituation}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-5 mt-2">
                        <label
                          className="labels-1"
                          htmlFor="documentationLegalLandRights"
                        >
                          What documentation can be used to prove legal land
                          rights? Please specify all applicable options
                        </label>
                        <input
                          type="text"
                          className="form-control form-inputs "
                          id="documentationLegalLandRights"
                          placeholder="your answer"
                          name="documentationLegalLandRights"
                          value={formData.documentationLegalLandRights}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-5 mt-3 ">
                        <label
                          className="labels-1"
                          htmlFor="areaCroplandGrassland"
                        >
                          Is the project area cropland or grassland?
                        </label>
                        <input
                          type="text"
                          className="form-control form-inputs "
                          id="areaCroplandGrassland"
                          placeholder="your answer"
                          name="areaCroplandGrassland"
                          value={formData.areaCroplandGrassland}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-5 mt-3">
                        <label className="labels-1" htmlFor="projectAreaSize">
                          What is the project area's size? (in acres)
                        </label>
                        <input
                          type="text"
                          className="form-control form-inputs "
                          id="projectAreaSize"
                          placeholder="your answer"
                          name="projectAreaSize"
                          value={formData.projectAreaSize}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-5 mt-3">
                        <label htmlFor="cropsAlso">
                          Please specify if there will be crops also
                        </label>
                        <div id="cropsAlso">
                          <div>
                            Yes
                            <input
                              className="radio"
                              type="radio"
                              name="farming-area"
                              value="Yes"
                              onClick={() => setCropsAlso(true)}
                              required
                            />
                          </div>
                          <div>
                            NO
                            <input
                              className="radio"
                              type="radio"
                              name="farming-area"
                              value="NO"
                              onClick={() => setCropsAlso(false)}
                            />
                          </div>
                        </div>
                      </div>

                      {cropsAlso && (
                        <div className="col-sm-5 mt-3">
                          <label htmlFor="cropsAlso1" className="text-primary">
                            What is the area of each crop (acres)?
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="cropsAlso1"
                            placeholder="your answer"
                            name="ifCropsAlsoAreaOfEachCrop"
                            value={formData.ifCropsAlsoAreaOfEachCrop}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      )}

                      <div className="col-sm-5 mt-3">
                        <label
                          className="labels-1"
                          htmlFor="objectiveOfProject"
                        >
                          What is the objective of the project? Describe
                          briefly.
                        </label>
                        <input
                          type="text"
                          className="form-control form-inputs "
                          id="objectiveOfProject"
                          placeholder="your answer"
                          name="objectiveOfProject"
                          value={formData.objectiveOfProject}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-sm-5 mt-3 ">
                        <label
                          className="labels-1"
                          htmlFor="projecWereNotBeUndertaken"
                        >
                          What would happen on the property if the proposed
                          project were not to be undertaken? Have alternative
                          land uses been pursued? Describe briefly.
                        </label>
                        <input
                          type="text"
                          className="form-control form-inputs "
                          id="projecWereNotBeUndertaken"
                          placeholder="your answer"
                          name="projecWereNotBeUndertaken"
                          value={formData.projecWereNotBeUndertaken}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="col-sm-5 mt-3">
                        <label htmlFor="Improvedpractice">
                          Are there any improved practice's that will be
                          applied?
                        </label>
                        <div id="Improvedpractice">
                          <div>
                            Yes
                            <input
                              className="radio"
                              type="radio"
                              name="Improvedpractice"
                              value="Yes"
                              onClick={() => setImprovedpractice(true)}
                              required
                            />
                          </div>
                          <div>
                            NO
                            <input
                              className="radio"
                              type="radio"
                              name="Improvedpractice"
                              value="NO"
                              onClick={() => setImprovedpractice(false)}
                            />
                          </div>
                        </div>
                      </div>

                      {improvedpractice && (
                        <div className="col-sm-5 mt-3 ">
                          <label
                            htmlFor="improvedpractice1"
                            className="text-primary"
                          >
                            Specify the area where the improved practice listed
                            above will be applied?{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control "
                            id="improvedpractice1"
                            placeholder="your answer"
                            name="anyImprovedPracticeTheArea"
                            value={formData.anyImprovedPracticeTheArea}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      )}

                      <div className="col-sm-5 mt-3">
                        <label htmlFor="ChangingFertilizer">
                          If the project activity includes reducing or changing
                          fertilizer application
                        </label>
                        <div id="ChangingFertilizer">
                          <div>
                            Yes
                            <input
                              className="radio"
                              type="radio"
                              name="ChangingFertilizer"
                              value="Yes"
                              onClick={() => setChangingFertilizer(true)}
                              required
                            />
                          </div>
                          <div>
                            NO
                            <input
                              className="radio"
                              type="radio"
                              name="ChangingFertilizer"
                              value="NO"
                              onClick={() => setChangingFertilizer(false)}
                            />
                          </div>
                        </div>
                      </div>

                      {changingFertilizer && (
                        <div className="col-sm-5  mt-3">
                          <label
                            htmlFor="changingFertilizer1"
                            className="text-primary"
                          >
                            if required, then report the following parameter:
                            Existing or Baseline Scenario
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="changingFertilizer1"
                            placeholder="your answer"
                            name="fertilizerApplicationThenReport"
                            value={formData.fertilizerApplicationThenReport}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      )}
                      <div className="col-sm-5 mt-3">
                        <label htmlFor="managementOfManure">
                          if the project activity includes improving the
                          management of manure and manure application
                        </label>
                        <div id="managementOfManure">
                          <div>
                            Yes
                            <input
                              className="radio"
                              type="radio"
                              name="managementOfManure"
                              value="Yes"
                              onClick={() => setManagementOfManure(true)}
                              required
                            />
                          </div>
                          <div>
                            NO
                            <input
                              className="radio"
                              type="radio"
                              name="managementOfManure"
                              value="NO"
                              onClick={() => setManagementOfManure(false)}
                            />
                          </div>
                        </div>
                      </div>
                      {managementOfManure && (
                        <div className="col-sm-5 mt-3">
                          <label
                            htmlFor="managementOfManure1"
                            className="text-primary"
                          >
                            if required, then report the following parameter:
                            Existing or Baseline Scenario
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="managementOfManure1"
                            placeholder="your answer"
                            name="improvingTheManagementOfManur"
                            value={formData.improvingTheManagementOfManur}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      )}
                      <div className="col-sm-5 mt-3">
                        <label htmlFor="NfixingSpecies">
                          If the area cropped or planted with N-fixing species
                          in the project is more than 50% larger than the area
                          under N-fixing species in the baseline
                        </label>
                        <div id="NfixingSpecies">
                          <div>
                            Yes
                            <input
                              className="radio"
                              type="radio"
                              name="NfixingSpecies"
                              value="Yes"
                              onClick={() => setNfixingSpecies(true)}
                              required
                            />
                          </div>
                          <div>
                            NO
                            <input
                              className="radio"
                              type="radio"
                              name="NfixingSpecies"
                              value="NO"
                              onClick={() => setNfixingSpecies(false)}
                            />
                          </div>
                        </div>
                      </div>
                      {NfixingSpecies && (
                        <div className="col-sm-5 mt-3">
                          <label
                            htmlFor="NfixingSpecies1"
                            className="text-primary"
                          >
                            report the following parameter: Existing or Baseline
                            Scenario
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="NfixingSpecies1"
                            placeholder="your answer"
                            name="NfixingSpecies"
                            value={formData.NfixingSpecies}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      )}

                      <div className="col-sm-5 mt-3">
                        <label htmlFor="coverCropsResidues">
                          If the project activity is improving the use of cover
                          crops and crop residues, Select Yes/No
                        </label>
                        <div id="coverCropsResidues">
                          <div>
                            Yes
                            <input
                              className="radio"
                              type="radio"
                              name="coverCropsResidues"
                              value="Yes"
                              onClick={() => setCoverCropsResidues(true)}
                              required
                            />
                          </div>
                          <div>
                            NO
                            <input
                              className="radio"
                              type="radio"
                              name="coverCropsResidues"
                              value="NO"
                              onClick={() => setCoverCropsResidues(false)}
                            />
                          </div>
                        </div>
                      </div>
                      {coverCropsResidues && (
                        <div className="col-sm-5 mt-3">
                          <label
                            htmlFor="coverCropsResidues1"
                            className="text-primary"
                          >
                            If required, then report the following parameter:
                            Existing or Baseline Scenario
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="coverCropsResidues1"
                            placeholder="your answer"
                            name="coverCropsAndCropResidue"
                            value={formData.coverCropsAndCropResidue}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      )}

                      <div className="col-sm-5 mt-3">
                        <label htmlFor="improvedTillagePractices">
                          If the project activity includes improved tillage
                          practices, Select Yes/No
                        </label>
                        <div id="improvedTillagePractices">
                          <div>
                            Yes
                            <input
                              className="radio"
                              type="radio"
                              name="improvedTillagePractices"
                              value="Yes"
                              onClick={() => setImprovedTillagePractices(true)}
                              required
                            />
                          </div>
                          <div>
                            NO
                            <input
                              className="radio"
                              type="radio"
                              name="improvedTillagePractices"
                              value="NO"
                              onClick={() => setImprovedTillagePractices(false)}
                            />
                          </div>
                        </div>
                      </div>
                      {improvedTillagePractices && (
                        <div className="col-sm-5 mt-3">
                          <label
                            htmlFor="improvedTillagePractices1"
                            className="text-primary"
                          >
                            {" "}
                            If required, then report the following parameter:
                            Existing or Baseline Scenario{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="improvedTillagePractices1"
                            placeholder="your answer"
                            name="improvedTillagePractices"
                            value={formData.improvedTillagePractices}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      )}

                      <div className="col-sm-5 mt-3 ">
                        <label className="labels-1" htmlFor="farmerName">
                          If the project activity includes the introduction of
                          trees (Plantations or Agroforestry) into the
                          landscape, then report the following parameter:
                          Existing or Baseline Scenario
                          <p>
                            1- Area of agroforestry (acres) 2-Type of
                            agroforestry system (Silvopasture/ Alley Cropping/
                            Forest Farming/ Riparian Forest Buffers/
                            Windbreaks/Shelterbelts/ Others) 3- What is the
                            project start date (or the projected date)? Please
                            indicate month and year [Note: Start Date indicates
                            the date that planting activities began (or are
                            projected to begin)]) 4- Number (trees/acre) and
                            species of tree used 5- Describe the improved
                            management practices for the agroforestry species
                            (incl. harvesting cycles, existing species, threats)
                          </p>
                        </label>
                        <input
                          type="text"
                          className="form-control form-inputs "
                          id="farmerName"
                          placeholder="your answer"
                          name="plantationsOrAgroforestry"
                          value={formData.plantationsOrAgroforestry}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="col-sm-5 mt-3">
                        <label htmlFor="improvedGrazingPractices">
                          If the project activity includes improved grazing
                          practices. Select Yes/No
                        </label>
                        <div id="improvedGrazingPractices">
                          <div>
                            Yes
                            <input
                              className="radio"
                              type="radio"
                              name="improvedGrazingPractices"
                              value="Yes"
                              onClick={() => setImprovedGrazingPractices(true)}
                              required
                            />
                          </div>
                          <div>
                            NO
                            <input
                              className="radio"
                              type="radio"
                              name="improvedGrazingPractices"
                              value="NO"
                              onClick={() => setImprovedGrazingPractices(false)}
                            />
                          </div>
                        </div>
                      </div>
                      {improvedGrazingPractices && (
                        <div className="col-sm-5 mt-3">
                          <label
                            htmlFor="improvedGrazingPractices1"
                            className="text-primary"
                          >
                            If required, then report the following parameter:
                            Existing or Baseline Scenario
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="improvedGrazingPractices1"
                            placeholder="your answer"
                            name="activityIncludesImprovedGrazing"
                            value={formData.activityIncludesImprovedGrazing}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      )}

                      <div className="col-sm-5 mt-3">
                        <label htmlFor="agricultureResidueBurning">
                          If the project activity includes avoidance of
                          agriculture residue burning. Select Yes/No
                        </label>
                        <div id="agricultureResidueBurning">
                          <div>
                            Yes
                            <input
                              className="radio"
                              type="radio"
                              name="agricultureResidueBurning"
                              value="Yes"
                              onClick={() => setAgricultureResidueBurning(true)}
                              required
                            />
                          </div>
                          <div>
                            NO
                            <input
                              className="radio"
                              type="radio"
                              name="agricultureResidueBurning"
                              value="NO"
                              onClick={() =>
                                setAgricultureResidueBurning(false)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      {agricultureResidueBurning && (
                        <div className="col-sm-5 mt-3">
                          <label
                            htmlFor="agricultureResidueBurning1"
                            className="text-primary"
                          >
                            If required, then report the following parameter:
                            Existing or Baseline Scenario
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="agricultureResidueBurning1"
                            placeholder="your answer"
                            name="avoidanceOfAgricultureResidueBurning"
                            value={
                              formData.avoidanceOfAgricultureResidueBurning
                            }
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      )}

                      <div className="col-sm-5 mt-3">
                        <label
                          className="labels-1"
                          htmlFor="predominantlyOrganicSoils"
                        >
                          Is the project located in or have areas with
                          predominantly organic soils* (with a high
                          concentration of organic carbon)?
                        </label>
                        <input
                          type="text"
                          className="form-control form-inputs "
                          id="predominantlyOrganicSoils"
                          placeholder="your answer"
                          name="predominantlyOrganicSoils"
                          value={formData.predominantlyOrganicSoils}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="col-sm-5 mt-3">
                        <label
                          className="labels-1"
                          htmlFor="projectLocatedWetlands"
                        >
                          Is the project located in wetlands? *
                        </label>
                        <input
                          type="text"
                          className="form-control form-inputs "
                          id="projectLocatedWetlands"
                          placeholder="your answer"
                          name="projectLocatedWetlands"
                          required
                        />
                      </div>

                      <div className="col-sm-5 mt-3 mt-sm-5 d-flex p-3 p-sm-0  justify-content-center align-items-center">
                        <button
                          type="submit"
                          className="btn btn-success px-sm-5 py-sm-2"
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFarmer;
