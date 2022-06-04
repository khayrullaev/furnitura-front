import React from "react";
import styled from "styled-components/native";
import { FlatList, StyleSheet, Pressable, View } from "react-native";

// styles
import { theme } from "../../styles";

// assets
import {
  CategoryBed,
  CategoryLamp,
  CategoryChair,
  CategoryTable,
  CategoryBath,
} from "../svgicons";

const CATEGORIES = [
  {
    id: 1,
    type: "BED",
    icon: <CategoryBed />,
  },
  {
    id: 2,
    type: "LAMP",
    icon: <CategoryLamp />,
  },
  {
    id: 3,
    type: "CHAIR",
    icon: <CategoryChair />,
  },
  {
    id: 4,
    type: "TABLE",
    icon: <CategoryTable />,
  },
  {
    id: 5,
    type: "BATH",
    icon: <CategoryBath />,
  },
];

type Props = {
  category: string;
  setCategory: Function;
};

const CategorySelect = ({ category, setCategory }: Props) => {
  return (
    <FlatList
      keyExtractor={(item) => item.id}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.flatlist}
      contentContainerStyle={styles.flatlistContainer}
      data={CATEGORIES}
      renderItem={({ item }) => (
        <Pressable onPress={() => setCategory(item.type)}>
          <Circle style={styles.circle} active={item.type === category}>
            {item.icon}
          </Circle>
        </Pressable>
      )}
    />
  );
};

const styles = StyleSheet.create({
  flatlist: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingBottom: 40,
  },
  flatlistContainer: {
    paddingRight: 30,
  },
  circle: {
    borderRadius: 50,
    shadowRadius: 15,
  },
});

const Circle = styled.View<{ active: boolean }>`
  width: 64px;
  height: 64px;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.1);
  background-color: ${(props) =>
    props.active ? theme.accent : theme.neutral5};
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CategorySelect;
