import React, { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { userContext } from "./../../App";

const TeamDetails = () => {
  const [user, setUser] = useContext(userContext);
  console.log(user);

  const { teamId } = useParams();

  useEffect(() => {
    fetch(
      `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
    )
      .then((res) => res.json())
      .then((data) => console.log(data.teams[0]));
  }, []);

  return (
    <div>
      <h1>hello Iam from Team details</h1>
    </div>
  );
};

export default TeamDetails;
