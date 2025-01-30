import { useParams } from "react-router-dom";
import SimpleParallax from "simple-parallax-js";

const gameData: Record<
  string,
  {
    title: string;
    description: string;
    image: string;
    leftSection: string;
    heading: string;
    heading_title: string;
    h2_title: string;
    h2_titleBottom: string;
    gameList: { title: string; description: string }[];
    objective_img: string;
    gameplay_summary: string;
    gameplay_List: { description: string }[];
    gameplay_img: string;
    gameplay_img2: string;
    gameplay_img3: string;
    gameplay_rulesHeading: string;
    gameplay_rulesPera: string;
    gameplay_rulsImg: string;
    rules_heading: string;
    rules_pera: string;
    rulesheadLine: string;
    rules_List: { description: string }[];
    winning_lossing: string;
    winning_lossingList: { description: string }[];
    winning_img: string;
  }
> = {
  rummy: {
    title: "Rummy",
    description:
      "At Rummy Boom, we prioritize seamless support for our users, offering 24/7 assistance through AI-powered chatbots, WhatsApp, and social media channels. For more personalized help, users can reach out via email or use the dedicated Contact Us section on our platform.",
    image: "/images/rummygame.jpeg",
    heading: "Understanding the Basics of Rummy",
    leftSection: `Our game features visually appealing avatars, available in both male and female versions, adding an extra layer of engagement to the gameplay. With freshly updated themes, optimized for all screen sizes and devices, players can enjoy an immersive gaming experience across platforms.
                 As one of India's most trusted and rapidly growing online cash rummy apps, Rummy Boom hosts over 100,000 active players across the web and mobile. Once registered, users step into an authentic rummy gaming environment, where skill and strategy define success. New players receive a welcome bonus and exclusive in-game rewards, enhancing their journey.
                 With exciting Master Rummy deals and special offers, players can experience real- money rummy like never before.Withdrawals are instant and seamless, supported through UPI methods like Paytm, PhonePe, and multiple bank integrations, ensuring a secure and hassle- free cash-out experience.
                Join Rummy Boom today and take your rummy skills to the next level!`,
    heading_title:
      "Rummy is fundamentally a game of skill and strategy where the goal is to form combinations of cards, known as melds. While there are several variants of Rummy, the essence remains the same across the different games. Here’s a brief overview of the basic rules:",
    h2_title: "Objective of the Game",
    h2_titleBottom:
      "The primary objective in Rummy is to group your cards into valid sets and sequences:",
    gameList: [
      {
        title: "Sets",
        description:
          "Three or four cards of the same rank but of different suits (e.g., 7♠, 7♥, 7♦).",
      },
      {
        title: "Sequences",
        description:
          "Three or more consecutive cards of the same suit (e.g., 5♣, 6♣, 7♣).",
      },
    ],
    objective_img: "/images/objective.jpg",
    gameplay_summary: "Gameplay Summary",
    gameplay_List: [
      {
        description:
          "Players draw cards from the deck or discard pile and must discard one card at the end of their turn.",
      },
      {
        description:
          "The game continues until one player forms valid combinations and discards their final card.",
      },
      {
        description:
          "Points can be calculated based on the value of unmelded cards left in opponents' hands.",
      },
    ],
    gameplay_img: "/images/videogame.png",
    gameplay_img2: "/images/video-game.png",
    gameplay_img3: "/images/video2.png",
    gameplay_rulesHeading: "Detailed Gameplay Rules",
    gameplay_rulesPera:
      "Understanding the step-by-step gameplay rules is critical for both novice and seasoned players. Let’s break them down further:",
    gameplay_rulsImg: "/images/call.jpg",
    rules_heading: "Ending the Game",
    rules_pera:
      "The game ends when a player discards their final card after forming valid melds with all their cards. Points are then tallied based on the remaining cards in opponents' hands.",
    rulesheadLine:
      "Scoring System in Rummy The scoring system can vary based on the specific variant of Rummy being played. However, here’s a general overview:Points Allocation",
    rules_List: [
      {
        description: "Face Cards (K, Q, J): 10 points each.",
      },
      {
        description: "Number Cards (2-10): Face value points.",
      },
      {
        description:
          "Aces: 1 point each or 15 points, depending on the variant.",
      },
    ],
    winning_lossing: "Winning and Losing",
    winning_lossingList: [
      {
        description:
          "The winner is determined by the player who discards their last card and forms valid melds.",
      },
      {
        description:
          "Players left with unmelded cards incur penalties based on their total value.",
      },
    ],
    winning_img: "/images/rummy.png",
  },
  ludo: {
    title: "Ludo",
    description:
      "At Seven Unique Gaming, we strive to offer an exceptional gaming experience with round-the-clock customer support. Whether through our AI-powered chatbot, WhatsApp, social media channels, or direct email support, we ensure our users receive prompt assistance. Our Contact Us section also provides a hassle-free way to reach out for any queries or concerns.",
    image: "/images/rummygame.jpeg",
    heading: "Understanding the Basics of Ludo",
    leftSection: `Our platform features visually appealing avatars in both male and female versions, enhancing the gaming experience with lifelike interactions. Additionally, our latest themes are not only aesthetically pleasing but also optimized for seamless performance across various devices and platforms.`,
    heading_title: `As one of India’s fastest-growing online Rummy platforms, Seven Unique Gaming has gained the trust of thousands of players. With over 100,000 active users on both mobile and web platforms, we deliver an authentic Rummy experience that blends skill, strategy, and excitement. New users receive an exclusive welcome bonus, while ongoing promotions and special rewards ensure a thrilling and rewarding experience.
        For those playing real cash games, we offer secure and instant withdrawals through UPI, Paytm, PhonePe, and multiple bank integrations, ensuring a seamless and trustworthy cash gaming experience.`,
    h2_title: "Objective of the Game",
    h2_titleBottom: `The goal is to move all four of your tokens from the starting area to the home zone before your opponents.
        Tokens move based on dice rolls, and strategic positioning is key to winning.`,
    gameList: [
      {
        title: "Sets",
        description: `Game Setup
                Ludo is played with a square board divided into four colored sections: Red, Blue, Green, and Yellow.
                Each player controls four tokens of their respective color.
                A six-sided die is used to determine movement.`,
      },
      {
        title: "Sequences",
        description: `Gameplay Rolling the Dice: Players take turns rolling the die. A six allows a token to leave the starting area.
            Moving Tokens: Tokens move clockwise along the path based on dice rolls.
            Capturing Opponents: Landing on an opponent’s token sends it back to their starting area.
            Safe Zones: Some spaces on the board are safe zones where tokens cannot be captured.
            Reaching Home: The first player to move all four tokens to their home zone wins the game.`,
      },
    ],
    objective_img: "/images/objective.jpg",
    gameplay_summary: "Gameplay Summary",
    gameplay_List: [
      {
        description:
          "Players draw cards from the deck or discard pile and must discard one card at the end of their turn.",
      },
      {
        description:
          "The game continues until one player forms valid combinations and discards their final card.",
      },
      {
        description:
          "Points can be calculated based on the value of unmelded cards left in opponents' hands.",
      },
    ],
    gameplay_img: "/images/videogame.png",
    gameplay_img2: "/images/video-game.png",
    gameplay_img3: "/images/video2.png",
    gameplay_rulesHeading: "Detailed Gameplay Rules",
    gameplay_rulesPera:
      "Understanding the step-by-step gameplay rules is critical for both novice and seasoned players. Let’s break them down further:",
    gameplay_rulsImg: "/images/call.jpg",
    rules_heading: "Learn How to Play Ludo",
    rules_pera:
      "Ludo is a classic board game that combines luck, strategy, and skill. Whether playing for fun or competing in tournaments, mastering the game involves smart moves and tactical planning.",
    rulesheadLine:
      "Scoring System in Ludo The scoring system can vary based on the specific variant of Ludo being played. However, here’s a general overview:Points Allocation",
    rules_List: [
      {
        description:
          "Our platform features visually appealing avatars in both male and female versions, enhancing the gaming experience with lifelike interactions. Additionally, our latest themes are not only aesthetically pleasing but also optimized for seamless performance across various devices and platforms.",
      },
      {
        description:
          "Landing on an opponent’s token sends it back to their starting area. Safe Zones: Some spaces on the board are safe zones where tokens cannot be captured.",
      },
      {
        description:
          "The first player to move all four tokens to their home zone wins the game.",
      },
    ],
    winning_lossing: "Winning and Losing",
    winning_lossingList: [
      {
        description:
          "The player who successfully moves all four tokens to the home zone first is declared the winner.",
      },
      {
        description:
          "In some game modes, rankings are based on how many tokens have reached home.",
      },
    ],
    winning_img: "/images/rummy.png",
  },
  callbreak: {
    title: "Call Break",
    description: `At Seven Unique Gaming, we strive to offer an exceptional gaming experience with round-the-clock customer support. Whether through our AI-powered chatbot, WhatsApp, social media channels, or direct email support, we ensure our users receive prompt assistance. Our Contact Us section also provides a hassle-free way to reach out for any queries or concerns.
        Our platform features visually appealing avatars in both male and female versions, enhancing the gaming experience with lifelike interactions. Additionally, our latest themes are not only aesthetically pleasing but also optimized for seamless performance across various devices and platforms.`,
    image: "/images/rummygame.jpeg",
    heading: "Understanding the Basics of Call Break",
    leftSection: `Our platform features visually appealing avatars in both male and female versions, enhancing the gaming experience with lifelike interactions. Additionally, our latest themes are not only aesthetically pleasing but also optimized for seamless performance across various devices and platforms.`,
    heading_title: `As one of India’s fastest-growing online Rummy platforms, Seven Unique Rummy has gained the trust of thousands of players. With over 100,000 active users on both mobile and web platforms, we deliver an authentic Rummy experience that blends skill, strategy, and excitement. New users receive an exclusive welcome bonus, while ongoing promotions and special rewards ensure a thrilling and rewarding experience.
`,
    h2_title: "Objective of the Game",
    h2_titleBottom: `Players must accurately predict the number of tricks they will win in a round.
        The goal is to win at least as many tricks as you bid while blocking opponents from achieving their bids.`,
    gameList: [
      {
        title: "Sets",
        description: `Game Setup
                Callbreak is played with four players, and each player is dealt 13 cards from a 52-card deck.
The game is played over five rounds, with scores accumulating over time.
The Spade suit is always trump, meaning it has the highest value over other suits.
.`,
      },
      {
        title: "Sequences",
        description: `Bidding Phase:
Before the round starts, each player declares the number of tricks they expect to win.`,
      },
    ],
    objective_img: "/images/objective.jpg",
    gameplay_summary: "Gameplay Summary",
    gameplay_List: [
      {
        description:
          "Players draw cards from the deck or discard pile and must discard one card at the end of their turn.",
      },
      {
        description:
          "The game continues until one player forms valid combinations and discards their final card.",
      },
      {
        description:
          "Points can be calculated based on the value of unmelded cards left in opponents' hands.",
      },
    ],
    gameplay_img: "/images/videogame.png",
    gameplay_img2: "/images/video-game.png",
    gameplay_img3: "/images/video2.png",
    gameplay_rulesHeading: "Detailed Gameplay Rules",
    gameplay_rulesPera:
      "Understanding the step-by-step gameplay rules is critical for both novice and seasoned players. Let’s break them down further:",
    gameplay_rulsImg: "/images/call.jpg",
    rules_heading: "Learn How to Play Callbreak",
    rules_pera:
      "Callbreak is a strategic trick-taking card game played with four players and a standard 52-card deck. Each player competes to win the exact number of tricks they bid at the beginning of the round.",
    rulesheadLine: `Playing a Trick:
            The first player plays a card, and other players must follow the same suit if possible.
            If they don’t have a card of the same suit, they can play any card, including a trump card (Spade).
            The highest-ranked card of the leading suit wins, unless a trump card is played.`,
    rules_List: [
      {
        description:
          "Our platform features visually appealing avatars in both male and female versions, enhancing the gaming experience with lifelike interactions. Additionally, our latest themes are not only aesthetically pleasing but also optimized for seamless performance across various devices and platforms.",
      },
      {
        description:
          "Landing on an opponent’s token sends it back to their starting area. Safe Zones: Some spaces on the board are safe zones where tokens cannot be captured.",
      },
      {
        description:
          "The first player to move all four tokens to their home zone wins the game.",
      },
    ],
    winning_lossing: "Winning and Losing",
    winning_lossingList: [
      {
        description:
          "The player with the highest cumulative score at the end of all rounds wins trategic bidding and gameplay are crucial to victory.",
      },
      {
        description:
          "Players who meet or exceed their bid earn 1 point per trick won If a player fails to meet their bid, they lose points equal to their bid. The player with the highest total score after five rounds wins the game.",
      },
    ],
    winning_img: "/images/rummy.png",
  },
};

