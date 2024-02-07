import { Stack, Link } from 'expo-router';
import { Image } from 'tamagui'
import { YStack, Text, Input, Button, XStack } from 'tamagui';

import { Container, Main, Title, Subtitle, ButtonText } from '../tamagui.config';

export default function Page() {
  return (
    <Container backgroundColor={"#350a24"}>
        <Image
          source={{
            uri: '../assets/images/cinecam.png',
            width: 200,
            height: 300,
        }}
      />
      <Main>
        {/*<Stack.Screen options={{ title: 'MOVIE MAKING' }} />*/}
        <YStack>
          <Title color={"#ffffff"}>The Hunger</Title>
          <Title color={"#ffffff"}>Games</Title>
          <Button bg="#752d59" marginTop="$4">
            <ButtonText color="white">Begin</ButtonText>
          </Button>
        </YStack>
      </Main>
    </Container>
  );
}