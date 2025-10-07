export default function Hero(){
    return(
        <>
         <div className="text-center mt-20">
            <h1 className="text-4xl md:text-7xl  font-bold">Welcome to FeedFlow</h1>
            <p className="mt-4 text-xl text-gray-600">Get Honest Feedback. Anonymously. Instantly.</p>
        </div>
        {/* Use Cases Section */}
        <div className="mt-16">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">Who Is It For?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-base-100 shadow-md rounded-lg p-6 flex flex-col items-center">
              <span className="text-4xl mb-2">👩‍🎓</span>
              <h3 className="text-xl font-semibold mb-2">Students</h3>
              <p className="text-gray-600 text-center">Get honest feedback from classmates and friends.</p>
            </div>
            <div className="bg-base-100 shadow-md rounded-lg p-6 flex flex-col items-center">
              <span className="text-4xl mb-2">👨‍💼</span>
              <h3 className="text-xl font-semibold mb-2">Professionals</h3>
              <p className="text-gray-600 text-center">Understand what coworkers think and improve communication.</p>
            </div>
            <div className="bg-base-100 shadow-md rounded-lg p-6 flex flex-col items-center">
              <span className="text-4xl mb-2">🎨</span>
              <h3 className="text-xl font-semibold mb-2">Creators</h3>
              <p className="text-gray-600 text-center">Learn what your audience truly feels about your content.</p>
            </div>
            <div className="bg-base-100 shadow-md rounded-lg p-6 flex flex-col items-center">
              <span className="text-4xl mb-2">🧑‍🤝‍🧑</span>
              <h3 className="text-xl font-semibold mb-2">Friends</h3>
              <p className="text-gray-600 text-center">Share real opinions and strengthen relationships.</p>
            </div>
          </div>
        </div>
        {/* Privacy Section */}
        <div className="mt-16 mb-10 max-w-2xl mx-auto bg-base-100 shadow-md rounded-lg p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Privacy, Our Priority</h2>
          <p className="text-lg text-gray-600">
            Every message is fully anonymous. We don’t track who sends what — ensuring a safe space for genuine thoughts.<br />
            Feedback should build people, not break them — and that’s our mission.
          </p>
        </div>
        </>
    )
       
    
}