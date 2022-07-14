import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "../styled-components/Button";
import { Card } from "../styled-components/CardContainer";
import { Title, Text } from "../styled-components/Fonts";
import BannerCard from "../../Cards/BannerCard";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Title>Dashbooard</Title>

      {user ? <p>Hello, {user.name}</p> : <Text>not logged in</Text>}
      <BannerCard />
    </div>
  );
};

export default Home;
