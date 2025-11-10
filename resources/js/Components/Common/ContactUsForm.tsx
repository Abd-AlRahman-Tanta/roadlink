import { useForm } from "@inertiajs/react"
import { ChangeEvent, FormEvent } from "react"
import Button from "../Button"
import SectionTitle from "./SectionTitle"

const ContactUsForm = ({ inputs, title, button }: { button: { text: string, type: string }, title: string, inputs: { label: string, name: string, type: string }[] }) => {
  // set the basic value of object of data from each name of the inputs array
  const form = useForm(Object.fromEntries(inputs.map((input) => ([input.name, ""]))));
  // fill data when user type in input
  const setValues = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, inputName: string) => {
    form.setData(inputName, e.target.value);
  }
  // handle send the data
  const sendData = (e: FormEvent) => {
    e.preventDefault();
    console.log(form.data)
  }
  return (
    <div className=" w-full ">
      {/* title of section */}
      <SectionTitle className=" sectionTitle font-bold text-buttonBg mb-8 text-start " children={title} />
      {/* from here the form starts */}
      <form onSubmit={sendData} className=" w-full mb-6 " action="">
        {
          // each input has label ,type ,and name
          // if input type is textarea..it will render textarea element ...otherwise it will render simple input
          inputs.map((input, i) => (
            input.type != "textarea" ?
              <div className=" w-full my-4 " key={i}>
                <label className=" text-lg  " htmlFor={"input" + i}> {input.label} </label>
                <input onChange={(e) => setValues(e, input.name)} className=" bg-transparent outline-none border-b-2 border-b-buttonBg w-full h-10" type={input.type} name={input.name} />
              </div>
              :
              <div className=" w-full " key={i}>
                <label className=" text-lg  my-4 " htmlFor={"input" + i}> {input.label} </label>
                <textarea onChange={(e) => setValues(e, input.name)} className=" resize-none bg-transparent outline-none border-b-2 border-b-buttonBg w-full " name={input.name}></textarea>
              </div>
          ))
        }
        {/* submit button */}
        <Button className="button my-6" children={button.text} />
      </form>
    </div>
  )
}

export default ContactUsForm
