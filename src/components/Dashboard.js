import React from "react";
import styled from "styled-components";

const Dashboard = () => {
	return (
		<React.Fragment>
			<Graph/>
			<Inspector/>
		</React.Fragment>
	)
}

// const Home = () => {
// 	return (
// 		<React.Fragment>
// 			<Dashboard/>
// 			<Sidebar/>
// 		</React.Fragment>
// 	)
// }

export default Dashboard;

const Graph = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  height: 200px;
  margin: 20px;
`;

const Inspector = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  height: 200px;
  margin: 20px;
`;
