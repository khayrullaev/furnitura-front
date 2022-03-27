import React from "react";
import styled from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { GestureEvent } from "react-native-gesture-handler";
import { SafeAreaView, FlatList, View, Dimensions } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

// components
import { OnboardingSlide } from "../../components/onboarding";
import { Button } from "../../components/common";

// styles
import { theme } from "../../styles";

// types
import { AuthStackParamList } from "../../types/navigation";

// constants
import { slides } from "../../constants";
const { width, height } = Dimensions.get("window");

const Onboarding = ({
  navigation,
}: NativeStackScreenProps<AuthStackParamList>) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref: any = React.useRef();

  const updateCurrentSlideIndex = (e: GestureEvent<any>) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const Footer = () => {
    return (
      <FooterWrapper>
        <IndexIndicatorWrapper>
          {slides.map((_, index) => (
            <OneIndicator
              key={index}
              isActive={currentSlideIndex === index ? true : false}
            />
          ))}
        </IndexIndicatorWrapper>

        <View>
          {currentSlideIndex === slides.length - 1 ? (
            <Button
              title={"Done"}
              onPress={() => {
                AsyncStorage.setItem("isInitialLaunch", "N");
                navigation.replace("Login");
              }}
            />
          ) : (
            <Button title={"Next"} onPress={goToNextSlide} />
          )}
        </View>
      </FooterWrapper>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => (
          <OnboardingSlide item={item} width={width} height={height} />
        )}
      />
      <Footer />
    </SafeAreaView>
  );
};

const FooterWrapper = styled.View`
  height: ${height * 0.16}px;
  justify-content: space-between;
  padding: 0 24px 20px 24px;
`;

const IndexIndicatorWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
`;

const OneIndicator = styled.View<{ isActive: boolean }>`
  width: ${(props) => (props.isActive ? "25px" : "7px")};
  height: 7px;
  border-radius: ${(props) => (props.isActive ? "50px" : "15px")};
  background-color: ${theme.primary};
  opacity: ${(props) => (props.isActive ? 1 : 0.3)};
  margin-left: 4px;
`;

export default Onboarding;
