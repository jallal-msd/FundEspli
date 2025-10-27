
import {useState} from "react"

const Game =()=>{


  const [player, setPlayer] = useState("")
  const [computerChoice , setComputeChoice] = useState("")

const arr :[string] = ["rock", "paper", "scissors"] 
  const choose = ( choice)=>{
    setPlayer(choice)
     console.log("1" + choice)
     const computerChoice = arr[Math.floor(Math.random() * arr.length)]
     setComputeChoice(computerChoice)
     console.log("2" + computerChoice);
     
     logic(choice , computerChoice)

  }

const logic = (player , computer)=>{
      if(player === computer){
        return <p> draw</p>
      }else if(player === "rock" && computer === "paper"){
        return <p>Computer won</p>
      }

  }
return (

 <div className="container">
                <h1>Welcome to Rock, Paper, Scissors Game</h1>
                <div >
                    <button onClick={() => choose("rock")} >
                        <i className={`fas fa-hand-rock`} /> Rock
                    </button>
                    <button onClick={() => choose("paper")} >
                        <i className={`fas fa-hand-paper`} /> Paper
                    </button>
                    <button onClick={() => choose("scissors")}>
                        <i className={`fas fa-hand-scissors`} />  Scissors 
                    </button>
                </div>
                <div className="content">
                    <p>Your choice: {player}</p>
                    <p>Computer's choice: {computerChoice}</p>
                    <h2>Your Score: </h2>
                    <h2>Computer Score: </h2>
                </div>
            </div>
)
    
}

export default Game
