import { PropertiesProps } from "@/index"
import Property from "./Property"

const Properties = ({ properties }: { properties: PropertiesProps }) => {
  return (
    <div className="w-full flex justify-center items-center gap-5  ">
      {
        properties.map((property, i) =>
          (<Property key={i} image={property.icon} description={property.description} />))
      }
    </div>
  )
}

export default Properties
