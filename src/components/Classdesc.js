import React from 'react'

const Classdesc = () => {
  return (
    <div className="flex flex-col items-center bg-gray-100 p-10">
      <h2 className="text-3xl font-bold">About the Class</h2>
      <p className="text-gray-600 text-lg mt-2">Comprehensive English Learning Experience</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full max-w-5xl">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="font-bold text-lg">Mode of Teaching</h3>
          <span className="bg-green-200 text-green-700 px-4 py-1 rounded-full mt-2 inline-block">Online Classes</span>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="font-bold text-lg">Teaching Approach</h3>
          <p className="text-gray-600 mt-2">
          I am a passionate guitarist with over a decade of experience teaching and performing. My lessons focus on technique, creativity, and confidence, helping students find their unique musical voice.
          </p>
          {/* <p className="text-gray-600 mt-2">
            Communication and training are offered for ages 5 to 75, including confidence in public speaking,
            writing, and reading.
          </p> */}
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="font-bold text-lg">Curriculum Coverage</h3>
          <ul className="mt-2 text-gray-600">
            <li>✅ Basic & Advanced Chords</li>
            <li>✅ Strumming Patterns & Fingerstyle Techniques</li>
            <li>✅ Lead Guitar, Soloing & Improvisation</li>
            <li>✅ Songwriting & Composition</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h3 className="font-bold text-lg">Class Details</h3>
          <p className="mt-2 text-gray-600"><strong>One-on-one Class:</strong> ₹800/hour</p>
          <p className="mt-2 text-gray-600"><strong>Batch Size:</strong> 50+ students</p>
          <p className="mt-2 text-gray-600"><strong>Age Groups:</strong> 5-75 years</p>
        </div>
      </div>

      <button className="bg-pink-500 text-white px-6 py-3 rounded-full mt-6 hover:bg-pink-600">
        Schedule a Trial Class
      </button>
    </div>
  )
}

export default Classdesc
