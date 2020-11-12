import React, { useEffect, useState } from "react";
import { View, FlatList, SafeAreaView, Text } from "react-native";
import styled from "styled-components";

import { fetchBookList } from "@api";
import { Doc, BookListResponse } from "@models";

interface IProps {}

export const HomeScreen: React.FC<IProps> = ({}) => {
  const [bookList, setBookList] = useState<Doc[]>([]);

  useEffect(() => {
    fetchBookList()
      .then((res: BookListResponse) => {
        setBookList(res.docs);
      })
      .catch((err) => {});
  }, []);

  return (
    <Container>
      <FlatList
        data={bookList}
        style={{ height: "100%" }}
        numColumns={1}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <BookContainer>
            <DocTitle>{item.name}</DocTitle>
          </BookContainer>
        )}
        ItemSeparatorComponent={Divider}
      />
    </Container>
  );
};

export default HomeScreen;

const Container = styled(SafeAreaView)`
  background-color: #f0efeb;
  padding: 40px 0;
`;

const BookContainer = styled(View)`
  background-color: #999999;
  width: 90%;
  align-self: center;
  justify-content: center;
  align-items: center;
  height: 200;
  border-radius: 10;
`;

const Divider = styled(View)`
  height: 10;
`;

const DocTitle = styled(Text)`
  color: #61627b;
  font-family: "helvetica-Bold";
  font-size: 24;
`;
