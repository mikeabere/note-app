import { Stack } from "expo-router";

const NoteLayout = () => {
  return (
    //hiding the header
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
};

export default NoteLayout;
