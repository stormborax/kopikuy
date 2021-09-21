import React from "react";
import { Box, Text } from "native-base";

const AboutScreen: React.FC = ({ navigation, route }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitleAlign: "center",
    });
  });
  return (
    <Box px={4} pt={4} flex={1} alignItems="center" bg="white">
      <Text fontSize="lg" mt={4}>
        Kopi Kuy merupakan salah satu kedai kopi non-waralaba dengan pertumbuhan
        tercepat di Indonesia. Dimulai dari mimpi para pendiri Kopi Kuy untuk
        membawa rasa cinta terhadap kopi Indonesia dan memperkenalkannya ke
        seluruh dunia.
        {"\n"}
        {"\n"}
        Di Kopi Kuy, kami berusaha mewujudkan mimpi menjadi kedai kopi terkemuka
        di Indonesia, bahkan dunia, dengan mengambil pendekatan "New Retail"
        online dan offline. Kami belajar setiap hari untuk memastikan seluruh
        pelanggan mendapat pengalaman terbaik dengan pelayanan kelas dunia.
        {"\n"}
        {"\n"}
        Impian kami adalah menjadi kedai kopi terbesar di Indonesia, bahkan
        dunia dengan mengedepankan produk yang terjangkau namun tetap
        berkualitas tinggi. Dengan menggabungkan keahlian kami di bidang
        teknologi serta pelayanan yang berkualitas, kami akan memberikan
        pelayanan yang cepat dan ramah agar setiap pelanggan Kopi Kuy dapat
        menikmati secangkir kebahagiaan di dalam genggaman mereka setiap
        harinya.
      </Text>
    </Box>
  );
};

export default AboutScreen;
