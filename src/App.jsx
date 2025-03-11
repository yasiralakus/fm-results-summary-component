export default function App() {

    const data = [
        {
          category: "Reaction",
          score: 80,
          icon: "./images/icon-reaction.svg",
          bgcolor: "#fff7f7",
          color: "#FF5555"
        },
        {
          category: "Memory",
          score: 92,
          icon: "./images/icon-memory.svg",
          bgcolor: "#fffbf3",
          color: "#FFB21E"
        },
        {
          category: "Verbal",
          score: 61,
          icon: "./images/icon-verbal.svg",
          bgcolor: "#f2fbf8",
          color: "#00BB8F"
        },
        {
          category: "Visual",
          score: 72,
          icon: "./images/icon-visual.svg",
          color: "#1125D6",
          bgcolor: "#f3f7fa"
        }
    ]
      

    return (
        <div className="full-page">

            <div className="main-box">

                <div className="purple-box">

                    <h3>Your Result</h3>

                    <div className="point">
                        <h1>76</h1>
                        <p>of 100</p>
                    </div>

                    <h2>Great</h2>

                    <p>You scored higher than 65% of the people who have taken these tests.</p>

                </div>

                <div className="result">

                    <h1>Summary</h1>

                    <div className="result-box">
                        {
                            data?.map(x => (
                                <div key={x.score} style={{backgroundColor: x.bgcolor}} className="box-item">
                                    <img src={x.icon} alt="" />
                                    <h1 style={{color: x.color}}>{x.category}</h1>
                                    <h2><span>{x.score}</span> / 100</h2>
                                </div>
                            ))
                        }         
                    </div>

                    <button>Continue</button>

                </div>

            </div>

        </div>
    )
}