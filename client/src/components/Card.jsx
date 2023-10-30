import { Link } from "react-router-dom";
import { useParseDate } from "../hooks/useParseDate";
import { useGetImage } from "../hooks/useGetImage";

export default function Card(props) {
  // eslint-disable-next-line react/prop-types
  const { homeTeam, awayTeam, date, matchId, venue } = props;
  const { dayName, monthName, currentDate, time, timePeriod } =
    useParseDate(date);
  const { defaultHometeam, defaultAwayteam } = useGetImage(homeTeam, awayTeam);

  return (
    <Link className="el-card" to={`/match-detail/${matchId}`}>
      <div className="date">
        <span className="el-date">{`${dayName}, ${currentDate} ${monthName} | ${time} ${timePeriod}`}</span>
      </div>
      <div className="card" data-live="false">
        <div className="card__team">
          <div className="card__team--name">
            <img
              className="el-teamflag"
              src={`./team/${defaultHometeam}.png`}
              alt={homeTeam}
            />
            <span className="el-teamname first__team--name">{homeTeam}</span>
          </div>
        </div>
        <div className="card__vrs">
          <span className="el-vs">VS</span>
        </div>
        <div className="card__team second">
          <div className="card__team--name">
            <span className="el-teamname second__team--name">{awayTeam}</span>
            <img
              className="el-teamflag"
              src={`./team/${defaultAwayteam}.png`}
              alt={awayTeam}
            />
          </div>
        </div>
      </div>
      <div className="venue">
        <span className="el-venue">
          {`${venue}`.replace("(day/night)", "")}
        </span>
      </div>
    </Link>
  );
}
