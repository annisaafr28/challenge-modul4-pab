import React from "react";
import { ScrollView, Image, Box, Text, Pressable, Modal } from "native-base";
import Separator from "../components/separator";
import Button from "../components/button";

const ButtonHandler = () => {
    alert("Button Handler");
};

const Article = () => {
    return (
        <ScrollView>
            <Image 
                source={{
                    uri: "https://ce.ittelkom-sby.ac.id/wp-content/uploads/2020/09/WhatsApp-Image-2018-04-18-at-11.47.40-AM-1024x564-1.png",
                }}
                height={100}
                resizeMode="contain"
                marginVertical={15}
            />
            <Box
                paddingHorizontal={15}
                paddingVertical={20}
                backgroundColor="#eeeeee"
            >
                <Text fontSize={24} fontWeight="bold">
                    Benarkah Generasi Baru Generasi Strawberi? Tentu tidak dongg
                </Text>
            </Box>
            <Box padding={3}>
                <Image 
                    source={{
                        uri: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
                    }}
                    height="220"
                    resizeMode="contain"  
                />
                <Separator height={10} />
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Surabaya, Oktober 2022</Text>
                        Ada sebuah sebutan baru-baru ini yang kerap dilemparkan pada mereka
                        yang lahir pada tahun 2000-an, generasi strawberi. Pelabelan ini
                        dikarenakan generasi sebelumnya (Boomers dan X) menilai generasi muda
                        lunak dan mudah terluka seperti buah strawberi. 
                </Text>
                <Separator height={10} />
                <Text>
                    Pada mulanya sebutan ini berkembang di Asia Timur dan muncul kali
                    pertama di Taiwan. Sebutan ditujukan bagi generasi muda yang
                    diibaratkan seperti buah strawberi yang eksotis namun mudah hancur
                    apabila terkena sedikit ditekan. Para generasi lama menyebut generasi
                    strawberi ini lunak dan kurang tahan banting. Mereka juga dinilai
                    tidak kuat dalam menghadapi kompetisi dan mudah menyerah pada
                    ketidakpastian.
                </Text>
                <Separator height={10} />
                <Text>
                    "Yang pertama kita harus kenali bahwa generasi muda memiliki fixed
                    mindset, pola pikir yang meyakini jika bakat adalah hal mutlak
                    sehingga kemampuan seseorang tidak bisa dikembangkan lagi. Ini salah,
                    inilah yang perlu kita ubah." Jelas Tri Arief Sardjono, Rektor
                    ITTelkom Surabaya disela kegiatannya.
                </Text>
                <Separator height={10} />
                <Text>
                    Tumbuh pada era keterbukaan informasi yang mampu menyerap segala
                    informasi seperti spons terkadang membuat mereka menyerapnya secara
                    mentah. Kemudahan fasilitas dan peradaban yang lebih maju membuat para
                    generasi muda dimanjakan dengan segala hal yang instan. Terlebih
                    pandemi Covid-19 dimana mereka melalui era kesepian yang belum pernah
                    ada sebelumnya, menyebabkan kurangnya interaksi dengan dunia luar yang
                    menjadikan standar level kesulitan mereka lebih rendah.
                </Text>
                <Separator height={10} />
                <Text>
                    "Penyadaran bahwa tidak ada sesuatu yang dapat dicapai secara instan,
                    ada proses dan perjuangan. Dan kembali lagi, fixed mindset juga harus
                    dirubah menjadi growth mindset. Kepercayaan bahwa mereka dapat
                    mengembangkan kemampuan dan berani menghadapi tantangan." Imbuh Tri
                    Arief.
                </Text>
                <Separator height={10} />
                <Text>
                    Di dalam orasi ilmiah pada momentum Wisuda II, Dr. Tri Arief Sardjono
                    S.T., M.T., juga memberikan gambaran hal ini seperti perlombaan
                    kelinci dan kura-kura. Hanya karena kelinci lebih berbakat dalam
                    berlari bukan berarti kura-kura akan kalah telak. Kegigihan dan fokus
                    serta konsistensi disertai komitmen membuat kura-kura menjadi pemenang
                    sejati. Tidak menyerah di awal pada sesuatu yang mustahil adalah
                    bentuk endurance serta growth mindset yang harus diteladani.
                </Text>
                <Separator height={10} />
                <Text>
                    "Di kampus ini (ITTelkom Surabaya), kami sadar bahwa mengajarkan
                    growth mindset tidak bisa dilakukan di dalam ruang kuliah saja. Kami
                    dorong adik-adik mahasiswa untuk berkembang, kami berikan mereka
                    ruang. Sebagai contoh bagaimana bisa membuat lahan tandus menjadi
                    ruang terbuka hijau? Maka manfaatkan teknologi. Generasi muda ini
                    adalah generasi yang sangat kreatif, kritis, dan cerdas." Jelasnya.
                </Text>
                <Separator height={10} />
                <Box style={styles.centeredView}>
                     <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {
                         Alert.alert("Modal closed");
                         setModalVisible(!modalVisible);
                     }}>
                         <Box style={styles.centeredView}>
                             <Box style={styles.modalView}>
                                 <Text style={styles.modalText}>Thank You!</Text>
                                 <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {
                                     setModalVisible(!modalVisible);
                                 }}>
                                     <Text style={styles.textStyle}>Close</Text>
                                 </Pressable>
                             </Box>
                         </Box>
                     </Modal>
                     <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => {
                         setModalVisible(true);
                     }}>
                         <Text style={styles.textStyle}>Like This Article?</Text>
                     </Pressable>
                 </Box>
                <Text fontWeight="bold">OCTOBER 12, 2022 </Text>
                <Separator height={10} />
                <Box backgroundColor="gray" height={1} />
                <Separator height={20} />
                <Button text="Share" onPress={ButtonHandler} />
                <Separator height={70} />
            </Box>
        </ScrollView>
    )
}

