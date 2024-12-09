import {Text, TextInput, View, StyleSheet, Image} from "react-native";
import {useEffect, useState} from "react";
import axios from "axios";

export default function Index() {
    const [city, setCity] = useState("Tashkent");
    const [weather, setWeather] = useState(null);
    const [searchCity, setSearchCity] = useState('');

    const  API_KEY = 'a4cc1149d25d3c89542d65d5b68c8731'
    const API_URL = 'https://api.openweathermap.org/'

    useEffect(() => {
        getWeather(city);
    }, [city]);

    const getWeather = async (cityName) => {
        try {
            const response = await axios.get(`${API_URL}data/2.5/weather?q=${city}&appid=${API_KEY}`)
            setWeather(response.data);
            console.log(response)
        }
        catch (error) {
            console.log(error);
            alert(error)
        }

    }

    return (
        <View style={styles.container}>
            {weather ? (
                <View style={styles.weatherContainer}>
                    <Image
                        source={{ uri: `https://openweathermap.org/img/w/${weather.weather[0].icon}.png` }}
                        style={{ width: 150, height: 150 }}
                    />
                    <View>
                        <Text style={styles.city}>{weather.name}</Text>
                        <Text style={styles.date}>{new Date().toLocaleDateString()}</Text>
                    </View>
                    <View>
                        <Text style={styles.temperature}>{Math.round(weather.main.temp - 273.15)}°C</Text>
                        <Text style={styles.description}>{weather.weather[0].main}</Text>
                    </View>
                </View>
            ) : ('')}
            <TextInput
                style={styles.input}
                placeholder="Введите город"
                value={searchCity}
                onChangeText={setSearchCity}
                onSubmitEditing={() => setCity(searchCity)}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1083ca',
        color: '#fff'
    },
    input: {
        width: 250,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    weatherContainer: {
        alignItems: 'center',
        display: "flex",
        flexDirection: 'column',
        gap: 20
    },
    city: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff'
    },
    temperature: {
        fontSize: 48,
        fontWeight: 'bold',
        textAlign: "center",
        color: '#fff'
    },
    description: {
        fontSize: 18,
        marginBottom: 20,
        color: '#fff',
        textAlign: "center",
    },
    date: {
        fontSize: 16,
        textAlign: "center",
        color: '#fff'
    },
});
