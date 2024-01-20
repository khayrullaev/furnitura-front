import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

// components
import { NewsScreenCollectionCard } from "../../../components/common";

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
    setData(res.data.collections || []);
    toggleLoading(false);
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  if (!data?.length) return <SafeAreaView></SafeAreaView>;

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.scrollView}>
        {data?.map((collection: any, index: number) => {
          return (
            <NewsScreenCollectionCard
              key={index}
              url={collection?.imageUrl}
              title={collection.title}
              description={collection.description}
              date={collection.date}
              views={collection.views}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    paddingBottom: 118,
  },

  scrollView: {
    height: "100%",
    paddingTop: 10,
  },
});

export default News;
