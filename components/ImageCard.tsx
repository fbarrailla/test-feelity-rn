import { Image, ImageSourcePropType, StyleSheet, View } from "react-native";

type ImageCardProps = {
  image: ImageSourcePropType;
};

export default function ImageCard({ image }: ImageCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "black",
    shadowOffset: {
      width: 10,
      height: 20,
    },
    shadowOpacity: 0.1,
    shadowRadius: 20,
  },
  imageContainer: {
    width: 300,
    height: 285,
    borderRadius: 22,
    backgroundColor: "white",
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: 276,
    height: 262,
  },
});
