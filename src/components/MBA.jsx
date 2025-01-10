import Papers from "./Papers/Papers";


import Syllabus from "./Syllabus/Syllabus";

const MBA = () =>{
  return (
    <>
    <Syllabus link={"https://www.himtu.ac.in/wp-content/uploads/2024/09/12924-MBA-NEP-NEW-PDF-23-24.pdf"} title={"MBA"}/>
    <div className="mt-24" id="notes">
      <h1 className="m-12 text-center font-bold text-4xl">Previous Year Question Papers of MBA - HPTU</h1>
      {/* <Papers data={} title={"1st Sem"} />
      <Papers data={} title={"2nd Sem"} />
      <Papers data={} title={"3rd Sem"} /> */}
      <h1 className="m-12 text-center font-bold text-2xl">Previous Year Question Papers of MBA Will Come Soon</h1>
    </div>
    </>
  );
}

export default MBA;