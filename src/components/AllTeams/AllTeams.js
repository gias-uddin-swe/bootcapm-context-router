import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./AllTeams.css";

const AllTeams = () => {
  const [teams, setTeams] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => setTeams(data.teams));
  }, [searchText]);

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  console.log(teams);

  return (
    <div className="container all-teams">
      <h1>Hello iam fresh Components</h1>
      <div className="search-box">
        <input onChange={handleChange} type="text" />
      </div>
      <div className="teams">
        <div className="row">
          {teams?.map((team) => (
            <div className="col-md-4">
              <div className="cart">
                <div className="logo-team">
                  <img className="w-50" src={team.strTeamBadge} alt="" />
                </div>
                <h1>{team.strTeam}</h1>
                <Link to={`/teamDetails/${team.idTeam}`}>
                  <button className="btn btn-success">Details</button>
                </Link>
                {/* <a href="/teamDetails/123">Details</a> */}
              </div>
            </div>
          ))}
          .
        </div>
      </div>
    </div>
  );
};

export default AllTeams;
