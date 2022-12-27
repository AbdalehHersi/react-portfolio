import React, { useState } from "react";
import "../css/Contact.css";

function Contact() {

    const [element, setElement] = useState("");

    const regexMatch = (email) => {
        let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        return regex.test(email)
    }

    const validateForm = () => {

        const inputField = document.getElementById(`${element}`);
        const errorM = document.getElementById("errorMessage");

        switch (element) {
            case "name":
                if (inputField.value) {
                    errorM.classList.remove("ErrorShown");
                    errorM.classList.add("ErrorHidden")
                    errorM.textContent = "";
                } else {
                    errorM.classList.remove("ErrorHidden");
                    errorM.textContent = "You need to enter a name";
                    errorM.classList.add("ErrorShown");
                }
                break;

            case "email":
                if (regexMatch(inputField.value)) {
                    errorM.classList.remove("ErrorShown");
                    errorM.classList.add("ErrorHidden")
                    errorM.textContent = "";
                } else {
                    errorM.classList.remove("ErrorHidden");
                    errorM.textContent = "You need to enter a valid email";
                    errorM.classList.add("ErrorShown");
                }
                break;

            default: console.log("Default")
                break;
        }
    }

    return (
        <div className="ContactContainer">
            <h1 className="Email">You can email me on <a href="mailto:hersiabdaleh@gmail.com" id="email">hersiabdaleh@gmail.com</a>.</h1>
            {/* <form action="" method="get" className="formClass" id="formID">
                <div className="formFields">
                    <label htmlFor="name">Enter your name: </label>
                    <input type="text" name="name" id="name" required onBlur={() => {
                        setElement("name");
                        validateForm();
                    }} />
                </div>
                <div className="formFields">
                    <label htmlFor="email">Enter your email: </label>
                    <input type="email" name="email" id="email" required onBlur={() => {
                        setElement("email");
                        validateForm();
                    }} />
                </div>
                <div className="formFields">
                    <label htmlFor="message">Enter your message: </label>
                    <textarea type="message" name="message" id="message" required form="formID" />
                </div>
                <div className="formFields">
                    <button type="submit" id="formBtn">Send</button>
                </div>
            </form>
            <h6 id="errorMessage"> </h6> */}
        </div>
    )
}

export default Contact; 