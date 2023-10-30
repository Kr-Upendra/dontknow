import { useParams } from "react-router-dom";
import { useGetMatchDetail } from "../hooks/useGetMatchDetail";

export default function MatchDetail() {
  const params = useParams();

  const matchDetail = useGetMatchDetail(params.matchId);
  console.log(matchDetail);

  return (
    <div className="dmatch">
      <h1>Match details Page</h1>
    </div>
  );
}
