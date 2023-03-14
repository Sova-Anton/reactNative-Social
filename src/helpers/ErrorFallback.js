import { Text, View, TouchableOpacity } from "react-native";

export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <View role="alert">
      <Text>Something went wrong:</Text>
      <Text>{error.message}</Text>
      <TouchableOpacity onPress={resetErrorBoundary}>
        <Text>Try again</Text>
      </TouchableOpacity>
    </View>
  );
}
