import Card from "../components/Card";
import Loader from "../components/Loader";
import { useGetFixture } from "../hooks/useGetFixture";

export default function Home() {
  const { fixtures } = useGetFixture();

  const cardElement = fixtures.map((fixture) => {
    return (
      <Card
        matchId={fixture.id}
        key={fixture.id}
        date={fixture.date}
        venue={fixture.venue}
        homeTeam={fixture.home.code || fixture.home.name}
        awayTeam={fixture.away.code || fixture.away.name}
        status={fixture.status}
      />
    );
  });

  console.log(cardElement);

  return (
    <div className="home">
      <div className="home__detail">
        <h3>All upcoming matches list</h3>
      </div>

      {cardElement.length === 0 ? (
        <Loader />
      ) : (
        <div className="container">{cardElement}</div>
      )}
    </div>
  );
}
