import { CommonQuestionsProps } from "@/index"
import Question from "./Question"
import SectionTitle from "./SectionTitle"

const CommonQuestions = ({ commonQuestions }: { commonQuestions: CommonQuestionsProps }) => {
  return (
    <div id="questions">
      {/* title of section */}
      <SectionTitle className=" sectionTitle font-bold text-buttonBg mb-9 " children={commonQuestions.title} />
      {/* note : i did splice the questions array so i can make the question apear with nice way when user click on it */}

      {/* questions container */}

      <div className=" w-full flex desc:flex-col justify-start items-start  gap-5 ">
        {/* right container of questions */}
        <div className=" w-full flex flex-col justify-start items-start gap-5 ">
          {
            commonQuestions.questions.slice(0, (commonQuestions.questions.length / 2)).map((question, i) => (<Question key={i} title={question.title} titleLink={question.titleLink} description={question.description} descriptionLink={question.descriptionLink} />))
          }
        </div>
        {/* left container of questions */}
        <div className=" w-full flex flex-col justify-start items-start gap-5 ">
          {/* each question need title and description... */}
          {
            commonQuestions.questions.slice((commonQuestions.questions.length / 2)).map((question, i) => (<Question key={i} title={question.title} titleLink={question.titleLink} description={question.description} descriptionLink={question.descriptionLink} />))
          }
        </div>
      </div>
    </div>
  )
}

export default CommonQuestions
