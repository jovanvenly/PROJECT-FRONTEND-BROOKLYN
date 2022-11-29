/* eslint-disable react/jsx-pascal-case */
import Button_Contact from "../button_contact";
import Input_Contact from "../input_contact/index1";
import Textarea_Contact from "../textarea_contact";

export default function Form_Contact() {
    return (
        <>
        <form action="index.html" method="POST" className="tm-contact-form">
              <Input_Contact/>
              <Textarea_Contact/>
              <Button_Contact/>
        </form>
        </>
    )}