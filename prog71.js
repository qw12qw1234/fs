import React, { useState } from "react"; 
 
export default function App() { 
  const [votes, setVotes] = useState({ 
    Akash: 0, 
    Dhanush: 0, 
    Srusthi: 0 
  }); 
 
  const [showVotes, setShowVotes] = useState(false); 
 
  const handleVote = (candidate) => { 
    setVotes({ ...votes, [candidate]: votes[candidate] + 1 }); 
    setShowVotes(false); // Hide votes after new vote 
  }; 
 
  const getTotalVotes = () => { 
    return Object.values(votes).reduce((acc, val) => acc + val, 0); 
  }; 
 
  return ( 
    <div style={styles.container}> 
      <h1>Online Voting System</h1> 
 
      {Object.keys(votes).map((candidate) => ( 
        <div key={candidate} style={styles.card}> 
          <h2>{candidate}</h2> 
          {!showVotes ? ( 
            <p>Votes: </p> 
          ) : ( 
            <p>Votes: {votes[candidate]}</p> 
          )} 
          <button onClick={() => handleVote(candidate)} style={styles.button}> 
            Vote 
          </button> 
        </div> 
      ))} 
 
      <button onClick={() => setShowVotes(true)} style={styles.viewButton}> 
        View Votes 
      </button> 
 
      {showVotes && ( 
        <p style={styles.totalVotes}>Total Votes: {getTotalVotes()}</p> 
      )} 
    </div> 
  ); 
} 
 
const styles = { 
  container: { 
    textAlign: "center", 
    fontFamily: "Arial", 
    padding: "20px" 
  }, 
  card: { 
    margin: "10px auto", 
    padding: "10px", 
    border: "1px solid #ccc", 
    width: "200px", 
    borderRadius: "8px" 
  }, 
  button: { 
    padding: "5px 10px", 
    fontSize: "16px" 
  }, 
  viewButton: { 
    marginTop: "20px", 
    padding: "8px 16px", 
    fontSize: "16px", 
    backgroundColor: "#4CAF50", 
    color: "white", 
    border: "none", 
    borderRadius: "4px", 
    cursor: "pointer" 
  }, 
  totalVotes: { 
    marginTop: "10px", 
    fontSize: "18px", 
    fontWeight: "bold" 
  } 
};