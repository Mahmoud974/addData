import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const inputName = document.querySelector("#name");
    const inputfirstname = document.querySelector("#firstname");
    const title = document.querySelector("h1");
    const add = document.querySelector(".add");
    const genderCheckbox = document.querySelectorAll("input[type='radio']");
    const boyCheckbox = document.querySelector("#boy");
    const girlCheckbox = document.querySelector("#girl");
    const blocForm = document.querySelector(".blocForm");

    const myJson = JSON.parse(localStorage.getItem("myCar"));
    add.onclick = () => {
      const car = {
        name: inputName.value,
        firstname: inputfirstname.value,
        gender: girlCheckbox.checked ? girlCheckbox.value : boyCheckbox.value,
      };
      localStorage.setItem("myCar", JSON.stringify(car));

      genderCheckbox.forEach((one) => {
        one.onclick = () => {
          if (girlCheckbox.checked) {
            console.log("giooood");
          } else if (boyCheckbox.checked) {
            console.log("booy");
          }
        };
      });
      if (inputName.value === "" || inputfirstname.value === "") {
        localStorage.clear();
        alert("À remplir");
      }

      document.location.reload();
    };
    if (myJson) {
      title.innerHTML = `Nice to meet you <span class="fw-bolder text-uppercase ${
        myJson.gender === "boy" ? "bg-primary " : "bg-danger"
      } px-3">${myJson.name} ${myJson.firstname}</span> `;
    }
  });

  return (
    <div className="container text-center d-flex justify-content-center mt-5">
      <div className="bloc d-flex justify-content-center flex-column ">
        <h1>Hi users </h1>
        <div className="blocForm d-flex flex-column w-auto">
          <input type="text" name="name" id="name" placeholder="your name" />
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="your firstname"
          />
          <div className="d-flex flex-row text-center justify-content-evenly">
            <div>
              {" "}
              <input type="radio" name="boygirl" id="girl" value="girl" />
              <label htmlFor="girl" className="mx-1">
                Girl
              </label>
            </div>

            <div>
              {" "}
              <input type="radio" name="boygirl" id="boy" value="boy" />
              <label htmlFor="boy" className="mx-1">
                Boy
              </label>
            </div>
          </div>

          <div className="buttonBlocks">
            <button
              className="btn btn-danger w-50"
              onClick={() => {
                localStorage.clear();
                document.location.reload();
              }}
            >
              Clear
            </button>
            <button className="add btn btn-primary w-50">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