export default Article;

// import React, {useState} from 'react';
// import { ScrollView, Image, View, Text, StyleSheet, Alert, Modal, Pressable } from "react-native";
// import Separator from "../components/separator";
// import Button from "../components/button";

// // Functional Component
// const Article = () => {
//     // Arrow Function
//     const buttonHandler = () => {
//         Alert.alert("Button Handler");
//     };

//     const [modalVisible, setModalVisible] = useState(false);

//     return (
//         <ScrollView>
//             <Image 
//                 source={{
//                     uri: "https://ce.ittelkom-sby.ac.id/wp-content/uploads/2020/09/WhatsApp-Image-2018-04-18-at-11.47.40-AM-1024x564-1.png",
//                 }}
//                 style={styles.logo}
//             />
//             <View style={styles.titleView}>
//                 <Text style={styles.title}>
//                     Benarkah Generasi Baru Generasi Strawberi? Ayo Belajar Growth Mindset
//                     dari Kampus ITTelkom Surabaya
//                 </Text>
//             </View>
//             <View style={styles.content}>
//                 <Image 
//                     source={{
//                         uri: "https://ittelkom-sby.ac.id/wp-content/uploads/2022/10/asdfghkl-768x472.jpg",
//                     }}
//                     style={styles.mainImage}
//                 />
//                 <Separator height={10} />
//                 <Text>
//                     <Text style={{ fontWeight: "bold" }}>Surabaya, Oktober 2022</Text> -
//                     Ada sebuah sebutan baru-baru ini yang kerap dilemparkan pada mereka
//                     yang lahir pada tahun 2000-an, generasi strawberi. Pelabelan ini
//                     dikarenakan generasi sebelumnya (Boomers dan X) menilai generasi muda
//                     lunak dan mudah terluka seperti buah strawberi.
//                 </Text>
//                 <Separator height={10} />
//                 <Text>
//                     Pada mulanya sebutan ini berkembang di Asia Timur dan muncul kali
//                     pertama di Taiwan. Sebutan ditujukan bagi generasi muda yang
//                     diibaratkan seperti buah strawberi yang eksotis namun mudah hancur
//                     apabila terkena sedikit ditekan. Para generasi lama menyebut generasi
//                     strawberi ini lunak dan kurang tahan banting. Mereka juga dinilai
//                     tidak kuat dalam menghadapi kompetisi dan mudah menyerah pada
//                     ketidakpastian.
//                 </Text>
//                 <Separator height={10} />
//                 <Text>
//                     "Yang pertama kita harus kenali bahwa generasi muda memiliki fixed
//                     mindset, pola pikir yang meyakini jika bakat adalah hal mutlak
//                     sehingga kemampuan seseorang tidak bisa dikembangkan lagi. Ini salah,
//                     inilah yang perlu kita ubah." Jelas Tri Arief Sardjono, Rektor
//                     ITTelkom Surabaya disela kegiatannya.
//                 </Text>
//                 <Separator height={10} />
//                 <Text>
//                     Tumbuh pada era keterbukaan informasi yang mampu menyerap segala
//                     informasi seperti spons terkadang membuat mereka menyerapnya secara
//                     mentah. Kemudahan fasilitas dan peradaban yang lebih maju membuat para
//                     generasi muda dimanjakan dengan segala hal yang instan. Terlebih
//                     pandemi Covid-19 dimana mereka melalui era kesepian yang belum pernah
//                     ada sebelumnya, menyebabkan kurangnya interaksi dengan dunia luar yang
//                     menjadikan standar level kesulitan mereka lebih rendah.
//                 </Text>
//                 <Separator height={10} />
//                 <Text>
//                     "Penyadaran bahwa tidak ada sesuatu yang dapat dicapai secara instan,
//                     ada proses dan perjuangan. Dan kembali lagi, fixed mindset juga harus
//                     dirubah menjadi growth mindset. Kepercayaan bahwa mereka dapat
//                     mengembangkan kemampuan dan berani menghadapi tantangan." Imbuh Tri
//                     Arief.
//                 </Text>
//                 <Separator height={10} />
//                 <Text>
//                     Di dalam orasi ilmiah pada momentum Wisuda II, Dr. Tri Arief Sardjono
//                     S.T., M.T., juga memberikan gambaran hal ini seperti perlombaan
//                     kelinci dan kura-kura. Hanya karena kelinci lebih berbakat dalam
//                     berlari bukan berarti kura-kura akan kalah telak. Kegigihan dan fokus
//                     serta konsistensi disertai komitmen membuat kura-kura menjadi pemenang
//                     sejati. Tidak menyerah di awal pada sesuatu yang mustahil adalah
//                     bentuk endurance serta growth mindset yang harus diteladani.
//                 </Text>
//                 <Separator height={10} />
//                 <Text>
//                     "Di kampus ini (ITTelkom Surabaya), kami sadar bahwa mengajarkan
//                     growth mindset tidak bisa dilakukan di dalam ruang kuliah saja. Kami
//                     dorong adik-adik mahasiswa untuk berkembang, kami berikan mereka
//                     ruang. Sebagai contoh bagaimana bisa membuat lahan tandus menjadi
//                     ruang terbuka hijau? Maka manfaatkan teknologi. Generasi muda ini
//                     adalah generasi yang sangat kreatif, kritis, dan cerdas." Jelasnya.
//                 </Text>
//                 <Separator height={20} />
//                 <View style={styles.centeredView}>
//                     <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => {
//                         Alert.alert("Modal closed");
//                         setModalVisible(!modalVisible);
//                     }}>
//                         <View style={styles.centeredView}>
//                             <View style={styles.modalView}>
//                                 <Text style={styles.modalText}>Thank You!</Text>
//                                 <Pressable style={[styles.button, styles.buttonClose]} onPress={() => {
//                                     setModalVisible(!modalVisible);
//                                 }}>
//                                     <Text style={styles.textStyle}>Close</Text>
//                                 </Pressable>
//                             </View>
//                         </View>
//                     </Modal>
//                     <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => {
//                         setModalVisible(true);
//                     }}>
//                         <Text style={styles.textStyle}>Like This Article?</Text>
//                     </Pressable>
//                 </View>
//                 <Separator height={20} />
//                 <Text style={{ fontWeight: "bold" }}>OCTOBER 12, 2023</Text>
//                 <Separator height={10} />
//                 <View style={{ backgroundColor: "gray", height: 1 }} />
//                 <Separator height={20} />
//                 <Button text="Share" onPress={buttonHandler} />
//                 <Separator height={70} />
//             </View>
//         </ScrollView>
//     );
// };

// // Styles
// const styles = StyleSheet.create({
//     logo: {
//         height: 100,
//         resizeMode: "contain",
//         marginVertical: 15,
//     },
//     titleView: {
//         paddingHorizontal: 15,
//         paddingVertical: 20,
//         backgroundColor: "#eeeeee",
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: "bold",
//     },
//     mainImage: {
//         height: 200,
//         resizeMode: "contain",
//     },
//     content: {
//         padding: 15,
//     },
//     centeredView: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         marginTop: 22,
//     },
//     modalView: {
//         margin: 20,
//         backgroundColor: 'white',
//         borderRadius: 20,
//         padding: 35,
//         alignItems: 'center',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 4,
//         // width: 20,
//     },
//     button: {
//         borderRadius: 20,
//         padding: 10,
//         elevation: 2,

//     },
//     buttonOpen: {
//         backgroundColor: '#AA0002',
//     },
//     buttonClose: {
//         backgroundColor: '#2196F3',
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 0,
//             height: 2,
//         },
//     },
//     textStyle: {
//         color: 'white',
//         fontWeight: 'bold',
//         textAlign: 'center',
//     },
//     modalText: {
//         marginBottom: 15,
//         textAlign: 'center',
//     },
// });

// export default Article;