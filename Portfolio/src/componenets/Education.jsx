import { School, BadgePercent } from "lucide-react"

const EducationCard = ({ image, course, campus, cgpa, startYear, endYear }) => {
  // Calculate progress percentage based on current year
  const currentYear = new Date().getFullYear();
  const totalDuration = endYear - startYear;
  const elapsed = Math.min(currentYear, endYear) - startYear;
  const progress = Math.round((elapsed / totalDuration) * 100);

  return (
    <div className="flex items-center bg-[#001E2B] text-white rounded-xl shadow-lg p-6 w-400px m-6 md:w-[650px] h-[180px]">
      {/* Left Image */}
      <img
        src={image}
        alt="course"
        className="w-24 h-24 object-cover rounded-md mr-6"
      />

      {/* Course Details */}
      <div className="flex flex-col space-y-2 flex-grow">
        <div className="flex items-center space-x-2">
          {/* <FaGraduationCap className="text-blue-400" /> */}
          <span className="text-lg font-semibold">{course}</span>
        </div>
        <div className="flex items-center space-x-2">
          <School className="text-green-400" />
          <span className="text-md">{campus}</span>
        </div>
        <div className="flex items-center space-x-2">

          <BadgePercent className="text-yellow-400" />
          <span className="text-md">CGPA: {cgpa}</span>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between text-xs text-gray-400 mb-1">
            <span>{startYear}</span>
            <span>{endYear}</span>
          </div>
          <div className="w-full bg-gray-700 h-2 rounded-full">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-500"
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
        image="https://via.placeholder.com/100"
        course="Bachelors of Computer Applications"
        campus="XYZ University"
        cgpa="7.5"
        startYear={2018}
        endYear={2021}
      />
      <EducationCard
        image="https://via.placeholder.com/100"
        course="Masters of Computer Applications"
        campus="ABC Institute"
        cgpa="8.2"
        startYear={2021}
        endYear={2023}
      />
    </div>
  );
}
