import { CommonQuestionsProps } from "@/index"
import Question from "./Question"
import SectionTitle from "./SectionTitle"

const CommonQuestions = ({ commonQuestions }: { commonQuestions: CommonQuestionsProps }) => {
  return (
    <div id="questions">
      <SectionTitle className=" sectionTitle font-bold text-buttonBg mb-9 " children={commonQuestions.title} />
      <div className=" w-full grid grid-cols-2 gap-5 ">
        {
          commonQuestions.questions.map((question, i) => (<Question key={i} title={question.title} titleLink={question.titleLink} description={question.description} descriptionLink={question.descriptionLink} />))
        }
      </div>
    </div>
  )
}

export default CommonQuestions
