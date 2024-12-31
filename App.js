import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headers}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 500,
          }}
        >
          Đăng nhập
        </Text>
      </View>
      <View style={styles.body}>
        <View>
          <Text
            style={{
              fontSize: 18,
              marginBottom: 10,
            }}
          >
            Nhập số điện thoại
          </Text>
          <Text style={{ marginBottom: 10 }}>
            Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại
            OneHousing Pro
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Nhập số điện thoại của bạn"
            keyboardType="numeric"
          />
        </View>
        <Button title="Tiếp tục" disabled />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },

  headers: {
    display: "flex",
    justifyContent: "center",
    paddingLeft: 20,
    height: 60,
    borderBottomWidth: 0.5,
    borderColor: "#989898e0",
  },

  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },

  input: {
    borderBottomWidth: 0.5,
    borderColor: "#989898e0",
    fontSize: 16,
    paddingHorizontal: 10,
    marginBottom: 40,
  },
});
