import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [menuItems, setMenuItems] = useState([
    { name: "Tokyo Tea", description: ""},
    { name: "Long Island Iced Tea", description: ""},
    { name: "Blue Razzbery Fizz", description: ""}
    ]};

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Drink Menu</h1>
            <div style={styles.menuGrid}>
                {menuItems.map((item, index) => (
                    <div key={index} style={styles.card)>
                        <Image srx={item.image} alt={item.name} width={200} height={150} />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

cont styles = {
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
        gap: "20 px",
        width: "100%",
    },

    card: {
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center" as "center",
    },

    '@meda(min-width: 768px)': {
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

