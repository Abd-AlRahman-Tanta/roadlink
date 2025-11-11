import { ContactUsProps } from '@/index'
import ContactUsForm from './ContactUsForm'
import RegularLayer from './RegularLayer'

const ContactUs = ({ contactUs }: { contactUs: ContactUsProps }) => {
  return (
    <div id='contact' className='w-full flex desc:flex-col-reverse justify-center items-start gap-5 mt-36 '>
      {/* form of this section */}
      <ContactUsForm button={contactUs.button} title={contactUs.title} inputs={contactUs.inputs} />
      {/* img of section with its layer */}
      <div className=' max-w-xl w-full aspect-[1.2] relative rounded-lg overflow-hidden '>
        <img className=' absCover ' src={contactUs.image} alt="" />
        <RegularLayer />
      </div>
    </div>
  )
}

export default ContactUs
