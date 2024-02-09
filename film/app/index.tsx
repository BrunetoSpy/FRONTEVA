import { Stack, Link } from 'expo-router';
import { Image, YStack } from "tamagui";

import { Container, Main, Title, Subtitle, Button, ButtonText } from '../tamagui.config';

export default function Page() {
  return (
    <Container style={{backgroundColor: '#350A24', textAlign: 'center', justifyContent:'center', fontStyle:'Inter' }}>
      <Main justifyContent='center' alignItems='center'>
        <Stack.Screen options={{ title: 'Films Projects'}} />
        <Image
          source={
            require('../assets/images/cinecam.png')            
          }
          style={{
            marginTop: 50,
            marginBottom: 50,
            width: 160,
            height: 160,
            
          }}
        />
        <YStack>
          <Title style={{ color: 'white', fontSize: 20, fontWeight: 'bold',  }}>Movie {'\n'} Making </Title>
        </YStack>
        <Link href={{ pathname: '/details', params: { name: 'Dan' } }} asChild>
          <Button backgroundColor='#752D59' width='40%'>
            <ButtonText>Begin</ButtonText>
          </Button>
        </Link>
      </Main>
    </Container>
  );
}

/*import { Stack, Link } from 'expo-router';
import { Image } from 'tamagui'
import { YStack, Text, Input, Button, XStack } from 'tamagui';
import { useRouter } from "expo-router";

import { Container, Main, Title, Subtitle, ButtonText } from '../tamagui.config';

export default function Page() {
  const router = useRouter();

  return (
    <Container backgroundColor={"#350a24"} alignItems='center'>
        <Image
          source={require('../assets/images/cinecam.png')}
          style={{
            marginTop: 50,
            marginBottom: 50,
            width: 160,
            height: 160,
            
          }}
      />
      <Main>
        <Stack.Screen options={{ title: 'MOVIE MAKING' }} />
        <YStack>
          <Container margin={1} padding={5}>
            <Title color={"#ffffff"}>The Hunger</Title>
            <Title color={"#ffffff"}>Games</Title>
          </Container>
          <Button onPress={() => router.push("/pages/DashBoard")} bg="#752d59" marginTop="$4">
            <ButtonText color="white">Begin</ButtonText>
          </Button>
        </YStack>
      </Main>
    </Container>
  );
}*/