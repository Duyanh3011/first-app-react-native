import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  screenCalculator: {
    alignItems: "flex-end",
    justifyContent: "center",
    height: 50,
    width: "100%",
    borderColor: "#000000",
    borderWidth: 2,
    marginBottom: 10,
    justifyContent: "center",
  },
  button: {
    display: "flex",
    backgroundColor: "#DDDDDD",
    alignItems: "center",
    padding: 10,
    borderRadius: 5,
    width: "22%",
    height: 100,
    marginBottom: 10,
  },
  keyPad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 20,
    textAlign: "center",
    marginRight: "1%",
  },
});
