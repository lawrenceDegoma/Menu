import { useState } from "react";

export default function Home() {
    const [menuItems] = useState([
        { name: "Long Island Iced Tea", description: "A bold and refreshing cocktail made with a blend of vodka, rum, tequila, gin, and triple sec. Mixed with sweet and sour and a splash of Coke." },
        { name: "Tokyo Tea", description: "Adding a twist to the Long Island, the Tokyo Tea uses a melon liqueur called Midori to give the drink its green hue. Topped with Sprite for a crisp drinking experience." },
        { name: "Blue Raspberry Fizz", description: "If you're looking for a simple and fun time, try this Fizz for a light and sweet carbonated beverage." }
    ]);

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Drink Menu</h1>
            <div style={styles.menuGrid}>
                {menuItems.map((item, index) => (
                    <div key={index} style={styles.card}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        flexDirection: "column" as "column",
        alignItems: "center",
        padding: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
    },

    heading: {
        fontSize: "2rem",
        textAlign: "center" as "center",
        marginBottom: "20px",
    },

    menuGrid: {
        display: "flex",
        flexDirection: "column" as "column",
        gap: "20px", // Removed extra space
        width: "100%",
    },

    card: {
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center" as "center",
    },

    '@media(min-width: 768px)': {
        menuGrid: {
            flexDirection: "row" as "row",
            flexWrap: "wrap" as "wrap",
            justifyContent: "center" as "center",
            gap: "30px",
        },
        card: {
            flex: "0 1 calc(33.33% - 30px)",
        },
    },
};
