import React, { useState, useEffect } from "react";
import Card from "../../components/cards";
import { getItems, addItem, deleteItem } from "../../api";

const Home: React.FC = () => {
    const [cards, setCards] = useState<{ id: number; title: string; description: string; }[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    // @todo move this useEffect to hooks for better folder structure
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getItems();
                setCards(data);
            } catch (error) {
                setError("Error fetching data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [loading]);

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const addedItem = await addItem({ title: "New Card", description: "New Card Description" });
            console.log(addedItem) // @ todo remove silent caching
            setLoading(true)
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await deleteItem(id);
            setLoading(true)
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="min-h-screen w-full bg-blue-200 p-12 flex flex-col items-center">
            <form onSubmit={handleSubmit} className="shadow-md rounded-lg p-6 w-full max-w-md mb-6 border">
                <h2 className="text-xl font-semibold mb-4">Add New Item</h2>
                <button type="submit" className="w-full py-2 rounded ">
                    Add Item
                </button>
            </form>

            <div className="w-full max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.description}
                        onDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
