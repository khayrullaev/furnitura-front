import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

// components
import {
  Block,
  Button,
  NewsScreenCollectionCard,
} from "../../../components/common";

// api
import { newsApi } from "../../../api/news";

// hooks
import { useLoadingContext } from "../../../hooks";

const News = () => {
  const [data, setData] = useState<any>({});
  const { toggleLoading } = useLoadingContext();

  const fetchCollections = async () => {
    toggleLoading(true);
    const res: any = await newsApi.getCollections();
    setData(res.data);
    toggleLoading(false);
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  if (!data?.length) return <SafeAreaView></SafeAreaView>;

  return (
    <SafeAreaView>
      <ScrollView>
        {data?.map((collection: any, index: number) => {
          <NewsScreenCollectionCard key={index} url={collection?.imageUrl} />;
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default News;