const GameDescription = () => {
  const { gameId } = useParams<{ gameId: string }>();
  const game = gameData[gameId || "rummy"]; // Default to Rummy if no match

  if (!game) return <h2>Game not found</h2>;

  return (
    <>
      <div className="game_description">
        <h1 className="font-bold text-left text-white text-4xl">
          {game.title}
        </h1>
        <p className="font-bold text-left text-white text-1xl">
          {game.description}
        </p>
      </div>
      <div className="next_section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading">
                <h2 className="text-center">{game.heading}</h2>
                <p className="text-center">{game.heading_title}</p>
              </div>
              <div className="container my-5">
                <div className="row">
                  <div className="col-md-6">
                    <div className="side-content">
                      <h2 className="h2 font-extrabold">{game.h2_title}</h2>
                      <p>{game.h2_titleBottom}</p>
                      <ul className="details-list">
                        <li className="d-flex align-items-center gap-2">
                          <span className="text-success flex-shrink-0">
                            <i className="bi bi-check2-circle"></i>
                          </span>
                          <span>{game.gameList[0].description}</span>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                          <span className="text-success flex-shrink-0">
                            <i className="bi bi-check2-circle"></i>
                          </span>
                          <span>{game.gameList[1].description}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="img">
                      <SimpleParallax scale={1.7}>
                        <img
                          src={game.objective_img}
                          alt=""
                          className="img-fluid"
                        />
                      </SimpleParallax>
                    </div>
                  </div>
                </div>
                <div className="container gameplay_summary">
                  <h2 className="h2 font-extrabold text-center">
                    {game.gameplay_summary}
                  </h2>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="games-card">
                        <div className="game-icon mb-3">
                          <img src={game.gameplay_img} />
                        </div>
                        <div className="game-content">
                          <p>{game.gameplay_List[0].description}</p>
                          <a className="readmoreBtn" href="/">
                            <span className="link_text">Read More</span>
                            <i className="bi bi-arrow-right link_icon"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="games-card">
                        <div className="game-icon mb-3">
                          <img src={game.gameplay_img2} />
                        </div>
                        <div className="game-content">
                          <p>{game.gameplay_List[1].description}</p>
                          <a className="readmoreBtn" href="/">
                            <span className="link_text">Read More</span>
                            <i className="bi bi-arrow-right link_icon"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="games-card">
                        <div className="game-icon mb-3">
                          <img src={game.gameplay_img3} />
                        </div>
                        <div className="game-content">
                          <p>{game.gameplay_List[2].description}</p>
                          <a className="readmoreBtn" href="/">
                            <span className="link_text">Read More</span>
                            <i className="bi bi-arrow-right link_icon"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <section
                  style={{
                    backgroundImage: `url(${game.gameplay_img})`,
                  }}
                ></section>
                <div className="container gmae_rules">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="heading">
                        <h1 className="text-center">
                          {game.gameplay_rulesHeading}
                        </h1>
                        <p className="text-center">{game.gameplay_rulesPera}</p>
                      </div>
                    </div>
                    <div className="col-md-6 my-5">
                      <div className="p-5">
                        <SimpleParallax scale={1.7}>
                          <img
                            src={game.gameplay_rulsImg}
                            className="img-fluid"
                            alt=""
                          />
                        </SimpleParallax>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="rules_description p-5 mt-4 ps-2">
                        <div className="heading">
                          <h2>{game.rules_heading}</h2>
                          <p>{game.rules_pera}</p>
                          <p>{game.rulesheadLine}</p>
                        </div>
                        <ul className="details-list">
                          <li className="d-flex align-items-center gap-2">
                            <span className="text-success flex-shrink-0">
                              <i className="bi bi-check2-circle"></i>
                            </span>
                            <span>{game.rules_List[0].description}</span>
                          </li>
                          <li className="d-flex align-items-center gap-2">
                            <span className="text-success flex-shrink-0">
                              <i className="bi bi-check2-circle"></i>
                            </span>
                            <span>{game.rules_List[1].description}</span>
                          </li>
                          <li className="d-flex align-items-center gap-2">
                            <span className="text-success flex-shrink-0">
                              <i className="bi bi-check2-circle"></i>
                            </span>
                            <span>{game.rules_List[2].description}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="end_section">
            <div className="container">
              <div className="row">
                <div className="col-md-12 row">
                  <div className="heading">
                    <h1 className="text-center">{game.winning_lossing}</h1>
                  </div>
                  <div className="col-md-6 my-5">
                    <div className="game-card">
                      {game.winning_lossingList[0].description}
                      <img
                        src={game.winning_img}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 my-5">
                    <div className="game-card">
                      {game.winning_lossingList[1].description}
                      <img
                        src={game.winning_img}
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="game_description">
    //   <h1 className="text-2xl font-bold">{game.title}</h1>
    //   <img src={game.image} alt={game.title} className="img-fluid bg-description" />
    //   <p>{game.description}</p>
    // </div>
  );
};

export default GameDescription;
