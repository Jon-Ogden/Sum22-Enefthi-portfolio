import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Button from "../styled-components/Button";
import { Card } from "../styled-components/CardContainer";
import { Title, Text } from "../styled-components/Fonts";

const Home = () => {
    const {user} = useContext(AuthContext)

    return(
        <div>
            <Title>Home</Title>
            <Title type="t2">The quick, brown fox jumps over the lazy river.</Title>
            {user ? <p>Hello, {user.name}</p> : <Text>not logged in</Text>}
            <Button>Hello, World!</Button>
            <Card>Let's GO!</Card>
        </div>
    )
}

export default Home;