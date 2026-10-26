import { useState, useEffect } from 'react'
import './App.css'

// ── API CONFIG ────────────────────────────────────────
// Sign up free at: openweathermap.org/api
// Replace this with your actual API key
const API_KEY = import.meta.env.VITE_WEATHER_KEY
const BASE_URL = "https://api.openweathermap.org/data/2.5"

// ── CHILD COMPONENTS ──────────────────────────────────

function SearchBar({ onSearch, loading }) {
    const [city, setCity] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (city.trim()) {
            onSearch(city.trim())
        }
    }

    return (
        <form className="search-section" onSubmit={handleSubmit}>
            <input
                className="search-input"
                type="text"
                placeholder="Search city... e.g. Nairobi"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button
                className="search-btn"
                type="submit"
                disabled={loading || !city.trim()}
            >
                {loading ? "..." : "Search"}
            </button>
        </form>
    )
}

function WeatherCard({ weather }) {
    return (
        <div className="weather-card">
            <div className="city-name">{weather.name}</div>
            <div className="country">{weather.sys.country}</div>

            <div className="temp-section">
                <div className="temperature">
                    {Math.round(weather.main.temp)}°C
                </div>
                <div className="weather-desc">
                    {weather.weather[0].description}
                </div>
            </div>

            <div className="details-grid">
                <div className="detail-card">
                    <div className="detail-label">Feels Like</div>
                    <div className="detail-value">
                        {Math.round(weather.main.feels_like)}°C
                    </div>
                </div>
                <div className="detail-card">
                    <div className="detail-label">Humidity</div>
                    <div className="detail-value">
                        {weather.main.humidity}%
                    </div>
                </div>
                <div className="detail-card">
                    <div className="detail-label">Wind</div>
                    <div className="detail-value">
                        {Math.round(weather.wind.speed)} m/s
                    </div>
                </div>
            </div>
        </div>
    )
}

function SearchHistory({ history, onSelect }) {
    if (history.length === 0) return null

    return (
        <div className="history-section">
            <h3>Recent Searches</h3>
            <div className="history-list">
                {history.map((city, index) => (
                    <button
                        key={index}
                        className="history-item"
                        onClick={() => onSelect(city)}
                    >
                        {city}
                    </button>
                ))}
            </div>
        </div>
    )
}

// ── MAIN APP COMPONENT ────────────────────────────────
export default function App() {
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [history, setHistory] = useState([])

    // Load search history from localStorage on startup
    useEffect(() => {
        const saved = localStorage.getItem("searchHistory")
        if (saved) setHistory(JSON.parse(saved))
    }, [])

    async function fetchWeather(city) {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(
                `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
            )

            if (!response.ok) {
                if (response.status === 404) {
                    throw new Error(`City "${city}" not found. Check the spelling.`)
                }
                throw new Error("Failed to fetch weather data.")
            }

            const data = await response.json()
            setWeather(data)

            // Update search history
            setHistory(prev => {
                const updated = [city, ...prev.filter(c => c !== city)].slice(0, 5)
                localStorage.setItem("searchHistory", JSON.stringify(updated))
                return updated
            })

        } catch (err) {
            setError(err.message)
            setWeather(null)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="app">
            <h1 className="app-title">🌤️ Weather App</h1>
            <p className="app-subtitle">Search any city in the world</p>

            <SearchBar onSearch={fetchWeather} loading={loading} />

            <SearchHistory
                history={history}
                onSelect={fetchWeather}
            />

            {loading && (
                <div className="loading">
                    <div className="spinner"></div>
                    <p>Fetching weather...</p>
                </div>
            )}

            {error && (
                <div className="error">
                    ⚠️ {error}
                </div>
            )}

            {weather && !loading && (
                <WeatherCard weather={weather} />
            )}

            {!weather && !loading && !error && (
                <div className="empty-state">
                    <div className="emoji">🌍</div>
                    <p>Search for a city to see the weather</p>
                </div>
            )}
        </div>
    )
}
