import { School, BadgePercent } from "lucide-react"
import BCA from "../assets/BCA.png"
import MCA from "../assets/MCA.png"
import course from "../assets/course.png"

const EducationCard = ({ image, course, campus, cgpa, startYear, endYear }) => {
  // Calculate progress percentage based on current year
  const currentYear = new Date().getFullYear();
  const totalDuration = endYear - startYear;
  const elapsed = Math.min(currentYear, endYear) - startYear;
  const progress = Math.round((elapsed / totalDuration) * 100);

  return (
    <div className=" flex items-center bg-[#001E2B]   text-white rounded-xl shadow-lg p-6 w-400px m-6 md:w-[650px] h-[180px] border border-white">
      {/* Left Image */}
      <img
        src={image}
        alt="course"
        className="w-24 h-24 object-cover rounded-md mr-6 border-2 border-white"
      />

      {/* Course Details */}
      <div className="flex flex-col space-y-2 flex-grow  ">
        <div className="flex items-center space-x-2">

          <span className="md:text-lg text-sm font-semibold text-white">{course}</span>
        </div>
        <div className="flex items-center space-x-2">
          <School className="text-white" />
          <span className="text-md text-white">{campus}</span>
        </div>
        <div className="flex items-center space-x-2">

          <BadgePercent className="text-yellow-400" />
          <span className="text-md  text-white">CGPA: {cgpa}</span>
        </div>

        {/* Progress Bar */}
        <div className="mt-4 ">
          <div className="flex justify-between text-xs text-white ">
            <span>{startYear}</span>
            <span>{endYear}</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full">
            <div
              className="bg-gradient-to-br from-[#00684A] to-green-400 h-2 rounded-full transition-all duration-500 mb-4"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Education() {
  return (
    <div className="flex flex-col items-center space-y-6 pb-10 pt-10  bg-gradient-to-br  from-[#00684A] to-green-400">
      <h1 className="font-semibold text-3xl">Education</h1>
      <EducationCard
        image={BCA}
        course="Bachelors of Computer Applications"
        campus="Ludhiana Group of Colleges, Mann"
        cgpa="7.55"
        startYear={2018}
        endYear={2021}
      />
      <EducationCard
        image={MCA}
        course="Masters of Computer Applications"
        campus="Ludhiana Group of Colleges, Mann"
        cgpa="7.07"
        startYear={2021}
        endYear={2023}
      />

      <EducationCard
        image={course}
        course="Web development"
        campus="Lamrin Tech Skills University, Ropar"
        cgpa="8+"
        startYear={2023}
        endYear={2024}
      />
    </div>
  );
}
