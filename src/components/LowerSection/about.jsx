import React from 'react';

const About = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12" id='aboutus'>
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          About Us
        </h2>
        
        {/* Introduction */}
        <p className="text-lg text-gray-700 mb-32 max-w-3xl mx-auto">
          We are dedicated to providing the educational resources for learners around our platform. 
          Our platform helps students achieve their academic goals with ease through providing <b>
            Previous year Question papers of Himachal Pradesh Technical Univesity.
            </b>
        </p>

        {/* Mission and Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Our Mission</h3>
            <p className="text-gray-600">
              Our mission is to empower students by providing access to educational content. 
              We believe in making learning accessible to every learner, regardless of any factor.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-800">Our Values</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Commitment to Quality information</li>
              <li>Accessibility and Inclusivity</li>
              <li>Innovation and Excellence</li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
