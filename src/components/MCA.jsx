import Papers from "./Papers/Papers";

import { dataOf1stSem } from "../utils/dataOfMCA";
import { dataOf2ndSem } from "../utils/dataOfMCA";
import { dataOf3rdSem } from "../utils/dataOfMCA";
import Syllabus from "./Syllabus/Syllabus";

const MCA = () =>{
  return (
    <>
    <Syllabus link={"https://www.himtu.ac.in/wp-content/uploads/2024/09/3924-MCA-NEP.pdf"} title={"MCA"} />
    <div className="mt-24" id="notes">
      <h1 className="m-12 text-center font-bold text-4xl">Previous Year Question Papers of MCA - HPTU</h1>
      <Papers data={dataOf1stSem} title={"1st Sem"} />
      <Papers data={dataOf2ndSem} title={"2nd Sem"} />
      <Papers data={dataOf3rdSem} title={"3rd Sem"} />
    </div>
    </>
  );
}

export default MCA;